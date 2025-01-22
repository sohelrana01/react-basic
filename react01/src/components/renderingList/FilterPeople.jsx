import {people} from './data.js'
import {getImageUrl} from './utils.js'

export default function FilterPeople(){

    const chemists = people.filter(person => person.profession === 'chemist');

    const ListItems = chemists.map(person => <li 
        key={person.id}
    >
        <img 
            src={getImageUrl(person)}
            alt={person.name}
        />
        <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '} known for {person.accomplishment}
        </p>
    </li>)


    return(
        <div>
            <ul>{ListItems}</ul>
        </div>
    )
}
