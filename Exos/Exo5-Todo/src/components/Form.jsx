import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const Form = (props) => {

    // Destructuring des props pour utiliser plus simplement le setState du parent
    const { addTask } = props;

    const [taskValues, setTaskValues] = useState({
        id: nanoid(),
        name: '',
        description: '',
        priority: '',
        isCompleted: false // Information cachée, on ne la modifie que quand on la désigne complète dans la List
    });

    const priorities = ['Low', 'Normal', 'High'];

    const handleChanges = (event) => {
        const { name, value } = event.target;

        setTaskValues((prevValues) => ({...prevValues, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Utilisation du callback pour envoyer les infos
        addTask((prevValues) => ([...prevValues, taskValues]));

        // Reset du formulaire
        setTaskValues({
            id: nanoid(),
            name: '',
            description: '',
            priority: '',
            isCompleted: false
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Task name</label>
            <input type="text" name="name" value={taskValues.name} onChange={handleChanges} required/>

            <label htmlFor="description">Task description</label>
            <textarea name="description" value={taskValues.description} onChange={handleChanges} />

            <label htmlFor="priority">Priority</label>
            <select name='priority' value={taskValues.priority} onChange={handleChanges}>
                {priorities.map((prio, index) => (
                    <option key={index} value={prio}>{prio}</option>
                ))}
            </select>
            <button type='submit'>Add task</button>
        </form>
    )
}

export default Form;