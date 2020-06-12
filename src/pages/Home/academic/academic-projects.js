import React, { useState } from 'react'
import styled from 'styled-components'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Divider,
  Typography,
  Grid,
  Paper
} from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import TodayIcon from '@material-ui/icons/Today'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'

import logo from '../../../assets/project.png'

const AcademicProjects = () => {
  const [expanded, setExpanded] = useState('')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <ExpansionContainer square expanded={expanded === 'panel'} onChange={handleChange('panel')}>

        <ExpansionPanelSummary>
          <TitleContainer>
            <ContainerTitle>
              <Title>Projetos Acadêmicos</Title>
              {expanded === 'panel' ? <ArrowUp /> : <ArrowDown />}
            </ContainerTitle>
            <Divider />
          </TitleContainer>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <Grid container spacing={2} style={{ marginBottom: 25 }}>
            <Grid item xs={12}>

                <GridFormationItems container item xs={12}>
                  <GridImage container item sm={12} md={12}>
                    <Logo />
                  </GridImage>

                  <GridDescription container item sm={12} md={12}>
                    <PaperDescription>

                      <TypographyContainer>

                        <TypographyLocation>
                          <Location />
                          ONG Paresp
                        </TypographyLocation>

                        <TypographyDate>
                          <Date />
                          abril de 2019 até junho de 2019
                        </TypographyDate>

                        <TypographyPeoples>
                          <Peoples />
                          faixa etária de 08 a 12 anos
                        </TypographyPeoples>
                      </TypographyContainer>

                      <Divider />

                      <TypographyDescriptionContent>
                        <b>Descrição:</b> o projeto teve como objetivo integrar os alunos, em situação de vulnerabilidade, ao mundo da Informática,
                        promovendo atividades que abordavam, entre outras coisas, os componentes de um computador e seu funcionamento, a navegação segura na web
                        e a elaboração de documentos no Word e Power Point. A fim de desenvoler a capacidade lógica e cognitiva dos alunos, o projeto teve como
                        base o desenvolvimento de games utilizando blocos de comandos lógicos a partir da plataforma <i>Code.org</i>. <br/><br/>
                        <b>Contexto:</b> o projeto foi desenvolvido junto à dois colegas por meio da displina de Prática de Extensão,
                        ministrada durante o 3° ano do curso técnico integrado em Informática, no Instituto Federal de Educação,
                        Ciência e Tecnologia.
                      </TypographyDescriptionContent>
                    </PaperDescription>
                  </GridDescription>

                </GridFormationItems>

            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionContainer>
    </>
  )
}

const ExpansionContainer = styled(ExpansionPanel)`
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;
  width: 100%;
`

const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
`

const ArrowDown = styled(KeyboardArrowDownIcon)`
  && {
    font-size: 2.2rem;
  }
`

const ArrowUp = styled(KeyboardArrowUpIcon)`
  && {
    font-size: 2.2rem;
  }
`

const Title = styled(Typography).attrs({
  variant: 'h5'
})`
  && {
    font-size: 1.75rem;
    font-weight: 400;
    margin-bottom: 8px;
    color: #ff7a05;
  
    @media only screen and (max-width:600px) {
      font-size: 1.45rem;
    }
  }
`

const GridFormationItems = styled(Grid)`
`

const GridImage = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0px 0px;
    padding: 0px;
  }
`

const Logo = styled.div`
  width: 100%;
  height: 400px;
  background: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
`

const GridDescription = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
  
    margin-top: 0px;
    margin-bottom: 5px;
    padding: 10px;
    background: #efefef;
  }
`

const PaperDescription = styled(Paper)`
  && {
    padding: 10px;
    height: auto;
    width: 100%;
    
    @media only screen and (max-width:600px) {
      padding: 12px;
    }
  }
`

const TypographyContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

const TypographyLocation = styled(Typography)`
  && {
    display: flex;
    align-items: center;

    margin-bottom: 10px;
    padding-left: 5px;
    font-size: 1.3rem;

    @media only screen and (max-width:600px) {
      font-size: 1rem;
    }
  }
`
const Location = styled(LocationOnIcon)`
  && {
    margin-right: 8px;
  }
`

const TypographyDate = styled(Typography)`
  && {
    display: flex;
    align-items: center;

    margin-bottom: 10px;
    padding-left: 5px;
    font-size: 1.2rem;

    @media only screen and (max-width:600px) {
      font-size: 1rem;
    }
  }
`
const Date = styled(TodayIcon)`
  && {
    margin-right: 8px;
  }
`

const TypographyPeoples = styled(Typography)`
  && {
    display: flex;
    align-items: center;

    margin-bottom: 10px;
    padding-left: 5px;
    font-size: 1.2rem;

    @media only screen and (max-width:600px) {
      font-size: 1rem;
    }
  }
`
const Peoples = styled(PeopleAltIcon)`
  && {
    margin-right: 8px;
  }
`


const TypographyDescriptionContent = styled(Typography)`
  && {
    margin: 10px 5px;

    @media only screen and (max-width:600px) {
      margin-top: 8px;
      text-align: center;
    }
  }
`


export default AcademicProjects