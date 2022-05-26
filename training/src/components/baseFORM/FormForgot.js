import { Link } from 'react-router-dom'
import './formAFS.css'
import ListConnections from '../listConnections/ListConnections'
import { useFormik } from 'formik'
import * as Component from './formA.styles'
function FormForgot() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert( JSON.stringify(values , null , 2) );
    },
  });
 
  return (
      <Component.DivLeft>
        <Component.DivContentLeft>
            <Component.DivTextLogo>
              <Component.LogoODDO>Oddo</Component.LogoODDO>
              <Component.SingUpText>Recover Your Password</Component.SingUpText>
            </Component.DivTextLogo>
            <form onSubmit={formik.handleSubmit}>
                <Component.InputDefault type="text"
                  placeholder='Email Address'
                  id='email'
                  name='email'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <Component.ButtonSubmit type='submit'>Send Me Email</Component.ButtonSubmit>
              </form>
              <ListConnections linkText='Login here' textAfterLink='Already a member?' Path='/' />
        </Component.DivContentLeft>
      </Component.DivLeft>
     )
}

export default FormForgot