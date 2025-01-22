
// let guest = 0;

// function Cup(){
//     guest = guest + 1;
    
//     console.log(guest);
//     return <h2>Tea cup for guest #{guest}</h2>
// }


import PropTypes from 'prop-types';

function Cup({guest}){
    return <h2>Tea cup for guest #{guest}</h2>
}


export default function SideEffects(){
    let cups = [];
    for(let i = 1; i<=12; i++){
        cups.push(<Cup key={i} guest={i} />)
    }
    return(
        cups
        // <>
        //     <Cup guest={2}/>
        //     <Cup guest={3}/>
        //     <Cup guest={4}/>
        // </>
    )
}

Cup.propTypes = {
    guest: PropTypes.number.isRequired,
}