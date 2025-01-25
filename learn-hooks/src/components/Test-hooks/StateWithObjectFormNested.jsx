import { useState } from "react";

function StateWithObjectFormNested(){
    const [person, setPerson] = useState({
        name: 'Sohel Rana',
        artwork: {
            title: 'Next Code',
            city: 'Rajshahi',
            image: 'https://cdn3.vectorstock.com/i/1000x1000/49/57/next-code-logo-vector-32304957.jpg'
        }
    })
    function handleNameChange(e){
        setPerson({
            ...person,
            name: e.target.value
        });
    }

    function handleTitleChange(e){
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value
            }
        });
    }

    function handleCityChange(e){
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value
            }
        });
    }

    function handleImageChange(e){
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value
            }
        })
    }
    return(
        <>
            <label>
                Name: 
                <input 
                    value={person.name}
                    onChange={handleNameChange}                
                />
            </label>
            <br />
            <label>
                Title: 
                <input 
                    value={person.artwork.title}
                    onChange={handleTitleChange}                
                />
            </label>
            <br />
            <label>
                Name: 
                <input 
                    value={person.artwork.city}
                    onChange={handleCityChange}              
                />
            </label>
            <br />
            <label>
                Image: 
                <input 
                    value={person.artwork.image}
                    onChange={handleImageChange}              
                />
            </label>

            <p>{person.artwork.title} by {person.name} <br /> located in {person.artwork.city}</p>

            <img src={person.artwork.image} alt={person.artwork.title} />
        </>
    )
}


export default StateWithObjectFormNested;
