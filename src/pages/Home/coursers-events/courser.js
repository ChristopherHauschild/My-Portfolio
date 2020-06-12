import React from 'react'
import styled from 'styled-components'
import {
  Grid,
  Typography,
  Divider,
  Paper
} from '@material-ui/core'

import Cards from './cards-coursers.js'

const Courser = () => {
  return (
    <Grid container xs={12}>
      <PaperContainer>

        <GridTitle item xs={12}>
          <TypographyTitle>Cursos e Certificações</TypographyTitle>
          <DividerTitle />
        </GridTitle>

        <Cards />

      </PaperContainer>
    </Grid>
  )
}

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

const DividerTitle = styled(Divider)``

export default Courser
