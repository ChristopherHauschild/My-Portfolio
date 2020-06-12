import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'


import banner from '../../assets/banner-about.jpg'

const BannerContact = () => {
  return (
    <Banner>
      <Title variant="h2">
        CONTATE-ME
      </Title>
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
  height: 400px;

  @media only screen and (max-width:680px) {
    height: 310px;
  }

  box-shadow: inset 0 0 0, 0 0 0.6em #0009;
`

const Title = styled(Typography)`
  && {
    display: flex;
    margin-top: 150px;
    padding: 15px 40px;

    font-weight: bold;
    color: #ff7a05;

    @media only screen and (max-width:680px) {
      font-size: 2.8rem;
      margin-top: 108px;
    }
  }
`

export default BannerContact