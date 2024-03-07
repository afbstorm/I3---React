import { useState } from "react";

const Calculatrice = (props) => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    const [operator, setOperator] = useState('');

    const { title } = props;

    const operators = ['+', '-', '/', '*'];

    const handleChange = (inputName, value) => {
        if (inputName === 'First number') {
            setNum1(value)
        } else if (inputName === 'Second number') {
            setNum2(value)
        } else if (inputName === 'Operator') {
            setOperator(value)
        }
    }

    const handleCalculation = (e) => {
        e.preventDefault();

        let resultCalculation;
        switch (operator) {
            case '+': 
                resultCalculation = parseFloat(num1) + parseFloat(num2)
                break;
            case '-':
                resultCalculation = parseFloat(num1) - parseFloat(num2)
                break;
            case '*':
                resultCalculation = parseFloat(num1) * parseFloat(num2)
                break;
            case '/':
                parseFloat(num2) === 0 ? 
                resultCalculation = 'Impossible de diviser par zéro' :  
                resultCalculation = parseFloat(num1) / parseFloat(num2)
                break
        }
        setResult(resultCalculation)
    }

    // NOOP
    // () => {}
    return (
        <>
            <h1>{title}</h1>
            <form>
                <label htmlFor="First number">Premier nombre : </label>
                <input 
                    type="number" 
                    name="First number"
                    onChange={(event) => handleChange("First number", event.target.value)}
                    value={num1}
                    />

                <label htmlFor="Operator">Operator : </label>

                <select 
                    name="Operator"
                    onChange={(event) => handleChange("Operator", event.target.value)}
                    value={operator}
                    >
                        {operators.map((ope, index) => (
                            <option key={index} value={ope}>{ope}</option>
                        ))}
                </select>

                <label htmlFor="Second number">Deuxième nombre : </label>
                <input 
                    type="number" 
                    name="Second number"
                    onChange={(event) => handleChange("Second number", event.target.value)}
                    value={num2}
                    />

                <button onClick={handleCalculation}>
                    Calculer
                </button>

                <h4>Result : {result}</h4>

            </form>
        </>
    )
}

export default Calculatrice;