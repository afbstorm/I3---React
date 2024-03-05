import { useEffect, useState } from 'react'
import './App.css'
import DemoState from './components/DemoState';

function App() {
  const [count, setCount] = useState(0)
  const [valeurStockee, setValeurStockee] = useState(null);
  // Exemple de useState de plusieurs valeurs
  const [formValues, setFormValues ] = useState({
    firstname: '',
    lastname: '',
    password: '',
    email: '',
    adult: false
  })

  const sayCoucou = () => {
    console.log('Coucou');
  }

  // A chaque changement de valeur dans le target de l'élément, on stocke la valeur dans le state valeurStockee
  const handleChange = (event) => {
    setValeurStockee(event.target.value)
    console.log(`Nouvelle valeur : ${valueStockee}`);
  }

  const handleSubmit = (event) => {
    console.log(valeurStockee);
  }

  return (
      <div>
        <h3>onClick</h3>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <button onClick={sayCoucou}>
          Click me to say coucou
        </button>

        <h3>onChange</h3>
        <input type="text" onChange={handleChange} />

        <h3>onSubmit</h3>
        <form onSubmit={handleSubmit}></form>
        <input type="text"  />

        <DemoState />
        
      </div>
  )
}

export default App
