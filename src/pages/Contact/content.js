import React from 'react'
import styled from 'styled-components'
import {
  Avatar,
  Button,
  Grid,
  Paper,
  Typography,
  Divider
} from '@material-ui/core'
import ContactSupportIcon from '@material-ui/icons/ContactSupport'

import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import gmail from '../../assets/gmail.png'
import whats from '../../assets/whats.png'

const Contact = () => {
  return (
    <GridContacts container>
      <PaperContainer>
        <TitleContacts>
          Onde me Encontrar
          <ContactIcon />
        </TitleContacts>

        <DividerContacts />

        <GridContainer container>
          
          <GridItemContainer item container xs={12} sm={6} md={3}>
            <PaperContent>
              <GridItemImage>
                <SkillIcon variant="square" src={linkedin} />
              </GridItemImage>
              <GridItemDescription xs={12}>
                <ExternalLink target="_blank" href="https://www.linkedin.com/in/christopher-hauschild-a091871a4/">
                  <ButtonLink size="small" color="primary">
                    Visitar
                  </ButtonLink>
                </ExternalLink>
              </GridItemDescription>
            </PaperContent>
          </GridItemContainer>
          
          <GridItemContainer item container xs={12} sm={6} md={3}>
            <PaperContent>
              <GridItemImage>
                <SkillIcon variant="square" src={github}/>
              </GridItemImage>
              <GridItemDescription xs={12}>
                <ExternalLink target="_blank" href="https://github.com/ChristopherHauschild">
                  <ButtonLink size="small" color="primary">
                    Visitar
                  </ButtonLink>
                </ExternalLink>
              </GridItemDescription>
            </PaperContent>
          </GridItemContainer>

          <GridItemContainer item container xs={12} sm={6} md={3}>
            <PaperContent>
              <GridItemImage>
                <SkillIconEmail variant="square" src={gmail} />
              </GridItemImage>
              <GridItemDescription xs={12}>
                <TypographyItem>
                  chrishaus01@gmail.com
                </TypographyItem>
              </GridItemDescription>
            </PaperContent>
          </GridItemContainer>

          <GridItemContainer item container xs={12} sm={6} md={3}>
            <PaperContent>
              <GridItemImage>
                <SkillIcon variant="square" src={whats} />
              </GridItemImage>
              <GridItemDescription xs={12}>
                <TypographyItem>
                  (51) 99518 8985
                </TypographyItem>
              </GridItemDescription>
            </PaperContent>
          </GridItemContainer>

        </GridContainer>
      </PaperContainer>
    </GridContacts>
  )
}

const ExternalLink = styled.a`
  && {
    text-decoration: none;
  }
`

const GridContainer = styled(Grid)`
  && {
    display: flex;
    box-sizing: border-box;
    background: none;
    box-shadow: none;
  }
`

const GridContacts = styled(Grid)`
  && {
    margin-top: 30px;
    margin-bottom: 60px;
    background: none;
    box-shadow: none;
  }
`

const PaperContainer = styled(Paper)`
  && {
    padding: 10px;
    width: 100%;
    background: none;
    box-shadow: none;
  }
`

const TitleContacts = styled(Typography).attrs({
  variant: 'h5'
})`
  && {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 10px 0px;

    text-align: center;
    font-size: 2.4rem;
    font-weight: 400;
    color: #ff7a05;
  
    @media only screen and (max-width:600px) {
      font-size: 2rem;
    }
  }
`

const ContactIcon = styled(ContactSupportIcon)`
  && {
    font-size: 2.4rem;
    margin-left: 8px;

    @media only screen and (max-width:600px) {
      font-size: wrem;
    }
  }
`

const DividerContacts = styled(Divider)`
  && {
    margin: 14px 20px;
    margin-top: 8px;
  }
`

const GridItemContainer = styled(Grid)`
  && {
    background: none;
    margin-bottom: 10px;
    height: auto;
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
  && {
    display: flex;
    flex-wrap: wrap;
    overflow-wrap: break-word;
  }
`

const TypographyItem = styled(Typography)`
  && {
    padding: 0px 8px;
    padding-top: 15px;
    overflow: hidden;
    font-size: 1.4rem;
    font-weight: 400;
    text-align: center;
  }
`

const SkillIcon = styled(Avatar)`
  && {
    height: 120px;
    width: 120px;
  }
`

const SkillIconEmail = styled(Avatar)`
  && {
    height: 120px;
    width: 160px;
  }
`

const ButtonLink = styled(Button)`
  && {
    margin-top: 15px;
    font-size: 1.3rem;
  }
`

export default Contact