const peoples = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function PeopleListItem(){
    const listitems = peoples.map(person => <li>{person}</li>)
    return (
        <ul>{listitems}</ul>
    )
}
