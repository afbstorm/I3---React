import PropTypes from 'prop-types';

const Counter = (props) => {

    const { increment, incrementByValue } = props;

    return (
        <>
            <h2>Sans envoi de paramètre</h2>
            {/* On peut ne pas déstructurer les props, dans ce cas on utilisera props.[nomDuProp] */}
            <button onClick={props.increment}>Sans destructuring on fait + 1</button> 
            <button onClick={increment}>Avec destructuring on fait + 1</button>

            <h2>Avec envoi de paramètre</h2>
            <button onClick={() => incrementByValue(42)}>On envoi le paramètre au parent + 5</button>

        </>
    )
}

Counter.propTypes = {
    increment: PropTypes.func,
    incrementByValue: PropTypes.func
}

export default Counter;