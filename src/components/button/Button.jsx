import getStyleType from "./getbuttonstyle";


function Button({ text, onClickHandler ,styleType='Primary' ,type='button'}) {
    return (
        <button
            onClick={onClickHandler}
            type={type}
            className={`px-4 py-2 ${getStyleType(styleType)} text-white`}
        >
            {text}
        </button>

    );
}



export default Button;