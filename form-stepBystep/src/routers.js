import React from 'react'
import{
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import FormOne from './pages/formOne/FormOne.js'
import FormTwo from './pages/formTwo/FormTwo.js'

function Routers() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FormTwo />} />
        </Routes>
      </BrowserRouter>
  )
}

export default Routers