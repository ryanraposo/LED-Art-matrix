/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { keyGen } from "../utils/keyGen";
import { MIDIConnectionEvent, MIDIController } from "../utils/MIDIControlClass";
import { useDispatch, useSelector } from "react-redux";
import { setAccess } from "../actions/midi-access-actions";
import { MyRootState } from "../types";

interface MIDIListenerWrapperProps {
    children?: ReactNode | ReactNode[]
}

const MIDIListenerWrapper: React.FC<MIDIListenerWrapperProps> = (): JSX.Element => {
    const dispatch = useDispatch();
    const [size, setSize] = useState(0);
    const accessState = useSelector((state: MyRootState) => state.accessRecordState);
    const MyMIDIController = useRef<MIDIController>();
    // TODO: extract access state object to redux

    // function checkDepDiff (newDep: any, oldDep: any): boolean {
    //   return JSON.stringify(newDep) !== JSON.stringify(oldDep);
    // }

    useEffect(() => {
        (async (): Promise<void> => {
            if ("navigator" in window) {
                // console.log("navigator in window");
                // define onstatechange callback to not be null
                const access = await MIDIController.requestMIDIAccess();
                // console.log("before dispatch");
                dispatch(setAccess(access));
                // console.log("after dispatch");
                setSize(access.inputs.size);
                if (size > 0) {
                    setSize(access.inputs.size);
                    dispatch(setAccess(new MIDIController(access).getAccess()));
                    access.onstatechange = function (_event: MIDIConnectionEvent): void {
                        console.log(Date.now(), "event midi access onstatechange", _event);
                        //set up the onstatechange for the inputs of the access object whose onstatechange function event listener was ran
                        for (let i = 0; i < access.inputs.size; i++) {
                            // console.log("iterating through the inputs to set their onstatechange functions", access.inputs.values().next().value);

                            // iterate through the input map's device list by the value iterator returned from new Map().values()
                            // and define each input's on message functions
                            access.inputs.values().next().value.onstatechange = function (event: any) {
                                console.log(Date.now(), "onstatechange event fired on MIDIInput", event);
                                
                                dispatch(setAccess(new MIDIController(access).getAccess()));
                                
                                // console.log("my midi controller access state", accessState);
                            };
                            
                            // iterate through the input map's device list by the value iterator returned from new Map().values()
                            access.inputs.values().next().value.onmidimessage = function (_event: any) {
                                // console.log("on midi message!!", event);
                                dispatch(setAccess(new MIDIController(access).getAccess()));
                            };

                        }
                        dispatch(setAccess(new MIDIController(access).getAccess()));
                        MyMIDIController.current = new MIDIController(access).getInstance();
                        console.log("get instance ref", MyMIDIController.current.getInstance());
                        console.log("my midi controller in for loop", MyMIDIController, "access state", accessState);
                        console.log("my midi controller inputs forlooop after access onstatechange", MyMIDIController.current.inputs);
                        dispatch(setAccess(MyMIDIController.current.getAccess()));
                    };
                    MyMIDIController.current = new MIDIController(access).getInstance();
                    dispatch(setAccess(MyMIDIController.current.getAccess()));

                    // if state change event happened update the MIDI controller state
                    // if () {

                    // }
                } // endif size > 0

            }
        })();
    }, [dispatch, accessState.inputs.length, size]);

    return (
        <>
            {
                accessState.online ? accessState.inputs!.map((input, i) => {
                    return (
                        <div key={keyGen()} style={{ display: "flex", flexDirection: "column" }}>
                            <h2 key={keyGen()}>MIDI Device {i + 1}</h2>
                            <div key={keyGen()} style={{ border: input.state === "connected" ? "solid 1px green" : " solid 1px red" }}>
                                <p key={keyGen()}>{input.name}</p>
                            </div>
                        </div>
                    );
                }) : "MIDI OFFLINE"
            }
        </>
    );
};

export default MIDIListenerWrapper;