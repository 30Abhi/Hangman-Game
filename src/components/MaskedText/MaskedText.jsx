import { getAllCharacters } from "./MaskUtility";


function MaskedText({ OriginalWord, GuessedByUser }) {
    const MaskedWord = getAllCharacters(OriginalWord, GuessedByUser);

    return (
        <>
            {MaskedWord.map((letter, index) => {
                return (
                    <span key={index} className="mx-1">
                        {letter}
                    </span>
                   
                )
            }

            )}
        </>
    )

}
export default MaskedText;