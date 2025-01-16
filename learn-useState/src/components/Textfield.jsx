import { useState } from "react";

export default function Textfield(){
    const [text, setText] = useState("Hello");

    function handleChange(e){
        setText(e.target.value)
    }
    return(
        <>
            <input value={text} onChange={handleChange}/>
            <p>You typed: {text}</p>

            <button onClick={() => setText("Hello")}>
                Reset
            </button>
        </>
    )
}
