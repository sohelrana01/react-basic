import PropTypes from 'prop-types';

function Drink({name}){
    return(
        <section>
            <h1>{name}</h1>
            <dl>
                <dt>Part of plant</dt>
                <dd>{name === 'tea' ? 'leaf' : 'bean'}</dd>
                <dt>Caffeine content</dt>
                <dd>{name === 'tea' ? '15-70 mg/cup' : '80-185 gm/cup'}</dd>
                <dt>Age</dt>
                <dd>{name === 'tea' ? '4,000+ years' : '1,000+ years'}</dd>
            </dl>
        </section>
    )
}

function DrinkList(){
    return (
        <div>
            <Drink name="tea" />
            <Drink name="coffee" />
        </div>
    )
}

Drink.propTypes = {
    name: PropTypes.string.isRequired,
};

export default DrinkList;
