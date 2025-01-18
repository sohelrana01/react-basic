import { useState } from "react";

function StateWithObjectForm(){
    const [person, setPerson] = useState({
        firstName: "Sohel",
        lastName: "Rana",
        email: "sohelrana@gmail.com"
    });

    // function handleFirstNameChange(e){
    //     setPerson({
    //         ...person,
    //         firstName: e.target.value
    //     });
    // }

    // function handleLastNameChange(e){
    //     setPerson({
    //         ...person,
    //         lastName: e.target.value
    //     });
    // }

    // function handleEmailChange(e){
    //     setPerson({
    //         ...person,
    //         email: e.target.value
    //     });
    // }

    function handleChange(e){
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        });
    }

    return(
        <>
            <label>
                First Name: <br />
                <input 
                name="firstName"
                value={person.firstName}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Last Name: <br />
                <input 
                name="lastName"
                value={person.lastName}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email: <br />
                <input 
                name="email"
                value={person.email}
                onChange={handleChange}
                />
            </label>

            <p>Hello {person.firstName} {person.lastName} {person.email}</p>
        </>
    )
}

export default StateWithObjectForm;