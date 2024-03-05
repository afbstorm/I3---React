import PropTypes from 'prop-types';
import './Bienvenue.css';

const Bienvenue = (props) => {

    const { name, age } = props;

    if (name) {
        return (
            <h2>Bienvenue {name}, tu as {age} ans.</h2>
        )
    }
    
        return (
            <h2>Bienvenue inconnu, tu as {age} ans.</h2>
        )
    
};

// Bienvenue.defaultProps = {
//     age: 21
// };

Bienvenue.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};

export default Bienvenue;