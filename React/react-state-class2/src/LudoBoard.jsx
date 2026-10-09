
import { useState } from "react";

export default function LudoBoard() {

    // useState stores the current moves of all four players.
    // moves = current state
    // setMoves = function used to update the state
    // Initially, every player's move count is 0.
    let [moves, setMoves] = useState({
        blue: 0,
        red: 0,
        yellow: 0,
        green: 0
    });

    // This function runs when the Blue button is clicked.
    let updateBlue = () => {

        // We use a callback because the new state depends
        // on the previous state.
        setMoves((prevMoves) => {

            // The spread operator copies all existing player values.
            // We increase only Blue's move count by 1.
            return { ...prevMoves, blue: prevMoves.blue + 1 };
        });
    };

    // This function runs when the Yellow button is clicked.
    let updateYellow = () => {

        // prevMoves contains the previous state.
        setMoves((prevMoves) => {

            // Keep all other values unchanged and increase Yellow by 1.
            return { ...prevMoves, yellow: prevMoves.yellow + 1 };
        });
    };

    return (
        <div>
            <p>Game Begins</p>

            <div className="board">

                <p>Blue moves = {moves.blue}</p>
                <button
                    style={{ backgroundColor: "blue" }}
                    onClick={updateBlue}
                >
                    +1
                </button>

                <p>Yellow moves = {moves.yellow}</p>
                <button
                    style={{ backgroundColor: "yellow", color: "black" }}
                    onClick={updateYellow}
                >
                    +1
                </button>

                <p>Red moves = {moves.red}</p>
                <button style={{ backgroundColor: "red" }}>
                    +1
                </button>

                <p>Green moves = {moves.green}</p>
                <button style={{ backgroundColor: "green" }}>
                    +1
                </button>

            </div>
        </div>
    );
}

