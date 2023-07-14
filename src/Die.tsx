import "./Die.css"

interface Dice{
    value:number;
    isHeld:boolean;
    toggleHeld: () => void
        
    }

function Die(props:Dice) {

    return (
        <div className={props.isHeld ? "die active" : "die inactive"} onClick={() => props.toggleHeld()}>
            {props.value}
        </div>
    )
}

export default Die