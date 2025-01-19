import Avatar from "./Avatar";

function Card({children}){
    return(
        <div className="card">
            {children}
        </div>
    )
}



export default function ChildProps(){
    return(
        <Card>
            <Avatar 
                size={200}
                person={{
                    name: "Sohel Rana",
                    imageId: "YfeOqp2"
                }}
            />
        </Card>
    );
}
