const person = {
    name: 'Sohel rana',
    theme: {
        backgroundColor: 'black',
        color: 'green',
        padding: '50px'
    }
}

function TodoList2(){
    return(
        <div 
            style={person.theme}
            className="container"
        >
            <h1>{person.name} Todos</h1>
            <img 
                src="https://static.vecteezy.com/system/resources/previews/021/829/466/non_2x/beautiful-morning-view-indonesia-panorama-landscape-paddy-fields-with-beauty-color-and-sky-natural-light-photo.jpg" 
                alt="Image"
                className="avatar"
            />
            <ul>
                <li>Improve the video Phone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    )
}

export default TodoList2;

