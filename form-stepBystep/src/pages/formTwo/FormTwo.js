import React,{useState} from 'react'
import {Formik , Field ,Form  } from 'formik'
import * as Component from './FormTwo.styles' 
import * as yup from 'yup'
import Img from '../../image/img.svg'
import { TextField } from 'formik-material-ui'
import { useNavigate } from 'react-router-dom'
function FormTwo() {
  const navigate = useNavigate()
 async function Cadastrar(values){
     navigate(`/home/${values.firstName}`)
     alert(`Você foi cadastrado no nosso sistema Sr(a) ${values.firstName}`)
   
  }
  return (
    <Component.DivMaior>
    <Component.DivLeft>
        <img src={Img} alt="" />
        <Component.DivText>
            <h1>Satisfaction Survey</h1>
            <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel. Adhuc invidunt duo ex. Eu tantas dolorum ullamcorper qui.</p>
            <Component.ButtonLeft>Purchase this template</Component.ButtonLeft>
        </Component.DivText>
    </Component.DivLeft>
        <Component.DivRight>
            <Component.DivForm>
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
          Cadastrar(values);
        }}
        >
            <FormikStep 
              validationSchema={yup.object().shape({
                firstName:yup.string().required("Campo Obrigatorio"),
                lastName:yup.string().required("Campo Obrigatorio"),
                email:yup.string().required("Campo Obrigatorio")
              })}
            >
             
                <h2>Informações Pessoais</h2>
                <Field
                    label="Primeiro Nome" 
                    name="firstName"
                    id="firstName"
                    component={TextField}
                />
                          
                <Field
                label="Sobrenome" 
                name="lastName"
                component={TextField}
                />
              
              <Field
                label="Email" 
                name="email"
                component={TextField}
              />
            
            </FormikStep>
            <FormikStep
            validationSchema={yup.object().shape({
              endereco:yup.string().required("Campo Obrigatorio"),
              rua:yup.string().required("Campo Obrigatorio"),
              numero:yup.string().required("Campo Obrigatorio")
            })}>
            
              <h2>Endereço</h2>
                <Field
                  label="Endereço" 
                  name="endereco"
                  id="endereco"
                  component={TextField}
                />
              <Field
                label="Nome da Rua" 
                name="rua"
                component={TextField}
              />
              
              <Field
                label="Numero da Casa" 
                name="numero"
                component={TextField}
              />
            </FormikStep>
              
            <FormikStep
            validationSchema={yup.object().shape({
              motivoContato:yup.string().required("Campo Obrigatorio"),
              descricao:yup.string().required("Campo Obrigatorio"),
              celular:yup.string().required("Campo Obrigatorio")
            })}>
            
            <h2>Dados Plus</h2>
              <Field
                label="Motivo Contato" 
                name="motivoContato"
                id="motivoContato"
                component={TextField}
              />
            <Field
              label="Descrição" 
              name="descricao"
              component={TextField}
             />
            
            <Field
              label="Celular" 
              name="celular"
              component={TextField}
             />
             
            </FormikStep>
      </FormikStepper>
            </Component.DivForm>
        </Component.DivRight>
    </Component.DivMaior>
  )
}

export default FormTwo

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
      <Component.DivSteps>
        {step + 1 + '/' + childrenArray.length } 
      </Component.DivSteps>
        {currentChild}
        <div>
        {step > 0 ?
        <Component.ButtonStepsNSub type='button' color='gray' onClick={() => setStep(step => step - 1) }>Back</Component.ButtonStepsNSub>
        :
        null}
        <Component.ButtonStepsNSub back="rgb(67,75,223)" color="white"type="submit">{isLastStep()?'Submit':'Next'}</Component.ButtonStepsNSub>
        
        </div>
        </Form>
  
    </Formik>
 )
}