import { useState } from "react";

const DemoState = () => {
    // Déclaration d'un useState (hook d'état local), il va permettre de stocker un état local et 
    // l'utiliser partout dans le composant ainsi que le rendre "immuable" 
    const [ value, setValue ] = useState(0);

    // Création d'une fonction qui va gérer l'incrémentation du state value
    const handleIncrementation = () => {
        setValue((prevValue) => prevValue + 1)
    }

    const handleReset = () => {
        setValue(0);
    }

    return (
        
        <>
            <h2>Exemple d'utilisation de state</h2>
            <p>{value}</p>
            {/* Appel de la fonction handleIncrement au clic du bouton */}
            <button onClick={handleIncrementation}>+1</button>
            <button onClick={handleReset}>Reset</button>
        </>

    )
}

export default DemoState;