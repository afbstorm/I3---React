import PropTypes from 'prop-types';
import FormButton from './FormButton';

const List = (props) => {

    const { taskList, addTask } = props;

    const handleDelete = (event, id) => {
        event.preventDefault();

        const updatedTaskList = taskList.filter(task => {
            return task.id !== id
        });
        addTask(updatedTaskList);
    };

    const handleComplete = (event, id) => {
        event.preventDefault();
        
        const updatedTaskList = taskList.map(task => {
            if (task.id === id) {
                return {
                    ...task, isCompleted: true
                }
            };
            return task;
        });
        addTask(updatedTaskList);
    };

    return (
        <section>
            {taskList.map((task, index) => (
                <div key={index} style={task.isCompleted ? {backgroundColor: 'green'} : null}>
                    <h3>{task.name}</h3>
                    <p>{task.description}</p>
                        {task.priority === 'High' ? 
                        (<h5 style={{color: 'red'}}>{task.priority}</h5>) :
                        null}
                    <FormButton Bname={'Complete'} taskId={task.id} handleButton={handleComplete} />
                    <FormButton Bname={'Delete'} taskId={task.id} handleButton={handleDelete} />
                </div>
            ))}
        </section>
    )
}

export default List;