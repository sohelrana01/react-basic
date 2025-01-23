import { useId } from "react"

export default function SelectForm() {
    const vegetableSelectId = useId;
    return (
        <>
            <label>
                Pick a fruit:
                <select name="selectedFruit">
                    <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                    <option value="orange">Orange</option>
                </select>
            </label>

            <hr />
            <label htmlFor={vegetableSelectId}>
                pick a vegetable: 
            </label>
            <select name="selectedVegetable" id="vegetableSelectId">
                <option value="cucumber">Cucumber</option>
                <option value="corn">Corn</option>
                <option value="tomato">Tomato</option>
            </select>
        </>
    )
}