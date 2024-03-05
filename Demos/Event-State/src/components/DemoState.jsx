import { useState } from "react";

const DemoState = () => {
    const [ value, setValue ] = useState(0);

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
            <button onClick={handleIncrementation}>+1</button>
            <button onClick={handleReset}>Reset</button>
        </>

    )
}

export default DemoState;