

export function END(OriginalWord,GuessedletterArray){
    let OriginalWordArray= OriginalWord.toUpperCase().split('').map(char => {
      
        return char;
        
    });
   
    let GSet=new Set(GuessedletterArray);
    let check=true;
    for(let i=0;i<OriginalWordArray.length;i++){
        if(!GSet.has(OriginalWordArray[i])){
            check=false;
        }
    }

    return check
}       