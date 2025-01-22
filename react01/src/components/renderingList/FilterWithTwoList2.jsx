import { people } from "./data";
import { getImageUrl } from "./utils";

let chemists = [];
let everyoneElse = [];
people.forEach(person => {
    if(person.profession === 'chemist'){
        chemists.push(person);
    }else{
        everyoneElse.push(person);
    }
});

function ListSection({title, people}){
    return (
        <>
            <h2>{title}</h2>
            <ul>
                {people.map(person => 
                    <li key={person.id}>
                        <img src={getImageUrl(person)} alt={person.name} />
                        <p><b>{person.name}:</b>{' ' + person.profession + ' '} known for {person.accomplishment}</p>
                    </li>
                )}
            </ul>
        </>
    )
}

export default function FilterWithTwoList2(){
    // const chemists = people.filter(person => person.profession === 'chemist');
    // const everyoneElse = people.filter(person => person.profession !== 'chemist');
 
    return(
        <article>
        <h1>Scientists</h1>
        < ListSection 
            title="Chemists"
            people={chemists}
        />
        < ListSection 
            title="Everyone Else"
            people={everyoneElse}
        />
        </article>
    )
}
