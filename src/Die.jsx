import React from "react";
import "./Die.css"

function Die(props) {

    return (
        <div className={props.isHeld ? "die active" : "die inactive"} onClick={() => props.toggleHeld()}>
            {props.value}
        </div>
    )
}

export default Die