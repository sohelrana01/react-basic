// Select 
{/* <select>
    <option value="somevalue">Some Option</option>
    <option value="othervalue">Other Option</option>
</select> */}

export default function SelectCom(){
    return (
        <label>
            Pick a fruits: 
            <select name="selectedFruit" defaultValue="orange">
                <option value="apple">Apple</option>
                <option value="orange">Orange</option>
                <option value="banana">banana</option>
            </select>
        </label>
    )
}
