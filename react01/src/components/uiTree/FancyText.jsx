import PropTypes from 'prop-types';

export default function Fancytext({title, text}){
    return title ? <h1>{text}</h1> : <h3>{text}</h3>
}

Fancytext.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string.isRequired
};
