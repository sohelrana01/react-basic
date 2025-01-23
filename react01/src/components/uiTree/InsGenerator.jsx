import { useState } from "react";
import PropTypes from 'prop-types';
import Fancytext from "./FancyText";
import quotes from "./quotes";


export default function InsGenerator({children}){
    const [index, setIndex] = useState(0);
    const quote = quotes[index];
    const next = () => setIndex((index + 1) % quotes.length);
    return (
        <>
            <p>Your Inspirational quote is: </p>
            < Fancytext text={quote} />
            <button onClick={next}>Inspire me again</button>
            {children}
        </>
   );
}

InsGenerator.propTypes = {
    children: PropTypes.node
};