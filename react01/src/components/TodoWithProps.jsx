function Avatar(){
    return(
        <img 
            className="avatar"
            src="https://cdn3.vectorstock.com/i/1000x1000/49/57/next-code-logo-vector-32304957.jpg" 
            alt="Cool Image"
            width={300}
            height={300}
        />
    );
}


function TodoWithProps(){
    return(
        <>
            <Avatar />
        </>
    )
}
export default TodoWithProps;
