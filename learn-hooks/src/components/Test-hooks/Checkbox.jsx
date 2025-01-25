import { useState } from "react";


export default function Checkbox(){
    const [liked, setLicked] = useState(true);

    function handleChange(e){
        setLicked(e.target.checked)
    }

    return(
        <>
            <label>
                <input 
                    type="checkbox"
                    checked={liked}
                    onChange={handleChange}
                />
                
                I liked this
            </label>

            <p>You {liked ? 'licked': 'Did not like'} this.</p>
        </>
    )
}
