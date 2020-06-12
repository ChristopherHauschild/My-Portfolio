import React from 'react'
import styled from 'styled-components'
import {
  Grid,
  Typography,
  Paper,
  Button,
  Card, CardActionArea, CardActions, CardContent, CardMedia
} from '@material-ui/core'

import mdl from '../../../assets/mdl.png'
import rckt from '../../../assets/rckt.png'
import alura from '../../../assets/alura.png'

const CardEvents = () => {
  return (

    <GridItemsContainer container xs={12}>
      <GridItem item xs={12} sm={6} md={4}>
        <divContainer>
        <PaperItem>

          <CardContainer>
            <CardActionArea>
              <CardImage image={mdl} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Workshop Full Stack Lab
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Evento disponibilizado pela plataforma de ensino devPleno em que se desenvolveu, durante uma semana, o aplicativo MyDailyStatus, utilizando React integrado ao Node.js e Firebase.
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardButton>
              <ExternalLink target="_blank" href="https://github.com/ChristopherHauschild/app-fullstackLab-workshop">
                <ButtonRepo size="small" color="primary">
                  Repositório
                </ButtonRepo>
              </ExternalLink>
            </CardButton>
          </CardContainer>

        </PaperItem>
        </divContainer>
      </GridItem>

      <GridItem item xs={12} sm={6} md={4}>
        <divContainer>
        <PaperItem>

          <CardContainer>
            <CardActionArea>
              <CardImage image={rckt} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Semana Omnistack 11.0
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Evento disponibilizado pela Rocketseat, durante o qual se desenvolveu em uma semana um aplicativo (Be The Hero) completo para web
                  e mobile, utilizando React, React Native e Node.js.
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardButton>
            <ExternalLink target="_blank" href="https://github.com/ChristopherHauschild/Omnistack-BeTheHero">
                <ButtonRepo size="small" color="primary">
                  Repositório
                </ButtonRepo>
              </ExternalLink>
            </CardButton>
          </CardContainer>

        </PaperItem>
        </divContainer>
      </GridItem>

      <GridItem item xs={12} sm={6} md={4}>
        <divContainer>
        <PaperItem>

          <CardContainer>
            <CardActionArea>
              <CardImage image={rckt} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Next Level Week 1.0
                    </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Evento disponibilizado pela Rocketseat, durante o qual se desenvolveu em uma semana um aplicativo (Ecoleta) completo para web
                  e mobile, utilizando React, React Native, TypeScript e Node.js.
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardButton>
              <ExternalLink target="_blank" href="https://github.com/ChristopherHauschild/next-level-week-ecoleta">
                <ButtonRepo size="small" color="primary">
                  Repositório
                </ButtonRepo>
              </ExternalLink>
            </CardButton>
          </CardContainer>
        </PaperItem>
        </divContainer>
      </GridItem>

      <GridItem item xs={12} sm={6} md={4}>
        <divContainer>
        <PaperItem>

          <CardContainer>
            <CardActionArea>
              <CardImage image={alura} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  #QuarentenaDev
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Evento disponibilizado pela Alura, durante o qual foram disponilizadas atividades e desenvolvido projetos
                  em JavaScript, HTML e CSS durante 10 dias.
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardButton>
            <ExternalLink target="_blank" href="https://github.com/ChristopherHauschild/maratona-alura-quarentenadev">
                <ButtonRepo size="small" color="primary">
                  Repositório
                </ButtonRepo>
              </ExternalLink>
            </CardButton>
          </CardContainer>

        </PaperItem>
        </divContainer>
      </GridItem>

    </GridItemsContainer>
  )
}

const divContainer = styled.div`
  margin-bottom: 5%;
  background: red;
`

const ExternalLink = styled.a`
  && {
    text-decoration: none;
  }
`

const GridItemsContainer = styled(Grid)``

const GridItem = styled(Grid)`
  && {
    padding: 15px 10px;
  }
`

const PaperItem = styled(Paper)`
`

const CardContainer = styled(Card)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
  }
`

const CardImage = styled(CardMedia)`
  && {
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;

    height: 130px;
  }
`

const CardButton = styled(CardActions)`
  && {
    align-items: center;
    justify-content: flex-end;
  }
`

const ButtonRepo = styled(Button)``

export default CardEvents
