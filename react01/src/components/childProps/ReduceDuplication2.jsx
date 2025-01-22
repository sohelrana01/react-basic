import {getImageUrl} from './utils2.js'

function Profile({
    imageId,
    name,
    profession,
    awards,
    discovery,
    imageSize = 70
}){
    return(
        <section className="profile">
            <h2>{name}</h2>
            <img 
                className="avatar"
                src={getImageUrl(imageId)}
                alt={name}
                width={imageSize}
                height={imageSize}
            />
            <ul>
                <li><b>Profession:</b> {profession}</li>
                <li>
                <b>Awards: {awards.length} </b>
                ({awards.join(', ')})
                </li>
                <li>
                <b>Discovered: </b>
                {discovery}
                </li>
            </ul>
        </section>
    )
}

export default function ReduceDuplication2(){
    return(
        <div>
            <h1>Notable Scientists</h1>
            < Profile  
                imageId="szV5sdG"
                name="Maria Skłodowska-Curie"
                profession="physicist and chemist"
                discovery="polonium (chemical element)"

                awards={[
                    'Nobel Prize in Physics',
                    'Nobel Prize in Chemistry',
                    'Davy Medal',
                    'Matteucci Medal'
                ]}
            />
            < Profile  
                imageId="YfeOqp2"
                name="Smith De John Doe"
                profession="physicist and chemist"
                discovery="polonium (chemical element)"

                awards={[
                    'Nobel Prize in Physics',
                    'Nobel Prize in Chemistry',
                    'Davy Medal',
                    'Matteucci Medal xxx'
                ]}
            />
            
        </div>
    )
}
