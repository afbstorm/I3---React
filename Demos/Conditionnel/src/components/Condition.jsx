import PropTypes from 'prop-types';

const Condition = (props) => {

    const { happy, movie, musics } = props;

    if (movie && !musics) {
        return (
            <>
                <h3>{movie}</h3>
                <p>Le meilleur film de tous les temps</p>
            </>
        )
    } 
    if (musics && movie) {
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