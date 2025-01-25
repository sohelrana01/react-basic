import { useState } from "react"

export default function TwoStateVariable(){
    const [name, setName] = useState('Sohel');
    const [age, setAge] = useState(45);

    return(
        <>
            <input 
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <br />
            <button onClick={() => setAge(age + 1)}>
                Increment Age
            </button>

            <p>Hello {name}. Your are {age}.</p>
        </>
    )
}