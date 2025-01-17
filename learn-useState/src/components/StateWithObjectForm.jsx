import { useState } from "react";

function StateWithObjectForm(){
    const [person, setPerson] = useState({
        firstName: "Sohel",
        lastName: "Rana",
        email: "sohelrana@gmail.com"
    });

    function handleFirstNameChange(e){
        setPerson({
            ...person,
            firstName: e.target.value
        });
    }

    function handleLastNameChange(e){
        setPerson({
            ...person,
            lastName: e.target.value
        });
    }

    function handleEmailChange(e){
        setPerson({
            ...person,
            email: e.target.value
        });
    }

    return(
        <>
            <label>
                First Name: <br />
                <input value={person.firstName}
                onChange={handleFirstNameChange}
                />
            </label>
            <br />
            <label>
                Last Name: <br />
                <input value={person.lastName}
                onChange={handleLastNameChange}
                />
            </label>
            <br />
            <label>
                Email: <br />
                <input value={person.email}
                onChange={handleEmailChange}
                />
            </label>

            <p>`Hello {person.firstName} {person.lastName} {person.email}`</p>
        </>
    )
}

export default StateWithObjectForm;