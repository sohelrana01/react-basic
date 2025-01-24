export default function SelectFormSubmit() {
    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        fetch('/some-api', {method: form.method, body: formData});

        console.log(new URLSearchParams(formData).toString());

        const formJson = Object.fromEntries(formData.entries());

        console.log(formJson);

        console.log([...formData.entries()]);
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <label>
                Pick your favorite fruit:
                <select name="selectedFruit" defaultValue="orange">
                    <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                    <option value="orange">Orange</option>
                </select>
            </label>
            <br />
            <br />
            <label>
                Pick all your favorite vegetables:
                <select name="selectedVegetables" multiple={true} defaultValue={['corn', 'tomato']}>
                    <option value="cucumber">Cucumber</option>
                    <option value="corn">Corn</option>
                    <option value="tomato">Tomato</option>
                </select>
            </label>
            <hr />

            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
        </form>
    );
}

