import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  // Sans paramètre
  const incrementCount = () => {
    setCount(count => count + 1)
  }

  // Avec paramètre
  const incrementCountByValue = (value) => {
    setCount(count => count + value)
  }

  return (
    <>
      <Counter increment={incrementCount} incrementByValue={incrementCountByValue}/>
      <h3>Count : {count}</h3>
    </>

  )
}

export default App
