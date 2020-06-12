import React from 'react'
import styled from 'styled-components'
import {
  Avatar,
  Grid,
  Paper,
  Typography,
  Divider
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

import html from '../../../assets/html.png'
import css from '../../../assets/css.png'
import js from '../../../assets/js.png'
import java from '../../../assets/java2.png'
import react from '../../../assets/react.png'
import node from '../../../assets/node.png'
import vue from '../../../assets/vue.png'
import mongo from '../../../assets/mongo.png'

const Skills = () => {
  return (
    <GridSkills container>
      <PaperContainer>
        <TitleSkills>
          Skills
        </TitleSkills>

        <DividerSkills />

        <GridContainer container>
          
          <GridItemContainer item container xs={12} sm={6} md={3}>
            <PaperContent>
              <GridItemImage>
                <SkillIcon variant="square" src={html} />
              </GridItemImage>
              <GridItemDescription xs={7}>
                <Rating name="read-only" value={5} readOnly size="large"/>
              </GridItemDescription>
            </PaperContent>
          </GridItemContainer>
          
          <GridItemContainer item container xs={12} sm={6} md={3}>
            <PaperContent>
              <GridItemImage>
                <SkillIcon variant="square" src={css}/>
              </GridItemImage>
              <GridItemDescription xs={7}>
                <Rating name="read-only" value={5} readOnly size="large"/>
              </GridItemDescription>
            </PaperContent>
          </GridItemContainer>

          <GridItemContainer item container xs={12} sm={6} md={3}>
            <PaperContent>
              <GridItemImage>
                <SkillIcon variant="square" src={js} />
              </GridItemImage>
              <GridItemDescription xs={7}>
                <Rating name="read-only" value={5} readOnly size="large"/>
              </GridItemDescription>
            </PaperContent>
          </GridItemContainer>

          <GridItemContainer item container xs={12} sm={6} md={3}>
            <PaperContent>
              <GridItemImage>
                <SkillIcon variant="square" src={java} />
              </GridItemImage>
              <GridItemDescription xs={7}>
                <Rating name="read-only" value={5} readOnly size="large"/>
              </GridItemDescription>
            </PaperContent>
          </GridItemContainer>

          <GridItemContainer item container xs={12} sm={6} md={3}>
            <PaperContent>
              <GridItemImage>
                <SkillIcon variant="square" src={react} />
              </GridItemImage>
              <GridItemDescription xs={7}>
                <Rating name="read-only" value={4} readOnly size="large"/>
              </GridItemDescription>
            </PaperContent>
          </GridItemContainer>
          
          <GridItemContainer item container xs={12} sm={6} md={3}>
            <PaperContent>
              <GridItemImage>
                <SkillIcon variant="square" src={node}/>
              </GridItemImage>
              <GridItemDescription xs={7}>
                <Rating name="read-only" value={4} readOnly size="large"/>
              </GridItemDescription>
            </PaperContent>
          </GridItemContainer>

          <GridItemContainer item container xs={12} sm={6} md={3}>
            <PaperContent>
              <GridItemImage>
                <SkillIcon variant="square" src={vue} />
              </GridItemImage>
              <GridItemDescription xs={7}>
                <Rating name="read-only" value={3} readOnly size="large"/>
              </GridItemDescription>
            </PaperContent>
          </GridItemContainer>

          <GridItemContainer item container xs={12} sm={6} md={3}>
            <PaperContent>
              <GridItemImage>
                <SkillIcon variant="square" src={mongo} />
              </GridItemImage>
              <GridItemDescription xs={7}>
                <Rating name="read-only" value={3} readOnly size="large"/>
              </GridItemDescription>
            </PaperContent>
          </GridItemContainer>
        
        </GridContainer>
      </PaperContainer>
    </GridSkills>
  )
}

const GridContainer = styled(Grid)`
  && {
    display: flex;
    box-sizing: border-box;
  }
`

const GridSkills = styled(Grid)`
  && {
    margin: 30px 0px;
  }
`

const PaperContainer = styled(Paper)`
  && {
    padding: 10px;
    width: 100%;
  }
`

const TitleSkills = styled(Typography).attrs({
  variant: 'h5'
})`
  && {
    font-size: 2.3rem;
    font-weight: 400;
    color: #ff7a05;
    text-align: center;
  
    @media only screen and (max-width:600px) {
      font-size: 1.75rem;
    }
  }
`

const DividerSkills = styled(Divider)`
  && {
    margin: 14px 20px;
    margin-top: 8px;
  }
`

const GridItemContainer = styled(Grid)`
  && {
    background: #efefef;
    margin-bottom: 10px;
    height: 220px;
    padding: 10px;
  }
`

const PaperContent = styled(Paper)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`

const GridItemImage = styled(Grid)`
  && {
    margin: 15px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 150px;
  }
`

const GridItemDescription = styled(Grid)`
`

const SkillIcon = styled(Avatar)`
  && {
    height: 120px;
    width: 120px;
  }
`

export default Skills