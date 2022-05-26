import { useState } from 'react'
import './formAFS.css'
import { Link } from 'react-router-dom'
import { VscEye , VscEyeClosed} from 'react-icons/vsc'
import { useFormik } from 'formik'
import ListConnections from '../listConnections/ListConnections'
import * as Component from './formA.styles'
function FormALogin() {
  const [eye , setEye] = useState('password')
  const formik = useFormik({
    initialValues: {
      email: '',
      senha: '',
      rememberMe:false,
    },
    onSubmit: values => {
      alert( JSON.stringify(values , null , 2) );
    },
  });
  function PasswordEye () {
    switch(eye) {
      case 'password' : 
      setEye('text')
      break;
      case 'text' : 
      setEye('password')
      break;
  } 
  }
  return (
      <Component.DivLeft>
        <Component.DivContentLeft>
            <Component.DivTextLogo>
              <Component.LogoODDO>Oddo</Component.LogoODDO>
              <Component.SingUpText>Sign Into Your Account</Component.SingUpText>
            </Component.DivTextLogo>
            <form onSubmit={formik.handleSubmit}>
                <Component.InputDefault type="text"
                  placeholder='Email Address'
                  id='email'
                  name='email'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              
              <Component.DivInputEye>
                <Component.InputDefault 
                  placeholder='Password'
                  type={eye}
                  name="senha"
                  onChange={formik.handleChange}
                  value={formik.values.senha}
                />
                <Component.DivEye>
                  <a onClick={()=> PasswordEye()}>
                    {eye === 'password' ? <VscEye /> :<VscEyeClosed /> }
                  </a>  
                </Component.DivEye> 
               
              </Component.DivInputEye>
              <Component.DivFlex>
                <Component.DivFlex>
                <input 
                    type="checkbox"
                    id='rememberMe'
                    name="rememberMe"
                    onChange={formik.handleChange}
                    value={formik.values.rememberMe}
                  />  
                  <label htmlFor="rememberMe">Remember me</label>
                  
                </Component.DivFlex>
              <Link to={'/formA-forgot-password'}>Forgot your password?</Link>
              </Component.DivFlex>
                <Component.ButtonSubmit type='submit'>Login</Component.ButtonSubmit>
              </form>
              <ListConnections linkText='Register here' textAfterLink='Dont have an account?' Path='/formA-create-user'/>
        </Component.DivContentLeft>
      </Component.DivLeft>
     )
}

export default FormALogin