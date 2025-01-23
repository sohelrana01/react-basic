import PropTypes from 'prop-types';

export default function Copyright({year}){
    return <p className="small">©️ {year}</p>
}

Copyright.propTypes = {
    year: PropTypes.number.isRequired
};
