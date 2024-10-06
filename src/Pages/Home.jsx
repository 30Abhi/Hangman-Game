import { Link } from "react-router-dom";
import Button from "../components/button/Button";
import { useEffect, useState } from "react";
import Introimage from "../assets/IntroImage/HangamanIntro.jpg"


 function Home(){
    const[word,setWord]=useState('');
    const[hint,sethint]=useState('');

    async function fetchWords(){
        const response=await fetch('http://localhost:3000/words');
        const data=await response.json();
        console.log(data);
        
        const randomindex=Math.floor(Math.random() * data.length);
        console.log(data[randomindex]);

        setWord(data[randomindex].wordvalue);
        sethint(data[randomindex].wordhint);

    }
    useEffect(()=>{
        fetchWords();
    },[])
    return(
        <>

            <div style={ {display:'flex',justifyContent: 'center',
                            alignItems: 'center', flexDirection:'column', height:'100vh'} }>

                <img src={Introimage} alt="HANGMAN GAME"  style={{margin:'20px',padding:'20px'}}/>               
                <Link to='/play' state={{WordSelected:word , WordHint:hint}}>
                    <Button text="SINGLE PLAYER GAME" />
                </Link>

                <Link to='/start'>
                <div className="mt-4">
                    <Button text="Pass and Play" />
                </div>
                
                </Link>
            </div>
        </>
    )
}
export default Home;