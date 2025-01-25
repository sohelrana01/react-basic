import { useState } from "react";

export default function PassingUpdater(){
    const [age, setAge] = useState(45);

    function increment(){
        setAge(a => a + 1);
    }

    return(
        <>
            <h2>Your Age: {age}</h2>
            <button
                onClick={() => {
                    increment();
                    increment();
                    increment();
                }}
            >
                +3
            </button>
            <br />
            <button
                onClick={() => {
                    increment();
                }}
            >
                +1
            </button>
        </>
    )
}