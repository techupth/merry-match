import React from "react";
import { useState, useRef } from "react";
import UserPopup from "./userPopup";
import useClickOutside from '../ulils/useClickOutside'

const Navbarauthen = () => {
    const [callPop, setCallPop] = useState(false);

    const ref = useRef(null);

    useClickOutside(ref, () => setCallPop(false));

    return (
        <div ref={ref} className="bg-white absolute flex flex-row items-center justify-between w-full h-[115px] text-[16px] font-bold z-40">
            <img
                src="/asset/header/header-merrymatch-logo.svg"
                alt="merry match logo"
                className="ml-[10%]"
            />

            <div className=" flex flex-row  items-center justify-between p-0 gap-8 z-40 mr-[10%]">
                <h2>Why Merry Match?</h2>
                <h2>How to Merry</h2>

                <button type="button" className="text-[40px] mr-[]" onClick={() => setCallPop(!callPop)}>
                🧕🏻
                </button>
                {callPop && <UserPopup close={setCallPop} />}
            </div>
        </div>
    );
};

export default Navbarauthen;