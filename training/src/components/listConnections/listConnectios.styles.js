import styled from "styled-components";

export const DivM = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    margin: 20px 0;
    color: rgb(83,83,88);
    a{
        text-decoration: none;
        color: rgb(83,83,88);
    }
`
export const DivLog = styled.div`
    display: flex;
    align-items: center;
`
export const DivListra = styled.div`
    border-top: 1px solid rgb(216,220,220);
    width: 190px;
`
export const Paragraph = styled.p`
   margin: 0 10px;
`
export const DivAllIcons = styled.div`
   display: flex;
   margin: 20px 0;
`
export const DivIcon = styled.div`
   border-radius: 4px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    padding: 15px;
    margin: 10px 5px 10px 0;
    background-color: ${props => props.backgroundColor};
    :hover{
        
    }
`