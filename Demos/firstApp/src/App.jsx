import './App.css'
import User from './components/User'
import Details from './components/Details';

function App() {

  // Déclaration des variables qui vont contenir les informations a envoyer au composant enfant
  const coursDesWad = 'React'; 
  const actorsTab = ['Zendaya', 'Thimothy Chalamet']

  return (
    <>
      <h2>Coucou hibou</h2>

      {/* Appel des composants enfant et transfère de props => nomDuProp={valeurDuProp}
      La valeur du prop peut être une valeur brute ou stockée dans une variable ou encore une fonction */}
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
