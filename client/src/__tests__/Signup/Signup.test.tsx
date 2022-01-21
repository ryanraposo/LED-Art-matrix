// eslint-disable-next-line
// @ts-ignore
import React from "react";
import App from "../../App";
import allReducers from "../../reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { SIGNUP_MOCK_ERROR, SIGNUP_MOCK_PAYLOAD, SIGNUP_MOCK_RESULT } from "../../utils/mocks";
import "@types/jest";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { TestApiServiceClass } from "../../utils/TestApiServiceClass";
const tapi = new TestApiServiceClass("alive");

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

//TODO IMPLEMENT WINDOW NAVIGATION window.location.assign() for signup test

// const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(() => resolve(), ms));



describe("Test rendering signup correctly", () => {

  const originalFetch = global.fetch;

  afterEach(() => {
    cleanup();
    global.fetch = originalFetch;
    localStorage.clear();
  });

  it("Render the home page and then click sign up button to go to that page", async () => {

    expect(tapi.alive()).toBe("alive");
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    const link = await screen.findByText(/^Sign\sUp$/g);
    expect(link).toBeInTheDocument();
    fireEvent.click(link);

    const formEls = {
      username: screen.getByPlaceholderText(/my_username/g),
      email: screen.getByPlaceholderText(/example@email.com/g),
      password: screen.getByPlaceholderText(/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/g),
      signup: screen.getAllByRole("button", { name: "Sign Up" }).find((btn) => {
        return btn.classList.contains("form-btn");
      }) as HTMLElement
    };

    expect(formEls.username).toBeInTheDocument();
    expect(formEls.email).toBeInTheDocument();
    expect(formEls.password).toBeInTheDocument();
    expect(formEls.signup).toBeInTheDocument();

  });
});

describe("test signup functionality", () => {

  const originalFetch = global.fetch;
  
  afterEach(() => {
    cleanup();
    global.fetch = originalFetch;
    localStorage.clear();
  });

  it("Checks the input fields are available and can submit with a stubbed api", async () => {
    // @ts-ignore trying to mock fetch
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(SIGNUP_MOCK_RESULT),
      })
    );
    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <Router history={history}>

        </Router>
          <App />
      </Provider>
    );

    const page = (await screen.findAllByRole("link", { name: "Sign Up" })).find((el) => {
      return el.classList.contains("nav-button");
    }) as HTMLElement;
    expect(page).toBeInTheDocument();
    fireEvent.click(page);

    const formEls = {
      username: screen.getByPlaceholderText(/my_username/g) as HTMLInputElement,
      email: screen.getByPlaceholderText(/example@email.com/g) as HTMLInputElement,
      password: screen.getByPlaceholderText(/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/g) as HTMLInputElement,
      btn: screen.getAllByRole("button", { name: "Sign Up" }).find((btn) => {
        return btn.classList.contains("form-btn");
      }) as HTMLElement
    };

    //check the input elements are in the document
    expect(formEls.username).toBeInTheDocument();
    expect(formEls.email).toBeInTheDocument();
    expect(formEls.password).toBeInTheDocument();
    expect(formEls.btn).toBeInTheDocument();

    // type inputs to form fields and submit

    user.type(formEls.username, SIGNUP_MOCK_PAYLOAD.username);
    user.type(formEls.email, SIGNUP_MOCK_PAYLOAD.email);
    user.type(formEls.password, SIGNUP_MOCK_PAYLOAD.password);
    
    user.clear(formEls.username);
    user.clear(formEls.email);
    user.clear(formEls.password);
    expect(formEls.username.value).toBe("");
    expect(formEls.email.value).toBe("");
    expect(formEls.password.value).toBe("");
    
    user.type(formEls.username, SIGNUP_MOCK_PAYLOAD.username);
    user.type(formEls.email, SIGNUP_MOCK_PAYLOAD.email);
    user.type(formEls.password, SIGNUP_MOCK_PAYLOAD.password);
    expect(formEls.username.value).toBe(SIGNUP_MOCK_PAYLOAD.username);
    expect(formEls.email.value).toBe(SIGNUP_MOCK_PAYLOAD.email);
    expect(formEls.password.value).toBe(SIGNUP_MOCK_PAYLOAD.password);

    //click signup to simulate api mock
    
    await act(async () => {
      formEls.btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(fetch).toHaveBeenCalledTimes(2);

  });
});
describe("Tests network error message", () => {

  const originalFetch = global.fetch;
  
  afterEach(() => {
    cleanup();
    global.fetch = originalFetch;
    localStorage.clear();
  });

  it("Checks the input fields are available and can submit with a stubbed api", async () => {
     // @ts-ignore trying to mock fetch
    global.fetch = jest.fn(() =>
      Promise.reject({
        message: new Error("network is down").message
      })
    );
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    const page = (await screen.findAllByRole("link", { name: "Sign Up" })).find((el) => {
      return el.classList.contains("nav-button");
    }) as HTMLElement;
    expect(page).toBeInTheDocument();
    fireEvent.click(page);

    const formEls = {
      username: screen.getByPlaceholderText(/my_username/g) as HTMLInputElement,
      email: screen.getByPlaceholderText(/example@email.com/g) as HTMLInputElement,
      password: screen.getByPlaceholderText(/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/g) as HTMLInputElement,
      btn: screen.getAllByRole("button", { name: "Sign Up" }).find((btn) => {
        return btn.classList.contains("form-btn");
      }) as HTMLElement

    };
    //check the input elements are in the document
    expect(formEls.username).toBeInTheDocument();
    expect(formEls.email).toBeInTheDocument();
    expect(formEls.password).toBeInTheDocument();
    expect(formEls.btn).toBeInTheDocument();
    
    user.type(formEls.username, SIGNUP_MOCK_PAYLOAD.username);
    user.type(formEls.email, SIGNUP_MOCK_PAYLOAD.email);
    user.type(formEls.password, SIGNUP_MOCK_PAYLOAD.password);
    expect(formEls.username.value).toBe(SIGNUP_MOCK_PAYLOAD.username);
    expect(formEls.email.value).toBe(SIGNUP_MOCK_PAYLOAD.email);
    expect(formEls.password.value).toBe(SIGNUP_MOCK_PAYLOAD.password);
    
    await act(async () => {
      formEls.btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId("location-display")).toHaveTextContent("/signup");
    
  });
});

describe("need to impl window.location.assign()", () => {

  afterEach(() => {
    cleanup();
    localStorage.clear();
  });

  it("app tries to redirect after successful signup", async () => {
    // @ts-ignore
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(SIGNUP_MOCK_RESULT),
      })
    );
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
    expect(screen.getByTestId("location-display")).toHaveTextContent("/");

    const page = (await screen.findAllByRole("link", { name: "Sign Up" })).find((el) => {
      return el.classList.contains("nav-button");
    }) as HTMLElement;
    expect(page).toBeInTheDocument();
    fireEvent.click(page);

    expect(screen.getByTestId("location-display")).toHaveTextContent("/signup");

    const formEls = {
      username: screen.getByPlaceholderText(/my_username/g) as HTMLInputElement,
      email: screen.getByPlaceholderText(/example@email.com/g) as HTMLInputElement,
      password: screen.getByPlaceholderText(/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/g) as HTMLInputElement,
      btn: screen.getAllByRole("button", { name: "Sign Up" }).find((btn) => {
        return btn.classList.contains("form-btn");
      }) as HTMLElement
    };

    //check the input elements are in the document
    expect(formEls.username).toBeInTheDocument();
    expect(formEls.email).toBeInTheDocument();
    expect(formEls.password).toBeInTheDocument();
    expect(formEls.btn).toBeInTheDocument();

    // type inputs to form fields and submit

    user.type(formEls.username, SIGNUP_MOCK_PAYLOAD.username);
    user.type(formEls.email, SIGNUP_MOCK_PAYLOAD.email);
    user.type(formEls.password, SIGNUP_MOCK_PAYLOAD.password);
    
    user.clear(formEls.username);
    user.clear(formEls.email);
    user.clear(formEls.password);
    expect(formEls.username.value).toBe("");
    expect(formEls.email.value).toBe("");
    expect(formEls.password.value).toBe("");
    
    user.type(formEls.username, SIGNUP_MOCK_PAYLOAD.username);
    user.type(formEls.email, SIGNUP_MOCK_PAYLOAD.email);
    user.type(formEls.password, SIGNUP_MOCK_PAYLOAD.password);
    expect(formEls.username.value).toBe(SIGNUP_MOCK_PAYLOAD.username);
    expect(formEls.email.value).toBe(SIGNUP_MOCK_PAYLOAD.email);
    expect(formEls.password.value).toBe(SIGNUP_MOCK_PAYLOAD.password);

    //click signup to simulate api mock
    
    await act(async () => {
      formEls.btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(fetch).toHaveBeenCalledTimes(2);

    expect(screen.getByTestId("location-display")).toHaveTextContent("/");
    
  });

});

describe("error signup", () => {
  
  it("app tries to redirect after error signup", async () => {
    // @ts-ignore
      global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(SIGNUP_MOCK_ERROR),
      })
    );
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
    expect(screen.getByTestId("location-display")).toHaveTextContent("/");

    const page = (await screen.findAllByRole("link", { name: "Sign Up" })).find((el) => {
      return el.classList.contains("nav-button");
    }) as HTMLElement;
    expect(page).toBeInTheDocument();
    fireEvent.click(page);

    expect(screen.getByTestId("location-display")).toHaveTextContent("/signup");

    const formEls = {
      username: screen.getByPlaceholderText(/my_username/g) as HTMLInputElement,
      email: screen.getByPlaceholderText(/example@email.com/g) as HTMLInputElement,
      password: screen.getByPlaceholderText(/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/g) as HTMLInputElement,
      btn: screen.getAllByRole("button", { name: "Sign Up" }).find((btn) => {
        return btn.classList.contains("form-btn");
      }) as HTMLElement
    };

    //check the input elements are in the document
    expect(formEls.username).toBeInTheDocument();
    expect(formEls.email).toBeInTheDocument();
    expect(formEls.password).toBeInTheDocument();
    expect(formEls.btn).toBeInTheDocument();

    // type inputs to form fields and submit

    user.type(formEls.username, SIGNUP_MOCK_PAYLOAD.username);
    user.type(formEls.email, SIGNUP_MOCK_PAYLOAD.email);
    user.type(formEls.password, SIGNUP_MOCK_PAYLOAD.password);
    
    user.clear(formEls.username);
    user.clear(formEls.email);
    user.clear(formEls.password);
    expect(formEls.username.value).toBe("");
    expect(formEls.email.value).toBe("");
    expect(formEls.password.value).toBe("");
    
    user.type(formEls.username, SIGNUP_MOCK_PAYLOAD.username);
    user.type(formEls.email, SIGNUP_MOCK_PAYLOAD.email);
    user.type(formEls.password, SIGNUP_MOCK_PAYLOAD.password);
    expect(formEls.username.value).toBe(SIGNUP_MOCK_PAYLOAD.username);
    expect(formEls.email.value).toBe(SIGNUP_MOCK_PAYLOAD.email);
    expect(formEls.password.value).toBe(SIGNUP_MOCK_PAYLOAD.password);

    //click signup to simulate api mock
    
    await act(async () => {
      formEls.btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(fetch).toHaveBeenCalledTimes(1);

    expect(screen.getByTestId("location-display")).toHaveTextContent("/signup");
    
  });
});