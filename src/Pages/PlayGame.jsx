import { Link, useLocation, useParams } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButton from "../components/button/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../components/HangMan/Hangman";
import { GameEnd } from "../components/GameEnd/GameEnd";



function PlayGame() {
    const { state } = useLocation();
    let [GuessedletterArray, setGuessedArray] = useState([]);
    let [level, setlevel] = useState(0);

    function HandleLetterClick(letter) {
        console.log(state.WordSelected);
        if (state.WordSelected.toUpperCase().includes(letter)) {
            console.log("Correct");
        }
        else {
            console.log('Wrong');
            setlevel(level + 1);
        }
        setGuessedArray([...GuessedletterArray, letter]);
    }
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            flexDirection: "column",
            backgroundColor: "#F0E68C"
        }}>
            <h1>PLAY Game</h1>
            {state?.WordSelected && (
                <>
                    <div>
                        <MaskedText OriginalWord={state.WordSelected} GuessedByUser={GuessedletterArray} />
                    </div>

                    <div>
                        <LetterButton text={state.WordSelected} Guessed={GuessedletterArray} OnLetterClick={HandleLetterClick} />
                    </div>

                    <div>
                        <HangMan level={level} />
                    </div>
                    <div>
                        <GameEnd level={level} OriginalWord={state.WordSelected} GuessedletterArray={GuessedletterArray} />
                    </div>

                    <Link to='/' className="text-blue-400">TO HOME PAGE</Link>
                </>
            )}

        </div>
    )

}

export default PlayGame;