import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TesxtInputFormContainer";

function StartGame(){
    return(
        <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100vh', 
            flexDirection: "column",
            backgroundColor:"#B0E0E6"
          }}>
        <h1>Start Game</h1>
        <TextInputFormContainer/>
        {/* <Link to='/play' className="text-blue-400">TO PLAY GAME</Link> */}
    </div>
    )
    
}

export default StartGame;