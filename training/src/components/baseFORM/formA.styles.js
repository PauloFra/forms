import styled from 'styled-components'
import IMG from '../../images/formA.jpg'
export const DivMaior = styled.div`
    width: 100%;
    min-height:100vh ;
    display: flex;
`
export const DivRight = styled.div`
    width: 50%;
    background-color: rgb(40,41,112);
    display: flex;
    align-items: center;
    justify-content: center;
    
    /* background:url('../../images/formA.jpg') top left repeat; */
`
export const DivLeft = styled.div`
    width: 50%;
    background-color: rgb(255,242,242);
    display: flex;
    justify-content: center;
    align-items: center;
    form {
        display: grid;
        gap: 20px 0;
        width: 500px;
    }
`
export const DivContentRight = styled.div`
    margin: 0 200px;
`
export const DivContentLeft = styled.div`   
`
export const DivInputEye = styled.div`   
    display: flex;
    align-items: center;
    input{
        width: 100%;
    };
    a{
      
        height: 100%;
        font-size: 20px;
        color: rgb(83,83,83);
        cursor: pointer;
    }
`
export const DivFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 17px;
    color: rgb(83,83,83);
    a{
        text-decoration:none ;
        color: rgb(83,83,83);
    }
    label{
        cursor: pointer;
    }
    input{
        cursor: pointer;
        margin-right: 10px;
    }
`
export const DivTextLogo = styled.div`
    text-align: center;
    padding-bottom: 20px;
`

export const LogoODDO = styled.h2`
    font-size: 34px;
    font-family: 'Courier New', Courier, monospace;
`
export const SingUpText = styled.h3`
    font-weight: normal;
    font-size: 24px;
`
export const InputDefault = styled.input`
    border: none;
    font-size: 20px;
    outline: 0;
    color: rgb(83,83,83);
    padding: 15px 20px;
    background-color: white;
`   
export const DivEye = styled.div`
    border: none;
    padding: 15px;
    background-color: white;
`   
export const ButtonSubmit = styled.button`
    padding: 12px 0;
    background-color: rgb(245,192,37);
    color: white;
    cursor: pointer;
    font-size: 20px;
    border-radius: 4px;
    border: 0;
    transition: 0.5s;
    :hover{
        background-color: #f0cb5d; 
    }
`   

export const Logo = styled.h1`
  font-size: 55px;
  margin-bottom: 25px;
  color: white;
`   

export const P = styled.p`
  font-size: 18px;
  font-weight: normal;
  color: white;
`   