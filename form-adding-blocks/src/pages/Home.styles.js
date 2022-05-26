import styled from 'styled-components'

export const DivMaior = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1E1E1E;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
   
    min-height: 100vh;
    color: #A8ADA1;
    form{
        display: grid;
    }
    input{
        color: white;
        padding: 4px;
        font-size: 15px;
        background-color: transparent;
        border: 1px solid #A8ADA1;
        outline: 0;
    }
    label{
        margin-bottom: 4px;
    }
`
export const TitlePage = styled.h1`
    color: #A8ADA1;
    font-size: 45px;
    margin-bottom: 15px;
`
export const DivContent = styled.div`
    border-radius: 15px;
    padding: 50px 150px;
    font-size: 20px;
    background-color: #171717;
    box-shadow: 0 0.3rem 0.8rem rgb(0 0 0 / 12%);
`

export const DivInputLabel = styled.div`
   display: flex;
   flex-direction: column;
   width: 550px;
   margin-bottom: 15px;
`
export const DivX = styled.div`
   display: flex;
  justify-content: space-between;
`
export const DivTitleParente = styled.div`
  margin-bottom: 10px;
`

export const ButtonAdd = styled.button`
    padding: 2px;    
    border: 1px solid #A8ADA1;
    cursor: pointer;
    margin-bottom: 15px;
    background-color: #A8ADA1;
    color: #171717;
    transition: 0.5s;
    :hover{
        background-color: transparent;
        border: 1px solid #A8ADA1;
        color:#A8ADA1 ;
    }
`
export const ButtonX = styled.button`
 font-weight: bold;
 background-color: transparent;
 border-radius: 20px;
 border: none;
 font-size: 15px;
 padding: 3px 6px;
 cursor: pointer;
 transition: 0.5s;
 :hover{
    background-color: rgb(168, 173, 161 , 0.1);
    
 }
`
export const ButtonSubmit = styled.button`
  padding: 4px;
  color: #A8ADA1;
  background-color: transparent;
  border: 1px solid #A8ADA1;
  transition: 0.5s;
  :hover{
      cursor: pointer;
    background-color: #A8ADA1;
    color: #171717;
  }
`