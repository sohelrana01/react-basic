import { useState } from "react";

function Test(){
    const [count, setCount] = useState(10)

    function handleClick(){
        // setCount(count + 1 )
        // setCount(count + 1 )
        // setCount(count + 1 )

        ///// Use updater function

        setCount(count => count + 1)
        setCount(count => count + 1)
        setCount(count => count + 1)
    }

    return(
        <>
            <p>Counter: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </>
    )
}

export default Test
