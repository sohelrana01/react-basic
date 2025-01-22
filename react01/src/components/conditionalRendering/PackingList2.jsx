
function Item({name, importance}){

    return (
        <li className="item">
            {name}
            {importance > 0 && " "}
            {importance > 0 && <i>(Importance : {importance})</i>}
        </li>
    )
}

export default function PackingList2(){
    return(
        <section>
            <h1>Team Members of Office</h1>

            <ul>
                <Item 
                    importance={0}
                    name= "Sohel Rana"
                />
                <Item 
                    importance={7}
                    name= "Milon Vai"
                />
                <Item 
                    importance={0}
                    name= "Hasan Vai"
                />
            </ul>
        </section>
    )
}
