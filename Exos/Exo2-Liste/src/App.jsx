import './App.css'
import { nanoid } from 'nanoid';
import ListProducts from './components/ListProducts';

function App() {

  const productsList = [
    {id: nanoid(), productName: '1kg de Pomme', productPrice: 2, isPromo: false},
    {id: nanoid(), productName: 'Gourde en métal', productPrice: 17.59, isPromo: false},
    {id: nanoid(), productName: 'Lait 0% lactose', productPrice: 13.99, isPromo: true},
    {id: nanoid(), productName: 'Pack d\'eau SPA 5L', productPrice: 8, isPromo: false},
    {id: nanoid(), productName: 'Filet de poulet', productPrice: 6.69, isPromo: true},
  ]

  return (
    <ListProducts list={productsList} />
  )
}

export default App
