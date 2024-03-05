import PropTypes from 'prop-types'; // Import des prop-type
// import './Details.css';

const Details = (props) => {

    // Destructuring des props depuis props. Les noms doivent être identiques aux clés retrouvées dans l'objet props
    const { id, title, synopsis, actors } = props;

    // Création d'un object de CSS-in-JS
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

// Définition d'un prop par défaut, cette valeur sera utilisée si le prop n'est pas envoyé
Details.defaultProps = {
    title: 'Taxi Driver'
}

let title = 'Taxi Driver';

// Définition des propTypes. Ils peuvent être de tout type et permette de préparer correctement le composant
Details.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    synopsis: PropTypes.string,
    actors: PropTypes.array,
    // exampleFunction: PropTypes.func
}

export default Details;