import { useState } from 'react'
import './App.css'
import Navbar from './static/NavBar'
import MonsterIndex from './component/monster/MonsterIndex'

function App() {
  const [count, setCount] = useState(0)


  return (

    <>
    <Navbar/>
    <MonsterIndex/>
    </>


  )


}

export default App
