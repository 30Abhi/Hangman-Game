import { useNavigate } from "react-router-dom";
import { END } from "./UtilityGameEnd";

export function GameEnd({level,OriginalWord,GuessedletterArray}){
   
    let navigate=useNavigate();

    let text =''
    let check=false

    let c=END(OriginalWord,GuessedletterArray)
    if(c==true){
        text="YOU WON WOHOOO!"
        check=true
    }

    else if(level>=7){
        text="GAME OVER"
        check=true
    }
    else{
        check=false
    }
    
    function HandleOnClick(event){
        navigate('/')
    }

    return(
        <button style={check==false? {display:"none"}: {display:"block", backgroundColor:'red', height:"80px" ,width:"80px" } } onClick={HandleOnClick}>
            {text}
        </button>
    )
}