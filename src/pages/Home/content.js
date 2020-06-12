import React from 'react'
import styled from 'styled-components'

import Formation from './academic/formation'
import AcademicProjects from './academic/academic-projects'
import Work from './work/work'
import Courser from './coursers-events/courser'
import Event from './coursers-events/event'
import Skills from './skills/skills'

const Content = () => {
  return (
    <Container>
      <Formation />
      <AcademicProjects />
      <Work />
      <Courser />
      <Event />
      <Skills />
    
    </Container>
  )
}

const Container= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

export default Content