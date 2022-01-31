import React, { useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./aux-styles/ledLayoutStyle.css";
import { ledRowStyle } from "./ledStyles";
import ArtScroller from "./ArtScroller";
import { AuthService as Auth } from "../utils/AuthService";
import API from "../utils/ApiService";
import { LedStyleEngine } from "../utils/LedStyleEngineClass";
import LedStyleTag from "./LedStyleTag";
import { animVarCoeffChange, presetSwitch } from "../actions/led-actions";
import { MyRootState } from "../types";
import PresetButtons from "./PresetButtons";
import { setLedStyle } from "../actions/style-actions";
import { Slider } from "./Slider";

const BigLedBox: React.FC = (): JSX.Element => {
  const { presetName, animVarCoeff } = useSelector((state: MyRootState) => state.ledState);
  const dispatch = useDispatch();
  const LedEngineRef = useRef<LedStyleEngine>(new LedStyleEngine("rainbowTestAllAnim"));
  const styleHTMLRef = useRef<string>("");

  const getDefaultPreset = useCallback(async () => {
    try {
      const preset = await API.getDefaultPreset(Auth.getToken() as string);
      if (typeof preset === "string") {
        return preset;
      }
      throw new TypeError(`preset returned was not a string! it's value was ${preset}`);
    } catch (error) {
      return void 0;
    }
  }, []);

  // function that sets the starting preset name of the user logging on
  // conditionally render whether they are logged on => load with that default preset
  // : else load the blank preset name
  useEffect(() => {
    (async (): Promise<void> => {
      if (Auth.loggedIn()) {
        const preset = await getDefaultPreset();
        if (typeof preset === "string") {
          // TODO: load preset with saved coefficient parameters
          dispatch(presetSwitch(preset));
          LedEngineRef.current = new LedStyleEngine(preset);
          styleHTMLRef.current = LedEngineRef.current.createStyleSheet();
          dispatch(setLedStyle(styleHTMLRef.current));
        }
      }
    })();
    return void 0;
  }, [getDefaultPreset, dispatch]);
  
  //second use effect to re-render when the preset parameters change and also when the preset switch happens.
  useEffect(() => {
    styleHTMLRef.current = new LedStyleEngine(presetName).createStyleSheet(animVarCoeff);
    dispatch(setLedStyle(styleHTMLRef.current));
  }, [animVarCoeff, presetName, dispatch]);

  const leds: Array<{ ledNumber: number }> = [];
  function createLedObjectsArray(num: number): void {
    for (let i = 1; i < num; i++) { leds.push({ ledNumber: i, }); }
  }

  const rows: Array<{ rowNumber: number; }> = [];
  function createLedRowsArray(num: number): void {
    for (let i = 1; i < num; i++) { rows.push({ rowNumber: i }); }
  }

  createLedObjectsArray(33);
  createLedRowsArray(33);
  
  return (
    <>
      <main className="box-style">
        <LedStyleTag />
        <section 
          style={{
            position: "relative",
            display: "flex",
            textAlign: "center",
            flexDirection: "column"
          }}
        >
          <ArtScroller />
          <div className="border-top-led" />
          <PresetButtons />
        </section>
        {
          (
            ["dm5", "waves", "V2", "rainbowTestAllAnim"].includes(presetName)
          ) && (
            <>
              <Slider
                name="led-anim-var"
                testid="led-anim-variation"
                label="LED Animation Variation: " 
                inputValueState={animVarCoeff} 
                handleChange={(event) => {
                  event.preventDefault();
                  dispatch(animVarCoeffChange(event.target.value));
                }}
              />
            </>
          )
        }
        <section
          id="led-box"
          className="led-matrix-container"
        >
          {
            rows.map((row, index) => (
              <div 
                key={`row${index + 1}`}
                // eslint-disable-next-line
                // @ts-ignore
                style={ledRowStyle()}
              >
                {
                  leds.map((led) => (
                    <div
                      data-testid={`led${led.ledNumber}-${row.rowNumber}`}
                      id={`led${led.ledNumber}-${row.rowNumber}`}
                      key={`led${led.ledNumber}-${Math.random() * 1000}`} 
                      className={`led${led.ledNumber}-${row.rowNumber}${presetName}`}
                    />
                  ))
                }
              </div>
            ))
          }
        </section>
      </main>
    </>
  );
};

export default BigLedBox;
