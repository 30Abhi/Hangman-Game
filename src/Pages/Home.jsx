import { Link } from "react-router-dom";
import Button from "../components/button/Button";
import { useEffect, useState } from "react";

 function Home(){
    const[word,setWord]=useState('');

    async function fetchWords(){
        const response=await fetch('http://localhost:3000/words');
        const data=await response.json();
        console.log(data);
        
        const randomindex=Math.floor(Math.random() * data.length);
        console.log(data[randomindex]);

        setWord(data[randomindex].wordvalue);

    }
    useEffect(()=>{
        fetchWords();
    },[])
    return(
        <>
            <Link to='/play' state={{WordSelected:word}}>
                <Button text="SINGLE PLAYER GAME" />
            </Link>
            <Link to='/start'>
            <div className="mt-4">
                <Button text="MULTI PLAYER GAME" />
            </div>
            
            </Link>
        </>
    )
}
export default Home;