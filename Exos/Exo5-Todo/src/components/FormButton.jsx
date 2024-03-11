const FormButton = (props) => {

    const {Bname, taskId, handleButton } = props;

    return (
        <button onClick={(e) => handleButton(e, taskId)}>{Bname}</button>
    )
}

export default FormButton;