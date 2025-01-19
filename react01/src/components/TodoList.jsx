
function TodoList(){
    const avatar = "https://static.vecteezy.com/system/resources/previews/021/829/466/non_2x/beautiful-morning-view-indonesia-panorama-landscape-paddy-fields-with-beauty-color-and-sky-natural-light-photo.jpg";

    const description = "This is image";
    const name = "Sohel Rana";

    // Useing formatDate()
    const today = new Date();
    function formatDate(date){
        return new Intl.DateTimeFormat(
            'en-US',
            {weekday: 'long'}
        ).format(date);
    }


    return (
        <div className="container">
            <h2>{name} Todos</h2>

            <h2>To Do List for {formatDate(today)} </h2>

            <img 
                src={avatar}
                alt={description}
                className="photo"
            />

            <ul style={{
                backgroundColor: 'black',
                color: 'green',
                padding: '50px'
            }}>
                <li>List item 01</li>
                <li>List item 02</li>
                <li>List item 03</li>
                <li>List item 04</li>
            </ul>
        </div>
    )
}

export default TodoList;
