import { useState } from 'react'
import './formAFS.css'
import { Link } from 'react-router-dom'
import { VscEye , VscEyeClosed} from 'react-icons/vsc'
import { useFormik } from 'formik'
import ListConnections from '../listConnections/ListConnections'
import * as Component from './formA.styles'
function FormACreateUser() {
  const [eye , setEye] = useState('password')
  const formik = useFormik({
    initialValues: {
      fullName:'',
      email: '',
      senha: '',
      terms:false,
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
              <Component.SingUpText>Create an account</Component.SingUpText>
            </Component.DivTextLogo>
            <form onSubmit={formik.handleSubmit}>
                <Component.InputDefault 
                  placeholder='Full Name'
                 
                  name="fullName"
                  onChange={formik.handleChange}
                  value={formik.values.fullName}
                />
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
                    id='terms'
                    name="terms"
                    onChange={formik.handleChange}
                    value={formik.values.terms}
                  />  
                  <label htmlFor="terms">I agree to the terms of service</label>
                  
                </Component.DivFlex>
              </Component.DivFlex>
                <Component.ButtonSubmit type='submit'>Register</Component.ButtonSubmit>
              </form>
              <ListConnections linkText='Login here' textAfterLink='Already a member?' Path='/' />
        </Component.DivContentLeft>
      </Component.DivLeft>
     )
}

export default FormACreateUser