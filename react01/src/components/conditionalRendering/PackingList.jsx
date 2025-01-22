
function Item({name, isPacked}){
    // if(isPacked){
    //     // return <li className="item">{name} ✅</li>;
    //     return null;
    // }
    // return <li className="item">{name}</li>;

    // return (
    //     <li className="item">
    //         {isPacked ? name + '✅' : name}
    //     </li>
    // )

    // return(
    //     <li>
    //         {isPacked ? (<del>{name + ' ✅'}</del>): (name)}
    //     </li>
    // )

    let itemContent = name;
    if(isPacked){
        itemContent = name + " ✅";
    }

    return (
        <li className="item">
            {itemContent}
        </li>
    )
}

export default function PackingList(){
    return(
        <section>
            <h1>Team Members of Office</h1>

            <ul>
                <Item 
                    isPacked={false}
                    name= "Sohel Rana"
                />
                <Item 
                    isPacked={true}
                    name= "Milon Vai"
                />
                <Item 
                    isPacked={true}
                    name= "Hasan Vai"
                />
            </ul>
        </section>
    )
}
