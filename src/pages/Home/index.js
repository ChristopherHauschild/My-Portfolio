import React from 'react'
import styled from 'styled-components'
import Content from './content'
import BannerMain from './banner-main'

const Home = () => {
  return (
    <Container>
      <BannerMain />
      <Content />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

`


export default Home
