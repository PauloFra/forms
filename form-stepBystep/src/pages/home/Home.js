import React from 'react'
import { DivMaior , H3 } from './Home.styles'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
function Home() {
  const { nomeUser } = useParams()
  return (
    <DivMaior>
        <H3>
            {` O último usuario cadastrado foi o Sr(a) ${nomeUser}`}   
            <Link to={'/'}> Clique Aqui Para Cadastrar Novamente!</Link>
        </H3>
    </DivMaior>
  )
}

export default Home