//@ts-ignore
import React from "react";
import App from "../../App";
import allReducers from "../../reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import user from "@testing-library/user-event";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { LOGIN_MOCK_PAYLOAD_EMAIL, LOGIN_MOCK_TOKEN, MOCK_ACCESS_INPUTS, MOCK_ACCESS_OUTPUTS } from "../../utils/mocks";
import "@types/jest";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";
import { TestService } from "../../utils/TestServiceClass";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { MIDIAccessRecord, MIDIConnectionEvent } from "../../utils/MIDIControlClass";
// @ts-ignore need to implement a fake version of this for the jest test as expected
window.navigator.requestMIDIAccess = async function (): Promise<MIDIAccessRecord> {
  return Promise.resolve({
    inputs: MOCK_ACCESS_INPUTS,
    outputs: MOCK_ACCESS_OUTPUTS,
    sysexEnabled: false,
    onstatechange: function (_event: MIDIConnectionEvent): void {
      return void 0;
    }
  } as MIDIAccessRecord);
};

const store = createStore(
  allReducers,
  // @ts-expect-error this will exist in the browser
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//letting these methods be available to silence the jest errors
window.HTMLMediaElement.prototype.load = () => { /* do nothing */ };
window.HTMLMediaElement.prototype.play = async () => { /* do nothing */ };
window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };
// eslint-disable-next-line
// @ts-ignore
window.HTMLMediaElement.prototype.addTextTrack = () => { /* do nothing */ };

// const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(() => resolve(), ms));

describe("tests the logout works", () => {

  afterEach(() => {
    cleanup();
  });

  it("logs in first and then logs out", async () => {
    const fakeFetchRes = (value: any): Promise<{ status: 200, json: () => 
      Promise<any>; }> => Promise.resolve({ status: 200, json: () => Promise.resolve(value)});
    const mockFetch = jest.fn()
                      //default
                      // .mockReturnValue("kdfjkdj")
                      // first
                      .mockReturnValueOnce(fakeFetchRes(LOGIN_MOCK_TOKEN))
                      // second
                      .mockReturnValueOnce(fakeFetchRes({ presets: [] }))
                      // third
                      .mockReturnValueOnce(fakeFetchRes({ displayName: "", preset: "waves" }))
                      .mockReturnValueOnce(fakeFetchRes({ displayName: "", preset: "waves" }));

    //@ts-ignore
    global.fetch = mockFetch;

    const history = createMemoryHistory();

    render(
      <>
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
      </>
    );
    expect(fetch).toHaveBeenCalledTimes(0);
    expect(screen.getByTestId("location-display").textContent).toBe("/");

    const page = (await screen.findAllByText(/^Login$/g)).find((el) => {
      return el.classList.contains("nav-button");
    }) as HTMLElement;
    expect(page).toBeInTheDocument();
    fireEvent.click(page);

    expect(screen.getByTestId("location-display").textContent).toBe("/login");

    const formEls = {
      emailOrUsername: screen.getByPlaceholderText(/my_username/g) as HTMLInputElement,
      password: screen.getByPlaceholderText(/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/g) as HTMLInputElement,
      login: screen.getAllByRole("button", { name: "Login" }).find((btn) => {
        return btn.classList.contains("form-btn");
      }) as HTMLElement
    };

    expect(formEls.emailOrUsername).toBeInTheDocument();
    expect(formEls.password).toBeInTheDocument();
    expect(formEls.login).toBeInTheDocument();

    user.type(formEls.emailOrUsername, LOGIN_MOCK_PAYLOAD_EMAIL.emailOrUsername);
    user.type(formEls.password, LOGIN_MOCK_PAYLOAD_EMAIL.password);
    expect(formEls.emailOrUsername.value).toBe(LOGIN_MOCK_PAYLOAD_EMAIL.emailOrUsername);
    expect(formEls.password.value).toBe(LOGIN_MOCK_PAYLOAD_EMAIL.password);

    await act(async () => {
      formEls.login.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenNthCalledWith(1, 
      "http://localhost:3001/user/login", 
      {
        "body": "{\"usernameOrEmail\":{\"email\":\"iexist@exist.com\"},\"password\":\"believe it\"}",
        "headers": {
          "Content-Type": "application/json"
        }, 
        "method": "POST"
      }
    );
    // next two fetchs are the /user and /user/presets. which the mock should match each defined mock response
    // to each fetch in the order they happen in the application
    expect(screen.getByTestId("location-display").textContent).toBe("/");
    expect(localStorage.getItem("id_token")).toBe(LOGIN_MOCK_TOKEN.user.token);

    const logoutBtn = screen.getByTestId("logout-btn");
    expect(logoutBtn).toBeInTheDocument();

    act(() => {
      logoutBtn.dispatchEvent(TestService.createBubbledEvent("click"));
    });

    expect(localStorage.getItem("id_token")).toBe(null);

    const loginPageBtn = (await screen.findAllByText(/^Login$/g)).find((el) => {
      return el.classList.contains("nav-button");
    }) as HTMLElement;
    expect(loginPageBtn).toBeInTheDocument();

  });

});