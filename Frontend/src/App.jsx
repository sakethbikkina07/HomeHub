import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './Component/Login'
import Register from './Component/Register'
import UserDashboard from './Component/UserDashboard'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
