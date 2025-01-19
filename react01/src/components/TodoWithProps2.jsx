import { getImageUrl } from "./utils"

function Avatar({person, size}){
    return(
        <img 
            className="avatar"
            src={getImageUrl(person)} 
            alt="Image"
            width={size}
            height={size}
        />
    )
}

function TodoWithProps2(){
    return(
        <div>
            < Avatar 
                size={200}
                person={{
                    name: "Sohel Rana",
                    imageId: "YfeOqp2"
                }}
            />
            < Avatar 
                size={150}
                person={{
                    name: "Sohel Rana",
                    imageId: "OKS67lh"
                }}
            />
            < Avatar 
                size={100}
                person={{
                    name: "Sohel Rana",
                    imageId: "1bX5QH6"
                }}
            />
        </div>
    )
}

export default TodoWithProps2;


// Forwarding Props with the JSX spread syntax

// function profile({person, size, isSepia, thickBorder}){
//     return(
//         <div className="card">
//             < Avatar 
//                 person={person}
//                 size={size}
//                 isSepia={isSepia}
//                 thickBorder={thickBorder}
//             />
//         </div>
//     )
// }


// function profile(props){
//     return(
//         <div className="card">
//             < Avatar {...props}/>
//         </div>
//     )
// }