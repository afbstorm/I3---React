import { useState } from "react";
import './Forms.css';

const Forms = ({title}) => {

    const [ formValues, setFormValues ] = useState({
        lastname: '',
        firstname: '',
        email: '',
        message: '',
        accept: false
    })

    const handleChanges = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setFormValues({...formValues, [event.target.name]: value});
    };

    // e === event -> Ce n'est qu'un paramètre
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };

    return (
        <section className="container">
            <h2>{title}</h2>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="form-input">
                    <label htmlFor="firstname">Firstname</label>
                    <input 
                        type="text" 
                        name="firstname" 
                        value={formValues.firstname} 
                        onChange={handleChanges} 
                        placeholder='Enter your firstname...'
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="lastname">Lastname</label>
                    <input 
                        type="text" 
                        name="lastname" 
                        value={formValues.lastname} 
                        onChange={handleChanges} 
                        placeholder='Enter your lastname...'
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formValues.email} 
                        onChange={handleChanges} 
                        placeholder='Enter your email...'
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="message">Message</label>
                    <textarea 
                        name="message"
                        value={formValues.message}
                        onChange={handleChanges}
                        placeholder='Message...' 
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="accept">Do you accept our terms and conditions ?</label>
                    <input 
                        type="checkbox" 
                        name="accept" 
                        checked={formValues.accept} 
                        onChange={handleChanges}
                        className="form-checkbox"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Forms;