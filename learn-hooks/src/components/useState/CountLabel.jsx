import { useState } from "react";
import PropTypes from 'prop-types';

export default function CountLabel({count}){
    const [prevCount, setPrevCount] = useState(count)
    const [trend, setTrend] = useState(null);

    if(prevCount !== count){
        setPrevCount(count);
        setTrend(count > prevCount ? 'increasing' : 'decreasing');
    }
    return(
        <>
            <h1>{count}</h1>
            {trend && <p>The count is {trend}</p>}
        </>
    )

}

CountLabel.propTypes = {
    count: PropTypes.number.isRequired,
};

