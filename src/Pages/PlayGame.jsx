import { Link, useLocation, useParams } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButton from "../components/button/LetterButtons/LetterButtons";
import { useContext, useState } from "react";
import HangMan from "../components/HangMan/Hangman";
import { GameEnd } from "../components/GameEnd/GameEnd";
import { WordContext } from "../Context/WordContext";



function PlayGame() {

    const {wordList,word,hint}=useContext(WordContext);
    
    const { state } = useLocation();
    let [GuessedletterArray, setGuessedArray] = useState([]);
    let [level, setlevel] = useState(0);

    function HandleLetterClick(letter) {
        console.log(word);
        if (word.toUpperCase().includes(letter)) {
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
            <h1 style={{fontSize:'70px'}}>SAVE THE MAN</h1>

            {word && (
                <>
                    <div style={{fontSize:'40px'}}>
                        <MaskedText OriginalWord={word} GuessedByUser={GuessedletterArray} />
                    </div>

                    <div>
                        <LetterButton text={word} Guessed={GuessedletterArray} OnLetterClick={HandleLetterClick} />
                    </div>

                    <div style={{margin:'10px',padding:'10px',fontSize:'22px'}}>
                        Hint-{hint}
                    </div>
                    

                    <div>
                        <HangMan level={level} />
                    </div>
                    <div>
                        <GameEnd level={level} OriginalWord={word} GuessedletterArray={GuessedletterArray} />
                    </div>

                    <Link to='/' className="text-blue-400">TO HOME PAGE</Link>
                </>
            )}

        </div>
    )

}

export default PlayGame;