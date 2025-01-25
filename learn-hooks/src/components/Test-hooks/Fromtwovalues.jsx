import { useState } from "react";


export default function Fromtwovalues(){
    const [name, setName] = useState("Sohel");
    const [age, setAge] = useState(50);

    return(
        <>
            <input 
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <br />
            <br />
            <button onClick={()=>{setAge(age + 1)}}>
                Increment age
            </button>

            <p>Hello, {name}. You are {age}.</p>
        </>
    )
}