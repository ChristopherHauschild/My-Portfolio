import React from 'react'
import styled from 'styled-components'
import {
  Grid,
  Typography,
  Divider,
  Paper
} from '@material-ui/core'

import mdl from '../../../assets/mdl.png'
import rckt from '../../../assets/rckt.png'
import alura from '../../../assets/alura.png'

import Card from './cards-events.js'

const Events = () => {
  return (
    <GridContainer container xs={12}>
      <PaperContainer>

        <GridTitle item xs={12}>
          <TypographyTitle>Eventos</TypographyTitle>
          <DividerTitle />
        </GridTitle>
      
      <CardsContainer>
        <Card
          image={mdl}
          title="Workshop Full Stack Lab"
          content="Evento disponibilizado pela plataforma de ensino devPleno em que se desenvolveu, durante uma semana, o aplicativo MyDailyStatus, utilizando React integrado ao Node.js e Firebase."
          linkButton="https://github.com/ChristopherHauschild/app-fullstackLab-workshop"
        />

        <Card
          image={rckt}
          title="Semana Omnistack 11.0"
          content="Evento disponibilizado pela Rocketseat, durante o qual se desenvolveu em uma semana um aplicativo (Be The Hero) completo para web
          e mobile, utilizando React, React Native e Node.js."
          linkButton="https://github.com/ChristopherHauschild/Omnistack-BeTheHero"
        />

        <Card
          image={rckt}
          title="Next Level Week 1.0"
          content="Evento disponibilizado pela Rocketseat, durante o qual se desenvolveu em uma semana um aplicativo (Ecoleta) completo para web
          e mobile, utilizando React, React Native, TypeScript e Node.js."
          linkButton="https://github.com/ChristopherHauschild/next-level-week-ecoleta"
        />

        <Card
          image={alura}
          title="#QuarentenaDev"
          content="Evento disponibilizado pela Alura, durante o qual foram disponilizadas atividades e desenvolvido projetos
          em JavaScript, HTML e CSS durante 10 dias."
          linkButton="https://github.com/ChristopherHauschild/maratona-alura-quarentenadev"
        />
      </CardsContainer>

      </PaperContainer>
    </GridContainer>
  )
}

const GridContainer = styled(Grid)`
  && {
    margin-top: 30px;
  }
`

const PaperContainer = styled(Paper)`
  && {
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 10px;
  }
`
const GridTitle = styled(Grid)`
  && {
    padding: 10px 15px;
  }
`

const TypographyTitle = styled(Typography).attrs({
  variant: 'h5'
})`
  && {
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 8px;
    color: #ff7a05;
  
    @media only screen and (max-width:600px) {
      font-size: 1.6rem;
      text-align: center;
    }
  }
`

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const DividerTitle = styled(Divider)``

export default Events
