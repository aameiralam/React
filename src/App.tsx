// import { useState } from 'react'
import './App.css'
import Navbar from './static/NavBar'
import MonsterIndex from './component/monster/MonsterIndex'
import { Route, Routes } from 'react-router-dom'
import UpdateMonster from './component/monster/UpdateMonster'
import Footer from './static/Footer'
import Register from './component/auth/Register'
import Login from './component/auth/Login'


function App() {
  // const [count, setCount] = useState(0)


  return (

    <>
    <Navbar/>
    
    <Routes>
      
    <Route path="/" element= {<MonsterIndex/>}/>
    {/* <Route path="/secret" element= {<Footer/>}/> */}
    <Route path="/update" element={<UpdateMonster/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
   

    </Routes>
    <Footer/>
    
    
    </>


  )


}

export default App
