import React from 'react'
import{
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import FormOne from './pages/formOne/FormOne.js'
import FormTwo from './pages/formTwo/FormTwo.js'
import Home from './pages/home/Home.js'

function Routers() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FormTwo />} />
          <Route path='/home' element={<Home />} >
            <Route path=':nomeUser'></Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
  )
}

export default Routers