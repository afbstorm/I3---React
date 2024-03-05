
// Utilisation directe du prop, sans destructuration
const User = (props) => {

    return (
        <h2>Bienvenu dans le cours de {props.cours}</h2>
    )
}

// Déstructuration directement dans les paramètres d'entrées du composant

// const User = ({cours}) => {

//     return (
//         <h2>Bienvenu dans le cours de {cours}</h2>
//     )
// }


// Déstructuration dans le corps de la fonction du composant
// const User = (props) => {

//     const { cours } = props;

//     return (
//         <h2>Bienvenu dans le cours de {cours}</h2>
//     )
// }

export default User;