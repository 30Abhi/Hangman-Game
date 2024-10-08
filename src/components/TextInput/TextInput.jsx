function TextInput({type = 'text',label,placeholder='Enter Your Text Here', value,onChangeHandler}) {
    return (
        <label >
            <span className="text-grey-700"> {label} </span>
            <input
                type={type}
                className="px-4 py-2 border border-grey-500 rounded-md w-full"
                placeholder={placeholder}
               
                onChange={onChangeHandler}
            />
        </label>
    );
}

export default TextInput;