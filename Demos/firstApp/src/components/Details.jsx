import PropTypes from 'prop-types';
// import './Details.css';

const Details = (props) => {

    const { id, title, synopsis, actors } = props;

    const styles = {
        color: 'red',
        fontSize: '5rem'
    }

    return (
        <>
            <h2 style={styles}>{title}</h2>
            <p>{synopsis}</p>
            
            <ul>
                {/* {actors.map(actor => (
                    <li>{actor}</li> // Tous les enfants doivent avoir une clé unique
                ))} */}
                {actors.map((actor, index) => (
                    <li key={index}>{actor}</li> 
                ))}
            </ul>
        </>
    )
};

Details.defaultProps = {
    title: 'Taxi Driver'
}

let title = 'Taxi Driver';

Details.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    synopsis: PropTypes.string,
    actors: PropTypes.array,
    // exampleFunction: PropTypes.func
}

export default Details;