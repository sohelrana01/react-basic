import {getImageUrl} from './utils.js';

const ratio = window.devicePixelRatio;

function Avarat({person, size}){

    let thumbnailSize = "s";
    if(size * ratio > 90){
        thumbnailSize = 'b';
    }

    return(
        <img 
            className="avatar"
            src={getImageUrl(person, thumbnailSize)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function AdjustImages(){
    return(
        <>
            <Avarat 
                size={40}
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP'
                }}
            />
            <Avarat 
                size={120}
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP'
                }}
            />
            <Avarat 
                size={240}
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP'
                }}
            />
        </>
    )
}