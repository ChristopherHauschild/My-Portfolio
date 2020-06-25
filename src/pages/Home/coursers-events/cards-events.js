import React from 'react'
import styled from 'styled-components'
import {
  Grid,
  Typography,
  Paper,
  Button,
  Card, CardActionArea, CardActions, CardContent, CardMedia
} from '@material-ui/core'

const CardEvents = (props) => {
  const { image, title, content, linkButton } = props

  return (
    <GridItem item xs={12} sm={6} md={4}>
      <divContainer>
        <PaperItem>
          <CardContainer>
            <CardActionArea>
              <CardImage image={image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {content}
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardButton>
              <ExternalLink target="_blank" href={linkButton}>
                <ButtonRepo size="small" color="primary">
                  Repositório
                </ButtonRepo>
              </ExternalLink>
            </CardButton>
          </CardContainer>

        </PaperItem>
      </divContainer>
    </GridItem>
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
