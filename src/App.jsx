import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './component/Index/Index'
import Login from './component/Login/Login'
import Signup from './component/Signup/Signup'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
