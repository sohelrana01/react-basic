import { useState } from 'react';

///// UseState initialState

// function MyComponent(){
//     const [age, setAge] = useState(28);
//     const [name, setName] = useState("Sohel");
//     const [todos, setTodos] = useState(() => createTodos());
// }


export default function Counter(){
    const [count, setCount] = useState(0);


    function handleClick(){
        setCount(count + 1);
    }


    return(
        <button onClick={handleClick}>
            You Pressed Me {count} times
        </button>
    )
}


