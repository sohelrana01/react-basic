const baseUrl = "https://static.vecteezy.com/";
const person = {
    name: 'Sohel Rana',
    imageId: 'system/resources/previews/021/829/466/non_2x/beautiful-morning-view-indonesia-panorama-landscape-paddy-fields-with-beauty-color-and-sky-natural-light-photo',
    theme: {
        backgroundColor: 'black',
        color: 'tomato'
    }
}

function TodoListUrl(){
    return(
        <div 
            className="container"
            style={person.theme}
        >
            <h2>Hello React </h2>
            <img 
                className="avatar"
                src={baseUrl + person.imageId + '.jpg'}
                alt={person.name} 
            />

            <ul>
                <li>Improve the video Phone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    )
}

export default TodoListUrl;
