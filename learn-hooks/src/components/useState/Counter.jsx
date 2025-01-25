import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);


    function handleClick(){
        setCount(count + 1);

    }

    return (
        <>
        <h2>Counter: {count}</h2>
        <button onClick={handleClick}>
            You Pressed Me {count} Times
        </button>
        </>
    )
}