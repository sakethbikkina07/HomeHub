import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './Component/Login'
import Register from './Component/Register'
import UserDashboard from './Component/UserDashboard'
import RedirectPage from './Component/RedirectPage'
import UserProfile from './Component/UserProfile'
import AdminDashboard from './Component/Admin/adminDashboard'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserDashboard/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/redirect" element={<RedirectPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App