import { useEffect, useState } from "react";
import TextInputform from "./TextInputForm";
import { useNavigate } from "react-router-dom";


function TextInputFormContainer(){
    const [inputtype , setInputType]=useState('password');
    const [value,setvalue]=useState("");
    let navigate=useNavigate();
    
    function handleformsubmit(event){
        event.preventDefault();
        console.log("form submitted",value);
        if(value){
            navigate(`/play`, { state : { WordSelected:value } });
        }
        
    }
    
    function handleTextInputForm(event){
        console.log("Text Input Change");
        console.log(event.target.value);
        setvalue(event.target.value);
    }

    

    function handleshowhideclick(){

        console.log("Show/hide click button clicked")
        if(inputtype==='text'){
            
            setInputType('password');
        }
        else{
            
            setInputType('text');
        }

        console.log(inputtype);

    }

    useEffect(()=>{
        console.log("component first load"); // on first load of components ie textinputformcontainer
    },[]);

    useEffect(()=>{
        console.log("component value updated"); // on first load and update of component value 
    },[value]);

    useEffect(()=>{
        console.log("component inputtype updated"); // on first load and update of component inputtype 
    },[inputtype]);

    return (
        <TextInputform
            type={inputtype}
            handleformsubmit={handleformsubmit}
            handleTextInputForm={handleTextInputForm}
            handleshowhideclick={handleshowhideclick}
        />
    );
}

export default TextInputFormContainer;