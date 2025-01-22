import PropTypes from 'prop-types';

const drinks = {
    tea: {
        part: 'leaf',
        caffeine: '15-70 mg/cup',
        age: '4,000+ years'
    },
    coffee: {
        part: 'bean',
        caffeine: '85-185 mg/cup',
        age: '1,000+ years'
    }
}

function Drink({name}){
    const info = drinks[name]

    return(
        <section>
            <h1>{name}</h1>
            <dl>
                <dt>Part of plant</dt>
                <dd>{info.part}</dd>
                <dt>Caffeine content</dt>
                <dd>{info.caffeine}</dd>
                <dt>Age</dt>
                <dd>{info.age}</dd>
            </dl>
        </section>
    )
}

function DrinkListWithObject(){
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

export default DrinkListWithObject;
