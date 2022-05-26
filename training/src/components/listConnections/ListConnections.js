import React from 'react'
import * as Component from './listConnectios.styles'
import { Link } from 'react-router-dom'
import { FaFacebookF ,FaTwitter , FaGoogle , FaLinkedin} from 'react-icons/fa'
function ListConnections({textAfterLink , linkText , Path}) {
    console.log(Link);
  return (
    <Component.DivM>
        <Component.DivLog>
            <Component.DivListra></Component.DivListra>
                <Component.Paragraph>Or Login With</Component.Paragraph>
            <Component.DivListra></Component.DivListra>
            
        </Component.DivLog>
        <Component.DivAllIcons> 
            <Component.DivIcon backgroundColor='rgb(59,89,153)'>
                <FaFacebookF />
            </Component.DivIcon>
            <Component.DivIcon backgroundColor='rgb(70,193,246)'>
                <FaTwitter /> 
            </Component.DivIcon >
            <Component.DivIcon backgroundColor='rgb(219,68,55)'>
                <FaGoogle />
            </Component.DivIcon>
            <Component.DivIcon backgroundColor='rgb(35,146,224)'> 
                <FaLinkedin />
            </Component.DivIcon>
        </Component.DivAllIcons>
      <p>{textAfterLink} <Link to={Path ? Path : ''}>{linkText}</Link> </p>        
    </Component.DivM>
  )
}

export default ListConnections