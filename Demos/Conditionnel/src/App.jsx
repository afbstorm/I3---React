import './App.css'
import Condition from './components/Condition';
import { nanoid } from 'nanoid';


function App() {

  const musicArtist = [
    {id: nanoid(), firstname: 'Hanz', lastname: 'Zimmer', musicType: 'Movie music'},
    {id: nanoid(), firstname: 'Ennio', lastname: 'Morricone', musicType: 'Movie music'},
    {id: nanoid(), firstname: 'Michel', lastname: 'Legrand', musicType: 'Movie music'},
    {id: nanoid(), firstname: 'Thom', lastname: 'Yorke', musicType: 'Indie'},
    {id: nanoid(), firstname: 'Edith', lastname: 'Piaf', musicType: 'Chanson française'}
  ]

  const movieChoice = 'Interstellar'

  return (
    <Condition happy={true} movie={movieChoice} musics={musicArtist} />
  )
}

export default App
