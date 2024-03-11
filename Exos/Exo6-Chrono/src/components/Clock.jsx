import { useEffect } from "react";
import { useState } from "react";

const Clock = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString('fr-BE'));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('fr-BE'))
        }, 1000);

        return () => clearInterval(interval)
    }, []);

    return (
        <>
            <h2>Horloge : </h2>
            <p>{time}</p>
        </>
    )
};

export default Clock;