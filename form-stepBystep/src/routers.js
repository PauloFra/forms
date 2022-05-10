import React from 'react'
import{
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import FormOne from './pages/formOne/FormOne.js'
function Routers() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<FormOne />} />
        </Routes>
      </BrowserRouter>
  )
}

export default Routers