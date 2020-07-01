import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';

const Footer = () => {
  return (
    <Container bottom>
      <TypographyFooter>
        Desenvolvido com
        <Heart />
        por Christopher
      </TypographyFooter>
    </Container>
  )
}

const TypographyFooter = styled(Typography) `
  && {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    color: #fff;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60px;

  margin-bottom: 0px;
  margin-top: 15px;
  background: #1d1921;
`

const Heart = styled(FavoriteIcon)`
  && {
    color: red;
    margin: 0px 5px;
  }
`

export default Footer