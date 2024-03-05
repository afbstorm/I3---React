import './App.css'
import Bienvenue from './components/Bienvenue'

function App() {
 
  const firstname = 'Senem';
  const age = 30;

  return (
    <Bienvenue age={age} />
  )
}

export default App
