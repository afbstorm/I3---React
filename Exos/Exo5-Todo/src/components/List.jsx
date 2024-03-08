import PropTypes from 'prop-types';

const List = (props) => {

    const { taskList, addTask } = props;

    const handleDelete = (event, id) => {
        event.preventDefault();

        const updatedTaskList = taskList.filter(task => {
            return task.id !== id
        });
        addTask(updatedTaskList);
    };

    const handleCompelete = (event, id) => {
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
                    <button onClick={(e) => handleCompelete(e, task.id)}>Complete</button>
                    <button onClick={(e) => handleDelete(e, task.id)}>Delete</button>
                </div>
            ))}
        </section>
    )
}

export default List;