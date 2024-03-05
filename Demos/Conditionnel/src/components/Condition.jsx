import PropTypes from 'prop-types';

const Condition = (props) => {

    const { happy, movie, musics } = props;


    // Déclaration de conditionnels, si movie est bien présent (à une valeur) et musics n'est pas présent, 
    // on return un JSX qui va effectuer un rendu différent du rendu par défaut
    if (movie && !musics) {
        return (
            <>
                <h3>{movie}</h3>
                <p>Le meilleur film de tous les temps</p>
            </>
        )
    } 

    // Déclaration de conditionnels, si movie et musics sont bien présents (et ont une valeur)
    // on return un JSX qui va effectuer un rendu différent du rendu par défaut
    if (musics && movie) {
        // Map du prop musics et pour chaque élément itéré nous allons afficher un <li> avec les informations de l'élément
        const musicList = musics.map(singer => (
            <li key={singer.id}>{singer.firstname} {singer.lastname} : {singer.musicType}</li>
        ))
        return (
            <>
                <h3>{movie}</h3>
                <p>Le meilleur film de tous les temps</p>
                <h3>mais n'oublions pas</h3>
                <ul>
                    {musicList}
                </ul>
            </>
        )
    }

    return (
        <>
        {/* Si happy return true alors on affiche un h3, si pas on affiche un autre */}
            {happy ? (
                <h3> YAY Je suis happy </h3>
            ) : (
                <h3>J'suis un peu triste la</h3>
            )}
        </>
    )
}

Condition.propTypes = {
    happy: PropTypes.bool,
    movie: PropTypes.string,
    musics: PropTypes.array
}


export default Condition;