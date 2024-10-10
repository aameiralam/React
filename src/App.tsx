// import { useState } from 'react'
import './App.css'
import Navbar from './static/NavBar'
import MonsterIndex from './component/monster/MonsterIndex'
import { Route, Routes } from 'react-router-dom'
import UpdateMonster from './component/monster/UpdateMonster'
import Footer from './static/Footer'

function App() {
  // const [count, setCount] = useState(0)


  return (

    <>
    <Navbar/>
    
    <Routes>
      
    <Route path="/" element= {<MonsterIndex/>}/>
    {/* <Route path="/secret" element= {<Footer/>}/> */}
    <Route path="/update" element={<UpdateMonster/>}/>

    </Routes>
    <Footer/>
    
    
    </>


  )


}

export default App
