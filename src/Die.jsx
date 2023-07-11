import React from "react";


function Die(props) {

    return (
        <div className="die" id={props.isHeld ? "held" : ""} onClick={() => props.toggleHeld()}>
            {props.value}
        </div>
    )
}

export default Die