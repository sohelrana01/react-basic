import { people } from "./data";
import { getImageUrl } from "./utils";

export default function FilterWithTwoList(){
    const chemists = people.filter(person => person.profession === 'chemist');
    const everyoneElse = people.filter(person => person.profession !== 'chemist');

    const ListItems = chemists.map(person => 
    <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p><b>{person.name}:</b>{' ' + person.profession + ' '} known for {person.accomplishment}</p>
    </li>
    );
    const ListItemsElse = everyoneElse.map(person => 
    <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p><b>{person.name}:</b>{' ' + person.profession + ' '} known for {person.accomplishment}</p>
    </li>
    );

    

    return(
        <article>
        <h1>Scientists</h1>
        <h2>Chemists</h2>
        <ul>{ListItems}</ul>

        <h2>Everyone Else</h2>
        <ul>{ListItemsElse}</ul>
        </article>
    )
}
