import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

function App() {

  // Création d'un state complexe (object) qui va contenir toutes les informations des inputs du formulaire
  const [ formValues, setFormValues ] = useState({
    id: nanoid(), // Utilisation de nanoid pour générer un identifiant unique par object
    country: '',
    email: '',
    lastname: '',
    adult: false,
    age: ''
  });

  // Création d'un tableau de pays
  const countries = ['Belgique', 'France', 'Allemagne', 'Italie', 'Espagne', 'Maroc'];

  // Première façon de créer une fonction qui va servir a récupérer la valeur de l'input
  // Cette fonction prend deux paramètres (input -> le nom de l'input, value -> la valeur de l'input)
  // On set le state en utilisant le spread operator (...) sur la valeur actuelle du state puis
  // on cherche une key de l'object de la même valeur que le nom de l'input et on lui assigne la valeur de l'input
  const handleChanges = (input, value) => {
    setFormValues((prevValues) => ({...prevValues, [input]: value}))
  }  

  // Deuxième façon de créer une fonction qui va servir a récupérer la valeur de l'input
  // Cette fonction prend l'event en paramètre
  // On destructure le target de l'event pour récupérer les attributs possible des différents inputs
  // On set le state en utilisant le spread operator (...) sur la valeur actuelle du state puis
  // on cherche une key de l'object de la même valeur que le nom de l'input et on lui assigne la valeur de l'input
  const handleChanges2 = (event) => {
    const { name, type, value, checked } = event.target;

    setFormValues((prevValues) => ({...prevValues, [name]: type === 'checkbox' ? checked : value}))
  }

  // Fonction qui va se déclencher au clic du bouton submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <section className='container'>
      <form onSubmit={handleSubmit} className='form-container'>
        <div className='form-input'>
          <label htmlFor="country">Indiquez votre pays </label>
          {/* Appel de la fonction via une anonyme a qui l'on passe l'event, puis on appelle la fonction en lui 
          onnant les deux paramètres */}
          <select name="country" id="country" onChange={(e) => {handleChanges('country', e.target.value)}}>
            {countries.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div className='form-input'>
          <label htmlFor="email">Email : </label>
          {/* Appel de la fonction */}
          <input type="text" name="email" id="email" value={formValues.email} onChange={handleChanges2}/>
        </div>
        <div className='form-input'>
          <label htmlFor="lastname">Lastname : </label>
          <input type="text" name="lastname" id="lastname" value={formValues.lastname} onChange={handleChanges2}/>
        </div>
        <div className='form-input'>
          <label htmlFor="adult">Are you over 18 ? </label>
          <input className='form-checkbox' type="checkbox" name="adult" id="adult" checked={formValues.adult} onChange={handleChanges2}/>
        </div>
        <div className='form-input'>
          <label htmlFor="age">How old are you ? </label>
          <input type="number" name="age" id="age" value={formValues.age} onChange={handleChanges2}/>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  )
}

export default App
