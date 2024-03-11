const List = (props) => {
    // La déstructuration est utilisée ici pour extraire taskList et addTask des props
    const { taskList, addTask } = props;

    // Cette fonction est chargée de la suppression d'une tâche.
    // Elle filtre la liste de tâches basée sur l'identifiant de la tâche et met à jour la liste grâce à la fonction addTask
    const handleDelete = (event, id) => {
        event.preventDefault();
        // On filtre toutes les tâches dont l'ID est différent de l'ID donné. Cela élimine essentiellement la
        // tâche avec l'ID correspondant du tableau taskList, car elle ne passera pas le critère de filtre (task.id !== id)
        const updatedTaskList = taskList.filter(task => {
            return task.id !== id
        });
        addTask(updatedTaskList);
    };

    // Cette fonction est responsable de la mise à jour de l'état d'une tâche à 'Completed'
    // Elle parcourt la liste des tâches et lorsqu'elle trouve une tâche qui a le même 'id' que celui fourni,
    // elle met à jour le champ 'isCompleted' de la tâche à 'true'
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

    // Ici, nous retournons le composant JSX qui représente visuellement la liste des tâches
    // Pour chaque tâche, nous créons une entrée de liste avec certaines conditions de style appliquées et attachons les gestionnaires d'événements appropriés
    return (
        <section>
            {taskList.map((task, index) => (
                <div key={index} style={task.isCompleted ? {backgroundColor: 'green'} : null}>
                    <h3>{task.name}</h3>
                    <p>{task.description}</p>
                    {task.priority === 'High' ?
                        // Si la priorité de la tâche est 'High', elle sera affichée en rouge
                        (<h5 style={{color: 'red'}}>{task.priority}</h5>) :
                        null}
                    <FormButton Bname={'Complete'} taskId={task.id} handleButton={handleComplete} />
                    <FormButton Bname={'Delete'} taskId={task.id} handleButton={handleDelete} />
                </div>
            ))}
        </section>
    )
}