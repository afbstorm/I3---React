import { useState } from "react";
import Clock from "./Clock";
import DateOfDay from "./DateOfDay";

const Time = () => {

    const [displayClock, setDisplayClock] = useState(false);

    const toggleDisplayClock = () => {
        setDisplayClock(!displayClock);
    }

    return (
        <>
            <button onClick={toggleDisplayClock}>Alterner affichage</button>
            {displayClock ? <Clock /> : <DateOfDay />}
        </>
    )
};

export default Time;