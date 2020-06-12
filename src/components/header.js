import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Hidden,
  Menu,
  MenuItem
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import InfoIcon from '@material-ui/icons/Info'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import GitHubIcon from '@material-ui/icons/GitHub'

const Header = () => {
  const [visibleMenu, setVisibleMenu] = useState(null)
  const [changeHeaderColor, setChangeHeaderColor] = useState(false)

  useEffect(() => {
    window.onscroll = () => {
      const changeWindow = document.documentElement.scrollTop

      if (changeWindow > 480) {
        setChangeHeaderColor(true)
      } else if (changeWindow < 480) {
        setChangeHeaderColor(false)
      }

    }
  }, [])

  const handleOpenMenu = (event) => {
    setVisibleMenu(event.currentTarget)
    setChangeHeaderColor(true)
  }

  const handleClose = () => {
    setVisibleMenu(null)

    const changeWindow = document.documentElement.scrollTop
    if (changeWindow < 480) {
      setChangeHeaderColor(false)
    }

  }

  const handleChangeColor = () => {
    if (changeHeaderColor) {
      return '#1d1921'
    } else {
      return '#0002'
    }

  }

  return (
    <>
      <HeaderContainer style={{ backgroundColor: handleChangeColor() }}>
        <HeaderMain>
          <Hidden mdUp>
            <MenuContainer>
              <HeaderMenuControl aria-controls="simple-menu" aria-haspopup="true" onClick={handleOpenMenu} />
              <MenuContent>
                <HeaderMenuContent
                  anchorEl={visibleMenu}
                  open={Boolean(visibleMenu)}
                  onClose={handleClose}
                >

                  <MenuLink to='/about' onClick={handleClose}>
                    <MenuLinkAbout />
                    <MenuLinkText>Sobre</MenuLinkText>
                  </MenuLink>

                  <MenuLink to='/contact' onClick={handleClose}>
                    <MenuLinkContact />
                    <MenuLinkText>Contato</MenuLinkText>
                  </MenuLink>

                  {/*eslint-disable-next-line*/}
                  <ExternalLink target="_blank" href="https://github.com/ChristopherHauschild/my-portfolio">
                    <MenuLinkCodeComponent onClick={handleClose}>
                      <MenuLinkCode />
                      <MenuLinkText>Código</MenuLinkText>
                    </MenuLinkCodeComponent>
                  </ExternalLink>

                  <MenuLinkLogo to='/' onClick={handleClose}>
                    <LogoMenu>
                      <OrangeHashMenu>#</OrangeHashMenu>Christopher Schott
                    </LogoMenu>
                  </MenuLinkLogo>

                </HeaderMenuContent>
              </MenuContent>
            </MenuContainer>
          </Hidden>


          <Hidden smDown>
            <Logo>
              <OrangeHash>#</OrangeHash>Christopher Schott
          </Logo>

            <About>
              <ButtonAbout>
                <AboutIcon />
                <TextHeader>Sobre</TextHeader>
              </ButtonAbout>
            </About>

            <Contact>
              <ButtonContact>
                <ContactIcon />
                <TextHeader>Contato</TextHeader>
              </ButtonContact>
            </Contact>

            {/*eslint-disable-next-line*/}
            <ExternalLink target="_blank" href="https://github.com/ChristopherHauschild/Portfolio">
              <Code>
                <ButtonCode>
                  <CodeIcon />
                  <TextHeader>Código</TextHeader>
                </ButtonCode>
              </Code>
            </ExternalLink>
          </Hidden>
        </HeaderMain>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled(AppBar)`
  display: flex;
  align-items: center;
  padding: 0px 20px;

  && {
    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    min-height: 64px;
    box-shadow: none;
  }
`

const HeaderMain = styled(Toolbar)`
  && {
    display: flex;
    justify-content: space-between;

    width: 100%;
    min-height: 64px;
    max-width: 1100px;
  }
`

const OrangeHash = styled.span`
color: #ff7a05;
margin-right: 3px;
`

const Logo = styled(Typography).attrs({
  variant: 'h5',
  component: Link,
  to: '/'
})`
flex: 1;
color: #fff;
text-decoration: none;


&:hover span{
  color: #ff7a05;
  font-size: 1.7rem;
}
`

const OrangeHashMenu = styled.span`
  color: #ff7a05;
  margin-right: 3px;
`

const LogoMenu = styled(Typography).attrs({
  variant: 'h4',
  component: Link,
  to: '/'
})`
  flex: 1;
  color: #fff;
  text-decoration: none;

  &:hover span{
    color: #ff7a05;
    font-size: 2rem;
  }
`

const About = styled.div`
display: flex;
align-items: center;
`

const ButtonAbout = styled(IconButton).attrs({
  component: Link,
  to: '/about'
})`
  && {
    color: #fff;
  }

  &:hover {
    color: #ff7a05;
  }
`

const AboutIcon = styled(InfoIcon)`
  && {
    font-size: 1.5rem;
  }

  padding-right: 7px;
  `

const TextHeader = styled(Typography)`
  && {
    font-size: 1.18rem;
  }
  `

const Contact = styled.div`
display: flex;
  align-items: center;
`

const ButtonContact = styled(IconButton).attrs({
  component: Link,
  to: '/contact'
})`
&& {
  font-size: 1.25rem;
  color: #fff;
}

&:hover {
  color: #ff7a05;
}
`

const ContactIcon = styled(AssignmentIndIcon)`
padding-right: 7px;
`

const ExternalLink = styled.a`
text-decoration: none;
`

const Code = styled.div`
  display: flex;
  align-items: center;
  `

const ButtonCode = styled(IconButton)`
  && {
    font-size: 1.25rem;
    color: #fff;
  }
  
  &:hover {
    color: #ff7a05;
  }
`

const CodeIcon = styled(GitHubIcon)`
  padding-right: 7px;
  `
const HeaderMenuControl = styled(MenuIcon)`
    && {
      font-size: 2.2rem;
      margin-right: 8px;
      cursor: pointer;
    }
  `

const MenuContainer = styled.div``

const MenuContent = styled.div``

const HeaderMenuContent = styled(Menu)`
    & .MuiPaper-root {
      display: flex;
      justify-content: center;
      align-items: center;
  
      width: 100%;
      min-height: 90vh;
      border-radius: 0.5px;
      background: rgba(0, 0, 0, 0.87);
    }
  
    && {
      margin-top: 45px;
    }
  `

const MenuLink = styled(MenuItem).attrs({
  component: Link
})`
    && {
      display: flex;
      justify-content: center;
      align-items: center;
  
      font-size: 1.6rem;
      padding: 5px 80px;
      margin-bottom: 20px;
      color: #fff;
    }
  
    &&:hover {
      color: #ff7a05;
      background: white;
    }
  
    &&:active {
      color: #ff7a05;
      background: white;
    }
  `

  const MenuLinkLogo = styled(MenuItem).attrs({
    component: Link
  })`
      && {
        display: flex;
        justify-content: center;
        align-items: center;
    
        font-size: 1.6rem;
        padding: 5px 100px;
        margin-top: 50px;
        color: #fff;
      }
    `

const MenuLinkCodeComponent = styled(MenuItem)`
    && {
      display: flex;
      justify-content: center;
      align-items: center;
  
      font-size: 1.6rem;
      padding: 5px 130px;
      margin-bottom: 20px;
      color: #fff;
    }
  
    &&:hover {
      color: #ff7a05;
      background: white;
    }
  
    &&:active {
      color: #ff7a05;
      background: white;
    }
  `

const MenuLinkText = styled(Typography)`
    && {
      font-size: 1.6rem;
      font-weight: bold;
    }
  `

const MenuLinkAbout = styled(InfoIcon)`
    && {
      font-size: 1.7rem;
    }
  
    padding-right: 8px;
  `

const MenuLinkContact = styled(AssignmentIndIcon)`
    && {
      font-size: 1.7rem;
      padding-right: 9px;
    }  
  `
const MenuLinkCode = styled(GitHubIcon)`
    && {
      font-size: 1.7rem;
      padding-right: 9px;
    }  
  `
export default Header
