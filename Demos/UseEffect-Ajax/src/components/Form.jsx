import { useState } from "react";

const Form = (props) => {

    const { setName } = props;
    
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(inputValue)
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} placeholder='Enter a name...' onChange={handleChange}/>
            <button type="submit">Rechercher</button>
        </form>
    )
}

export default Form;