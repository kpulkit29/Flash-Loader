import React from "react";
import "./loader.css"


function getFlashMode(mode,open) {
    if(open === false || typeof(open) != "boolean") {
        return "";
    }

    switch(mode) {
        case "runbarry":
            return <div className="flash"></div>
        case "rotate":
            return <div className="rotate"></div>
        case "jump":
            return <div className="jump"></div>
        default:
            return <div className="flash"></div>
    }
}

const FlashLoader = ({open=false,type="flash"}) => (
    getFlashMode(type,open)
);

export default FlashLoader;