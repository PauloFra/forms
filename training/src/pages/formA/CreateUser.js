import './FormAFontFamily.css'
import FormACreateUser from '../../components/baseFORM/FormACreate.js'
import * as Component from './formA.styles'
function CreateUser() {
  return (
    <Component.DivMaior>
      <FormACreateUser />
      <Component.DivRight>
        <Component.DivContentRight>    
          <Component.Logo>WELCOME TO ODDO</Component.Logo> 
          <div>
            <Component.P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus similique omnis in obcaecati. Eos voluptates consequuntur ipsa, repellendus repudiandae ut pariatur sequi esse ad similique nulla vero beatae, blanditiis fugiat. Unde, praesentium aspernatur? Saepe beatae possimus itaque similique consequatur nam.</Component.P>
          </div>     
        </Component.DivContentRight>
      </Component.DivRight>
    </Component.DivMaior>
  )
}

export default CreateUser