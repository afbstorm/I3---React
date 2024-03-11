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

        // Mettre à jour l'état de taskValues avec les nouvelles valeurs
        // Les valeurs précédentes sont préservées en utilisant l'opérateur de spread
        // (...prevValues), puis la valeur de l'attribut modifié est mise à jour
        setTaskValues((prevValues) => ({...prevValues, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Ajoute la nouvelle tâche à la liste des tâches en utilisant la fonction addTask
        // Les précédentes tâches sont préservées en utilisant l'opérateur spread et ensuite la nouvelle tâche est ajoutée
        // gràce au callback addTask
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