import styled from 'styled-components'

export const DivMaior = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
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
    background-color: #434bdf;
`
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
   padding:10px 15px;
   color: white;
   font-weight: bold;
   cursor: pointer;
   border-radius: 20px;
   border: 1px solid black;
   background-color: rgb(67,75,223);
`

export const DivForm = styled.div`
   width: 400px;
`
