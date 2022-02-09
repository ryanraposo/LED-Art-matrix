/* eslint-disable no-empty */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSpring, animated } from "react-spring";
import PresetButton from "./PresetButton";
import { 
  _deletePresetButtonSpring,
  _saveButtonSpring,
  _clear,
  _saveNewPresetButtonSpring
} from "./SpringButtons";
import { AuthService as Auth } from "../utils/AuthService";
import API from "../utils/ApiService";
import { animVarCoeffChange, presetSwitch } from "../actions/led-actions";
import { clearStyle } from "../actions/style-actions";
import { IPresetButton, MyRootState } from "../types";
import Modal from "./Modal/ModalBase";
import SavePresetModalContent from "./Modal/SavePresetModal";
import { setAllInactive, setPresetButtonsList, toggleDeleteMode } from "../actions/preset-button-actions";
import { IDBPreset, PresetButtonsList } from "../utils/PresetButtonsListClass";
import PresetButtonStyles from "./StyleTags/PresetButtonStyles";
import { Slider } from "./Slider";
import DeletePresetConfirmModal from "./Modal/DeletePresetConfirmModal";
import { setDeleteModalOpen } from "../actions/modal-actions";
const PresetButtons: React.FC<any> = (): JSX.Element => {
  
  const saveButtonSpring = useSpring(_saveButtonSpring);
  const saveNewPresetButtonSpring = useSpring(_saveNewPresetButtonSpring);
  const deletePresetButtonSpring = useSpring(_deletePresetButtonSpring);
  const clear = useSpring(_clear);
  
  const dispatch = useDispatch();
  const { presetName, animVarCoeff } = useSelector((state: MyRootState) => state.ledState);
  const { presetButtons } = useSelector((state: MyRootState) => state.presetButtonsListState);
  const { deleteModalIsOpen, deleteModalContext } = useSelector((state: MyRootState) => state.deleteModalState);

  async function handleSaveDefault(event: any): Promise<void> {
    event.preventDefault();
    try {
      await API.updateDefaultPreset({ name: presetName, animVarCoeff, token: Auth.getToken() as string });
      
    } catch (error) {
      console.error(error);
    }
  }

  const [saveModalOpen, setSaveModalOpen ] = useState<boolean>(false);

  const getPresets = useCallback(async (): Promise<IDBPreset[] | void> => {
    try {
      const presets = await API.getUserPresets(Auth.getToken() as string);
      if (Array.isArray(presets)) return presets;
    } catch (error) {}
  }, []);

  useEffect(() => {
    if (presetButtons.length === 0) {

      if (!Auth.loggedIn()) {
        const presetNames = ["rainbowTest", "v2", "waves", "spiral", "fourSpirals", "dm5"];
    
        const tempPresets = presetNames.map(name => {
          return {
            _id: (Math.random() * 1000).toString() + "kdjfkdjfkjd",
            presetName: name,
          } as IDBPreset;
        });
    
        const tempButtons = new PresetButtonsList(
          (event: any) => {
            event.preventDefault();
          }, tempPresets
        ).getList() as IPresetButton[];
        dispatch(setPresetButtonsList(tempButtons));

      } else {
        (async (): Promise<void> => {
          const presets = await getPresets() as IDBPreset[];
          
          const buttons = new PresetButtonsList(
            (event: any) => {//click handler
              event.preventDefault();
            }, presets
          ).getList() as IPresetButton[];
          dispatch(setPresetButtonsList(buttons));
        })();
      }
    }

    return void 0;

  }, [dispatch, getPresets, presetButtons.length]);

  return (
    <>
      <Modal isOpen={saveModalOpen}>
        <SavePresetModalContent
          context={{
            animVarCoeff
          }} 
          onClose={(event) => {
            event.preventDefault();
            setSaveModalOpen(false);
          }}
        />
      </Modal>

      <Modal isOpen={deleteModalIsOpen}>
        <DeletePresetConfirmModal
          context={deleteModalContext}
          onCancel={(event: any) => {
            event.preventDefault();
            dispatch(setDeleteModalOpen(false));
            dispatch(toggleDeleteMode(presetButtons));
          }}
          onConfirm={(event: any) => {
            event.preventDefault();
            dispatch(setDeleteModalOpen(false));
            dispatch(toggleDeleteMode(presetButtons));
          }}
        />
      </Modal>
      <span 
        style={{
          color: "white",
          textAlign: "center"
        }}
      >
        LED Matrix Presets
      </span>
      {
        !Auth.loggedIn()
        && (
          <>
            <span
              style={{
                color: "white"
              }}
            >
              To see the Disabled Presets, Log in or Sign up to use those and also save your own Default login Preset!
            </span>
          </>
        )
      }
      <div className="preset-button-container">
        <animated.button
          style={clear}
          role="button"
          data-testid="clear"
          className="preset-button"
          onClick={() => {
            dispatch(presetSwitch(""));
            dispatch(clearStyle());
            dispatch(setAllInactive(presetButtons));
          }}
        >
          clear
        </animated.button>

        <div data-testid="buttons-parent" style={{ marginBottom: "2em"}}>
          <PresetButtonStyles />
          {
            Array.isArray(presetButtons) && presetButtons.map(button => {
              return (
                <PresetButton
                  key={button.key} 
                  button={{ ...button }}
                />
              );
            })
          }

          <animated.button
            role="button"
            data-testid="saveDefault"
            style={saveButtonSpring}
            className={Auth.loggedIn() ? "preset-button save-button" : "preset-button-disabled"}
            disabled={!Auth.loggedIn()}// enable if logged in
            onClick={handleSaveDefault}
          >
            Save as Default
          </animated.button>

          <animated.button
            role="button"
            data-testid="savePreset"
            style={saveNewPresetButtonSpring}
            className={Auth.loggedIn() ? "preset-button save-button" : "preset-button-disabled"}
            disabled={!Auth.loggedIn()}// enable if logged in
            onClick={(event: any) => {
              event.preventDefault();
              setSaveModalOpen(true);
            }}
          >
            Save as new Preset
          </animated.button>

          <animated.button
            role="button"
            data-testid="deletePreset"
            style={deletePresetButtonSpring}
            className={Auth.loggedIn() ? "preset-button delete-button" : "preset-button-disabled"}
            disabled={!Auth.loggedIn()}// enable if logged in
            onClick={(event: any) => {
              event.preventDefault();
              dispatch(toggleDeleteMode(presetButtons));
            }}
          >
            { 
              Array.isArray(presetButtons) && presetButtons.length > 0 
              ? 
                presetButtons[0].deleteMode ? "Don't Delete A Preset" : "Delete A Preset"
              : 
                null
            } 
          </animated.button>

          {
            (
              ["dm5", "waves", "v2", "rainbowTest"].includes(presetName)
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
        </div>

      </div>
    </>
  );
};

export default PresetButtons;