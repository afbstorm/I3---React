import { useState } from "react";
import Form from "./Form";
import List from "./List";

const Todo = () => {

    const [tasks, setTasks] = useState([]);

    return (
        <>
            {/* On envoi le set du state pour permettre à Form d'envoyer les infos du formulaire dans tasks */}
            <Form addTask={setTasks}/>
            <List taskList={tasks} addTask={setTasks}/>
        </>
    )
}

export default Todo;