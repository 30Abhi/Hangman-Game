function getStyleType(styleType){
    if(styleType==='Primary'){
        return 'bg-blue-500';
    }
    else if(styleType==='Secondary'){
        return 'bg-yellow-500';
    }

    else if(styleType==='warning'){
        return 'bg-red-500';
    }

    else{
        return 'bg-grey-500';
    }
}
export default getStyleType;