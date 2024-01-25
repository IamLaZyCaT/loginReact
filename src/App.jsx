import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './component/Index/Index'
import Login from './component/Login/Login'
import Sign from './component/Sign/Sign'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/sign' element={<Sign/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
