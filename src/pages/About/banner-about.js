import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'


import banner from '../../assets/banner-about.jpg'

const BannerAbout = () => {
  return (
    <Banner>
      <Title variant="h2">
        QUEM <Through><i>SOMOS</i></Through> SOU
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
  width: 100%;

  @media only screen and (max-width:680px) {
    height: 310px;
  }

  overflow-wrap: break-word;

  box-shadow: inset 0 0 0, 0 0 0.6em #0009;
`

const Title = styled(Typography)`
  && {
    display: flex;
    margin-top: 150px;

    font-weight: bold;
    color: #ff7a05;
    overflow: hidden;

    @media only screen and (max-width:680px) {
      font-size: 2.6rem;
      margin-top: 108px;
    }

    @media only screen and (max-width:580px) {
      font-size: 2.45rem;
      margin-top: 108px;
    }
  }
`

const Through = styled.span`
  text-decoration: line-through;
  margin: 0px 15px;
  color: rgba(85,85,85, 0.87);
`

export default BannerAbout