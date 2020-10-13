import React from "react";
import styled from "styled-components";
import { Typography, Grid, Paper, Divider } from "@material-ui/core";

import CakeIcon from "@material-ui/icons/Cake";
import PublicIcon from "@material-ui/icons/Public";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import CodeIcon from "@material-ui/icons/Code";
import DevicesIcon from "@material-ui/icons/Devices";
import TodayIcon from "@material-ui/icons/Today";
import StyleIcon from "@material-ui/icons/Style";

import user from "../../assets/user.jpg";

const About = () => {
  return (
    <GridContainerExternal container>
      <GridContainer item xs={12}>
        <Paper style={{ padding: 20 }} elevation={3} variant="contained">
          <TitleAboutMe>Sobre mim</TitleAboutMe>

          <Divider />

          <GridAboutMeItems container item xs={12}>
            <GridImage container item sm={12} md={4}>
              <PaperImage elevation={3} />
            </GridImage>

            <GridDescription container item sm={12} md={8}>
              <PaperDescription>
                <TypographyDescriptionTitle>
                  Christopher Hauschild Schott
                </TypographyDescriptionTitle>

                <Divider />

                <TypographyDescriptionBirthday>
                  <ContainerDescription>
                    <IconItem>
                      <TrackIconDescription />
                      <Data>
                        <i>Focusing</i>
                      </Data>
                    </IconItem>

                    <IconItem>
                      <CakeIconDescription />
                      <Data>
                        <i>17/05/2001</i>
                      </Data>
                    </IconItem>

                    <IconItem>
                      <PublicIconDescription />
                      <Data>
                        <i>Rio Grande do Sul, Brasil</i>
                      </Data>
                    </IconItem>
                  </ContainerDescription>
                </TypographyDescriptionBirthday>

                <TypographyDescriptionContent>
                  <b>Considerações:</b> apaixonado pelo conhecimento, busco
                  sempre me aprimorar e expandir minhas fronteiras, seja através
                  de cursos, livros ou me arriscando em projeto pessoais, como
                  este. Há alguns anos tenho desenvolvido uma base forte nas
                  tecnologias padrões do desenvolvimento web (
                  <i>HTML, CSS e Javascript</i>), e por conta disso decidir dar
                  um passo além e desde então me tornei um entusiasta das novas
                  tecnologias, correndo atrás para estar sempre por dentro das
                  novidades mais quentes. Ando sempre acompanhado de muito café
                  e determinação.
                </TypographyDescriptionContent>
              </PaperDescription>
            </GridDescription>
          </GridAboutMeItems>
        </Paper>
      </GridContainer>

      <GridContainer item xs={12}>
        <Paper style={{ padding: 20 }} elevation={3} variant="contained">
          <TitleSite>Sobre o Site</TitleSite>

          <Divider />

          <GridAboutMeItems container item xs={12}>
            <GridImageSite container item xs={12}>
              <PaperImageSite elevation={3}>
                <TypographySite>
                  <OrangeHash>#</OrangeHash>Christopher Schott
                </TypographySite>
              </PaperImageSite>
            </GridImageSite>

            <GridDescriptionSite container item xs={12}>
              <PaperDescription>
                <TypographyDescriptionSite>
                  <ContainerDescriptionSite>
                    <IconItem>
                      <CodeIconDescription />
                      <Data>
                        <i>React</i>
                      </Data>
                    </IconItem>

                    <IconItem>
                      <DevicesIconDescription />
                      <Data>
                        <i>Responsivo</i>
                      </Data>
                    </IconItem>

                    <IconItem>
                      <StyleIconDescription />
                      <Data>
                        <i>Material UI</i>
                      </Data>
                    </IconItem>

                    <IconItem>
                      <TodayIconDescription />
                      <Data>
                        <i>Junho de 2020</i>
                      </Data>
                    </IconItem>
                  </ContainerDescriptionSite>
                </TypographyDescriptionSite>

                <Divider />

                <TypographyDescriptionContent>
                  O presente site foi desenvolvido em React juntamente ao
                  Material UI e styled-components, e surgiu da necessidade que
                  encontrei de disponibilizar em algum outro local um pouco
                  sobre o meu contato com o mundo da programação. Fora isso, se
                  apresentou como um ótimo exercício para firmar meus
                  conhecimentos e habilidades, além é claro, de agregar novos
                  aprendizados. <br /> <br />
                  <i>Última atualização em 12/10/2020</i>
                </TypographyDescriptionContent>
              </PaperDescription>
            </GridDescriptionSite>
          </GridAboutMeItems>
        </Paper>
      </GridContainer>
    </GridContainerExternal>
  );
};

const GridContainerExternal = styled(Grid)`
  && {
    display: flex;
    box-sizing: border-box;
    background: none;
    box-shadow: none;

    margin: 0px auto 60px;
    max-width: 1280px;
  }
`;

const GridContainer = styled(Grid)`
  && {
    margin: 0px 20px;
    margin-top: 45px;
  }
`;

const ContainerDescription = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 600px) {
    margin-top: 8px;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 720px) {
    margin-bottom: 18px;
  }
`;

const ContainerDescriptionSite = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 700px) {
    margin-top: 8px;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 720px) {
    margin-bottom: 18px;
  }
`;

const IconItem = styled.div`
  display: flex;
  align-items: center;
`;

const GridAboutMeItems = styled(Grid)`
  && {
    margin-top: 20px;
  }
`;

const TitleAboutMe = styled(Typography).attrs({
  variant: "h5",
})`
  && {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 8px;
    color: #ff7a05;

    @media only screen and (max-width: 600px) {
      font-size: 1.9rem;
      text-align: center;
    }
  }
`;

const TitleSite = styled(Typography).attrs({
  variant: "h5",
})`
  && {
    font-size: 2.2rem;
    font-weight: 400;
    margin-bottom: 8px;
    color: #ff7a05;
    text-align: center;

    @media only screen and (max-width: 600px) {
      font-size: 2rem;
    }
  }
`;

const GridImage = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;

    height: auto;
    padding: 10px;
    margin: 5px 0px;

    border-radius: 2px;
    background: #efefef;
  }
`;

const GridImageSite = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 5px 0px;
    padding: 10px;
    border-radius: 2px;
    height: auto;
  }
`;

const PaperImage = styled(Paper)`
  && {
    padding: 15px;
    height: 290px;
    width: 290px;
    background: url(${user});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }
`;

const PaperImageSite = styled(Paper)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 200px;

    padding: 15px;
    background: linear-gradient(
      0deg,
      rgba(70, 70, 70, 1) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;

const TypographySite = styled(Typography).attrs({
  variant: "h5",
})`
  && {
    font-size: 2.5rem;
    color: #fff;

    @media only screen and (max-width: 600px) {
      font-size: 1.8rem;
    }
  }
`;

const OrangeHash = styled.span`
  color: #ff7a05;
  margin-right: 3px;
`;

const GridDescription = styled(Grid)`
  && {
    display: flex;
    justify-content: center;

    margin: 5px 0px;
    padding: 10px;
    background: #efefef;

    @media only screen and (min-width: 1000px) {
      padding-right: 35px;
    }
  }
`;

const GridDescriptionSite = styled(Grid)`
  && {
    display: flex;
    justify-content: center;

    margin: 5px 0px;
    padding: 10px;
    background: #efefef;
  }
`;

const PaperDescription = styled(Paper)`
  && {
    padding: 10px;
    height: auto;
    width: 100%;

    @media only screen and (max-width: 600px) {
      padding: 12px;
    }
  }
`;
const TypographyDescriptionTitle = styled(Typography).attrs({
  variant: "h6",
})`
  && {
    font-size: 1.6rem;
    font-weight: 500;
    margin-top: 5px;
    margin-bottom: 10px;
    padding-left: 5px;

    @media only screen and (max-width: 600px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;

const TypographyDescriptionContent = styled(Typography)`
  && {
    margin: 10px 5px;

    @media only screen and (max-width: 600px) {
      margin-top: 8px;
      text-align: center;
    }
  }
`;

const TypographyDescriptionBirthday = styled(Typography)`
  && {
    display: flex;

    margin: 5px;
    margin-top: 8px;
    margin-bottom: 10px;
    padding: 5px;
  }
`;

const TypographyDescriptionSite = styled(Typography)`
  && {
    display: flex;

    margin: 5px;
    margin-top: 8px;
    margin-bottom: 10px;
    padding: 5px;
  }
`;

const CakeIconDescription = styled(CakeIcon)`
  && {
    margin-right: 8px;
    margin-bottom: 3px;
    color: darkred;

    @media only screen and (max-width: 600px) {
      font-size: 1.8rem;
      margin-bottom: 8px;
    }
  }
`;

const PublicIconDescription = styled(PublicIcon)`
  && {
    margin-right: 8px;
    margin-bottom: 3px;
    color: darkred;

    @media only screen and (max-width: 600px) {
      font-size: 1.8rem;
      margin-bottom: 8px;
    }
  }
`;

const TrackIconDescription = styled(TrackChangesIcon)`
  && {
    margin-right: 8px;
    margin-bottom: 3px;
    color: darkred;

    @media only screen and (max-width: 600px) {
      font-size: 1.8rem;
      margin-bottom: 8px;
    }
  }
`;

const CodeIconDescription = styled(CodeIcon)`
  && {
    margin-right: 8px;
    margin-bottom: 3px;
    color: darkred;

    @media only screen and (max-width: 600px) {
      font-size: 1.8rem;
      margin-bottom: 8px;
    }
  }
`;

const DevicesIconDescription = styled(DevicesIcon)`
  && {
    margin-right: 8px;
    margin-bottom: 3px;
    color: darkred;

    @media only screen and (max-width: 600px) {
      font-size: 1.8rem;
      margin-bottom: 8px;
    }
  }
`;

const TodayIconDescription = styled(TodayIcon)`
  && {
    margin-right: 8px;
    margin-bottom: 3px;
    color: darkred;

    @media only screen and (max-width: 600px) {
      font-size: 1.8rem;
      margin-bottom: 8px;
    }
  }
`;

const StyleIconDescription = styled(StyleIcon)`
  && {
    margin-right: 8px;
    margin-bottom: 3px;
    color: darkred;

    @media only screen and (max-width: 600px) {
      font-size: 1.8rem;
      margin-bottom: 8px;
    }
  }
`;

const Data = styled.span`
  font-size: 1.2rem;
`;

export default About;
