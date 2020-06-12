import React from 'react'
import styled from 'styled-components'
import {
  Grid,
  Typography,
  Paper,
  Button,
  Card, CardActionArea, CardActions, CardContent, CardMedia
} from '@material-ui/core'

import logoRN from '../../../assets/logoRN.jpg'
import logoC3 from '../../../assets/logoC3.png'
import USP from '../../../assets/USP.png'

const CardCoursers = () => {
  return (

    <GridItemsContainer container xs={12}>

      <GridItem item xs={12} sm={6} md={4}>
        <divContainer>
        <PaperItem>

          <CardContainer>
            <CardActionArea>
              <CardImage image={logoRN} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h3">
                  React.js Ninja - React Completo
                    </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Curso disponibilizado pelo dev Fernando Daciuk na plataforma Udemy. Foca em capacitar
                  o aluno a atuar no mercado de trabalho utilizando React. O curso tem duração de cerca 80 horas,
                  e é divido em 4 módulos, durante os quais são realizados projetos completos.
                    </Typography>
              </CardContent>
            </CardActionArea>

            <CardButton>
              <ExternalLink target="_blank" href="https://github.com/ChristopherHauschild/curso-react-ninja">
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
              <CardImage image={logoC3} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Web Moderno com JavaScript 2020 Completo + Projetos
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Disponibilizado pela plataform Cod3r, tem duração de mais de 75 horas e foca em capacitar o aluno
                  a atuar como dev Web Full Stack, apresentando as principais tecnologias do mercado.
                    </Typography>
              </CardContent>
            </CardActionArea>

            <CardButton>
              <ExternalLink target="_blank" href="https://github.com/ChristopherHauschild/curso-web-moderno-cod3r">
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
              <CardImage image={USP} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Introdução à Ciência da Computação com Python
                    </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Curso disponibilizado pela USP na plataforma Coursera, foca em criar uma base sólida de
                  Python, além de introduzir o aluno à Ciência da Computação. Conta com mais de 30 horaas de conteúdo.
                    </Typography>
              </CardContent>
            </CardActionArea>

            <CardButton>
              <ExternalLink target="_blank" href="https://github.com/ChristopherHauschild/intro-to-computer-science-with-python">
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
  && {
    background: red;
    margin: 5px 0px;
    height: 100%;
  }
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

const ButtonRepo = styled(Button)`
`

export default CardCoursers
