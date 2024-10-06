const Alphabets="qwertyuiopasdfghjklzxcvbnm";

function LetterButton({text,Guessed,OnLetterClick}){
    const OgtextArray=text.toUpperCase().split('');
    const OgtextSet=new Set(OgtextArray);
    
    const GuessedSet=new Set(Guessed);

    const AlphaArray=Alphabets.toUpperCase().split('');
    
    const buttonStyle=function(letter){
        if(GuessedSet.has(letter)){
            return `${OgtextSet.has(letter)? 'bg-green-500':'bg-red-500' }`
        }
        else{
            return 'bg-blue-500';
        }
    }
    function handleletterClick(event){
        const characterOfLetter=event.target.value;
        OnLetterClick?.(characterOfLetter);
    }

    const buttons=AlphaArray.map(letter=>{
        return(
            <button
                key={`button-${letter}`}
                onClick={handleletterClick}
                value={letter}
                disabled={GuessedSet.has(letter)}
                className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)} `}
            >
                {letter}
            </button>
        );
    })

    return(
        <>
            {buttons}
        </>
    )
}
export default LetterButton;