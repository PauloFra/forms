import React from 'react'
import * as Component from './Home.styles'
import { Formik , Field , Form , ErrorMessage , FieldArray } from 'formik'
function Home() {
  const initialValues = {
    userName:'',
    email:'',
    familiares:[]
  }

  return (
    <Component.DivMaior>
        <Component.TitlePage>Registro</Component.TitlePage>
        <Component.DivContent>
          <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            alert(JSON.stringify(values, null, 2));
          }}
          >
           { ({ values }) =>(
             <Form>
              <Component.DivInputLabel>
                <label htmlFor="">Seu Nome:</label>
                <Field 
                name={`userName`}
                placeholder="Nome"
                type="text"
                />
              </Component.DivInputLabel>
              <Component.DivInputLabel>
              <label htmlFor="">Seu Email:</label>
                <Field 
                name={`email`}
                placeholder="Nome"
                type="text"
                />
              </Component.DivInputLabel>
               <FieldArray name='familiares'>
                 {({insert ,remove , push}) =>(
                   <div>
                     {values.familiares.length > 0 &&
                     values.familiares.map((friend , index) =>(
                       <div key={index}>
                         <Component.DivTitleParente>
                           <h3>{`Parente ${index + 1}`}</h3>
                         </Component.DivTitleParente>
                        <Component.DivInputLabel>
                        <Component.DivX>
                          <label htmlFor="">Nome</label>
                          <Component.ButtonX
                          type='button'
                          onClick={()=> remove(index)}
                          >
                            X 
                          </Component.ButtonX>
                        </Component.DivX>
                          <Field
                          name={`familiares.${index}.name`}
                          placeholder="Nome"
                          type="text"
                          />
                          {/* <ErrorMessage
                          name={`friends.${index}.name`}
                          component="div"
                          className="field-error"
                        /> */}
                        </Component.DivInputLabel> 
                       <Component.DivInputLabel>
                        <label htmlFor="">parentesco</label>
                          <Field
                          name={`familiares.${index}.parentesco`}
                          placeholder="parentesco"
                          type="text"
                          />
                          {/* <ErrorMessage
                          name={`friends.${index}.parentesco`}
                          component="div"
                          className="field-error"
                        /> */}
                        </Component.DivInputLabel> 
                       <Component.DivInputLabel>
                         <label htmlFor="">Email</label>
                         <Field 
                          name={`familiares.${index}.email`} 
                          placeholder="Email"                         
                         />
                         {/* <ErrorMessage
                          name={`friends.${index}.email`}
                          component="div"
                          className="field-error"
                        /> */}
                       </Component.DivInputLabel>
                      </div>
                     ))}
                     <Component.ButtonAdd
                      type='button'
                      onClick={()=>push({name:'' , email:'' , parentesco:''})}
                     >Adicionar Parente
                     </Component.ButtonAdd>
                   </div>
                 )}
               </FieldArray>
              
              
                 <Component.ButtonSubmit type='submit'>Enviar</Component.ButtonSubmit>
              
             </Form>
           )} 
          </Formik>
        </Component.DivContent>
    </Component.DivMaior>
  )
}

export default Home