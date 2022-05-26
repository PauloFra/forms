import  {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import React from 'react'
import Login from './pages/formA/Login'
import CreateUser from './pages/formA/CreateUser'
import ForgotPassword from './pages/formA/ForgorPassword'
function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={ <Login /> } />
        <Route path={'/formA-forgot-password'} element={ <ForgotPassword /> } />
        <Route path={'/formA-create-user'} element={ <CreateUser /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers