import styled from 'styled-components'

export const DivMaior = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-size:17px;
   form{
       display: flex;
       flex-direction: column;
       gap: 10px;
   }
`

export const DivLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100vh;
    background: rgb(67,75,223);
background: linear-gradient(180deg, rgba(67,75,223,1) 0%, rgba(67,75,223,1) 63%, rgba(114,121,241,1) 98%);`

export const DivRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100vh;   
`
export const DivText = styled.div`
   padding:0 60px;
   text-align: center;
   color: white;
`
export const ButtonLeft = styled.button`
   padding:10px 25px;
   color: white;
   font-weight: bold;
   cursor: pointer;
   font-size: 16px;
   border-radius: 20px;
   border: 0;
   background-color: rgb(67,75,223);
   transition: 0.5s;
   :hover{
    background-color: #6b70d1;
  
   }
`

export const DivForm = styled.div`
   width: 400px;
   
`

export const DivSteps = styled.h4`
    margin: 0;
    padding: 0;
    font-weight: bold;
`
export const ButtonStepsNSub = styled.button`
    border: 0;
    padding: 10px;
    font-weight: bold;
    color:  ${props => props.color};;
    cursor: pointer;
    background-color: ${props => props.back};
    transition: 0.5s;
    width:100px;
    margin-right: 10px;
    :hover{
        color: white;
        background-color: #d63384;
    }
`