import { useState } from "react";

function PassingCounter(){
    const [age, setAge] = useState(42);

    function increment(){
        setAge(a => a + 1);
    }

    return(
        <>
            <h1>Your Age: {age}</h1>
            <button onClick={() => {
                increment();
                increment();
                increment();
            }}>
                +3
            </button>
            <br />
            <button onClick={() =>{
                increment();
            }}>
                +1
            </button>
        </>
    )
}

export default PassingCounter;
