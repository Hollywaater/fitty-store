import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import NavBar from './components/NavBar'
import ItemListConteiner from './components/ItemListConteiner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <ItemListConteiner
      greeting = "Bienvenidos a Fitty Store la elite de la estetica Vehicular"/>
    </>
  )
}

export default App
