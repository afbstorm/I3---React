import './App.css'
import User from './components/User'
import Details from './components/Details';

function App() {

  const coursDesWad = 'React';
  const actorsTab = ['Zendaya', 'Thimothy Chalamet']

  return (
    <>
      <h2>Coucou hibou</h2>
      <User cours={coursDesWad}/>
      <Details 
        id={42}  
        synopsis={"C'était BEAUCOUP TROP BIEN"}
        actors={actorsTab}
      />
    </>

  )
}

export default App
