import React,{useState} from 'react'
import {Formik , Field ,Form  } from 'formik'
import * as Component from './FormOne.styles' 
import * as yup from 'yup'
import { TextField } from 'formik-material-ui'
import { Button } from '@material-ui/core'
function FormOne() {
  return (
    <Component.DivMaior>
      <FormikStepper
        initialValues={
          {
            firstName:"",
            lastName:"",
            email:"",
            endereco:"",
            rua:"",
            numero:"",
            motivoContato:"",
            descricao:"",
            celular:"",
          }
        } onSubmit={(values)=>{
          console.log(values);
        }}
        >
            <FormikStep 
              validationSchema={yup.object().shape({
                firstName:yup.string().required("Campo Obrigatorio"),
                lastName:yup.string().required("Campo Obrigatorio"),
                email:yup.string().required("Campo Obrigatorio")
              })}
            >
              <div>
                <h2>Informações Pessoais</h2>
                <Field
                  label="firstName" 
                  name="firstName"
                  id="firstName"
                  component={TextField}
                />
                            
                <Field
                label="lastName" 
                name="lastName"
                component={TextField}
              />
              
              <Field
                label="email" 
                name="email"
                component={TextField}
              />
              </div>
            </FormikStep>
            <FormikStep
            validationSchema={yup.object().shape({
              endereco:yup.string().required("Campo Obrigatorio"),
              rua:yup.string().required("Campo Obrigatorio"),
              numero:yup.string().required("Campo Obrigatorio")
            })}>
            <div>
              <h2>Endereço</h2>
                <Field
                  label="endereco" 
                  name="endereco"
                  id="endereco"
                  component={TextField}
                />
              <Field
                label="rua" 
                name="rua"
                component={TextField}
              />
              
              <Field
                label="numero" 
                name="numero"
                component={TextField}
              />
              </div>
            </FormikStep>
              
            <FormikStep
            validationSchema={yup.object().shape({
              motivoContato:yup.string().required("Campo Obrigatorio"),
              descricao:yup.string().required("Campo Obrigatorio"),
              celular:yup.string().required("Campo Obrigatorio")
            })}>
            <div>
            <h2>Dados Plus</h2>
              <Field
                label="motivoContato" 
                name="motivoContato"
                id="motivoContato"
                component={TextField}
              />
            <Field
              label="descricao" 
              name="descricao"
              component={TextField}
             />
            
            <Field
              label="celular" 
              name="celular"
              component={TextField}
             />
             </div>
            </FormikStep>
      </FormikStepper>
    </Component.DivMaior>
  )
}

export default FormOne

export function FormikStep({children}){
  return <>{children}</>
}

export function FormikStepper({children , ...props}){
   const childrenArray = React.Children.toArray(children)
   const [step , setStep] = useState(0) 
   const currentChild = childrenArray[step]
   function isLastStep(){
     return step === childrenArray.length - 1
   }
    return(
    <Formik
    {...props}
    validationSchema={currentChild.props.validationSchema}
    onSubmit={async (values) => {
      if(isLastStep()){
        await props.onSubmit(values)
      }else{
        setStep(step => step + 1)
      }
    }}
    >
    <Form>
      {currentChild}
      {step > 0 ?
     <Button onClick={() => setStep(step => step-1) }>Back</Button>
      :
    null}
    <Button type="submit">{isLastStep()?'Submit':'Next'}</Button>
    </Form>
    </Formik>
 )
}