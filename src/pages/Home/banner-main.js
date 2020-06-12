import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Typography, Button } from '@material-ui/core'


import banner from '../../assets/banner.jpg'
import './title-animation.css'

const BannerMain = () => {
  return (
    <Banner>
      <Title variant="h2">
      <span class="text_1">Bem vindo =) &nbsp;</span>
      <span class="text_2">Sinta-se em casa &nbsp;</span>
      </Title>
      <Subtitle variant="h5">
        Aqui você poderá encontrar detalhes de algumas das atividades e aplicações por mim desenvolvidas,
        além de cursos dos quais participei e um pouco do meu percurso acadêmico e experiência profissional.
      </Subtitle>
    
      <KnowMore>
        Saiba mais
      </KnowMore>
    </Banner>
  )
}

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background: url(${banner});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  min-height: 100vh;

  box-shadow: inset 0 0 0, 0 0 0.6em #0009;
`

const Title = styled(Typography)`
  && {
    display: flex;
    margin-top: 120px;
    padding: 15px 40px;

    font-weight: bold;
    color: #ff7a05;
  
    @media only screen and (max-width:800px) {
      font-size: 2.8rem;
      margin-top: 98px;
    }

    @media only screen and (max-width:680px) {
      font-size: 2.7rem;
      margin-top: 98px;
    }
  }
`


const Subtitle = styled(Typography)`
  && {
    font-weight: 400;
    margin-top: 30px;
    color: #fff;
    text-align: center;
    line-height: 45px;
    padding: 15px 40px;
    max-width: 900px;
    margin-bottom: 70px;

    @media only screen and (max-width:800px) {
      font-size: 1.7rem;
    }

    @media only screen and (max-width:680px) {
      font-size: 1.48rem;
    }
  }
`

const KnowMore = styled(Button).attrs({
  variant: 'contained',
  component: Link,
  to: '/about'
})`
  && {
    font-weight: bold;
    font-size: 1.2rem;
    padding: 10px 80px;
    margin-bottom: 80px;
  }

  &&:hover {
    background: #ff7a05;
    color: #fff;
  }

  &&:active {
    background: #ff7a05;
    color: #fff;
  }
`

export default BannerMain