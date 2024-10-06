import Button from "../button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputform({ type, handleformsubmit, handleTextInputForm, handleshowhideclick }) {
    return (
        <form onSubmit={handleformsubmit}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
               
                flexDirection: "column",
                backgroundColor: "#B0E0E6",
                gap:'10px'
            }}>
                <TextInput
                    type={type}
                    label="Enter the text"
                    onChangeHandler={handleTextInputForm}
                />
                <div>
                    <Button
                        styleType="warning"
                        text={type === "password" ? "SHOW" : "HIDE"}
                        onClickHandler={handleshowhideclick}
                    />
                </div>

                <div>
                    <Button
                        type="submit"
                        text="SUBMIT"
                        styleType="Primary"
                    />
                </div>
            </div>

        </form>
    )
}

export default TextInputform;