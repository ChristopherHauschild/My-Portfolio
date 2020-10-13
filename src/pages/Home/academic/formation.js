import React from "react";
import styled from "styled-components";
import { Typography, Grid, Paper, Divider } from "@material-ui/core";
import TodayIcon from "@material-ui/icons/Today";

import logo from "../../../assets/logoIf2.jpg";
import logoIgti from "../../../assets/logoIgti.png";
import logoRocketseat from "../../../assets/rocketseat.png";

import ButtonIf from "./button-if";
import ButtonIgti from "./button-igti";
import ButtonRocketseat from "./button-rocketseat";

const Formation = () => {
  return (
    <Grid container spacing={2} style={{ marginBottom: 25 }}>
      <Grid item xs={12}>
        <Paper style={{ padding: 20 }} elevation={3} variant="contained">
          <TitleFormation>Formação Acadêmica</TitleFormation>

          <Divider />

          <GridFormationItems container item xs={12}>
            <GridImage container item sm={12} md={3}>
              <PaperImageIf elevation={3} />
            </GridImage>

            <GridDescription container item sm={12} md={9}>
              <PaperDescription>
                <TypographyDescriptionTitle>
                  Instituto Federal de Educação, Ciência e Tecnologia
                  Sul-rio-grandense
                </TypographyDescriptionTitle>

                <Divider />

                <TypographyDescriptionContent>
                  <b>Curso técnico em Informática:</b> integrado ao Ensino
                  Médio, o curso tem duração de 04 anos, e visa capacitar o
                  aluno à atuar no mercado de trabalho. Para isso, conta com um
                  corpo discente de profissionais mais do que capacitados e uma
                  estrutura completa, com todo material técnico necessário.
                </TypographyDescriptionContent>

                <TypographyDescriptionCalendary>
                  <ContainerDescription>
                    <TodayIconDescription />
                    <StrongDescription>Início:</StrongDescription> fevereiro de
                    2017{" "}
                    <StrongDescription style={{ marginLeft: 10 }}>
                      Fim:
                    </StrongDescription>{" "}
                    dezembro de 2020
                  </ContainerDescription>

                  <ButtonIf />
                </TypographyDescriptionCalendary>
              </PaperDescription>
            </GridDescription>
          </GridFormationItems>

          <GridFormationItems container item xs={12}>
            <GridImage container item sm={12} md={3}>
              <PaperImageIgti elevation={3} />
            </GridImage>

            <GridDescription container item sm={12} md={9}>
              <PaperDescription>
                <TypographyDescriptionTitle>
                  Instituto de Gestão e Tecnologia da Informação
                </TypographyDescriptionTitle>

                <Divider />

                <TypographyDescriptionContent>
                  <b>Bootcamp Desenvolvimento Full Stack:</b> com duração de
                  cerca de 148 horas, divididas em 2 meses e meio, o programa
                  oferecido pelo IGTI tem por finalidade capacitar o aluno à
                  atuar como dev Full Stack. Para isso, cada módulo tem um
                  enfoque específico, assim como aulas interativas e fóruns que
                  auxiliam os alunos na resolução de qualquer dúvidas que possa
                  vir a surgir.
                </TypographyDescriptionContent>

                <TypographyDescriptionCalendary>
                  <ContainerDescription>
                    <TodayIconDescription />
                    <StrongDescription>Início:</StrongDescription> abril de 2020{" "}
                    <StrongDescription style={{ marginLeft: 10 }}>
                      Fim:
                    </StrongDescription>{" "}
                    julho de 2020
                  </ContainerDescription>

                  <ButtonIgti />
                </TypographyDescriptionCalendary>
              </PaperDescription>
            </GridDescription>
          </GridFormationItems>

          <GridFormationItems container item xs={12}>
            <GridImage container item sm={12} md={3}>
              <PaperImageRocketseat elevation={3} />
            </GridImage>

            <GridDescription container item sm={12} md={9}>
              <PaperDescription>
                <TypographyDescriptionTitle>
                  Rocketseat
                </TypographyDescriptionTitle>

                <Divider />

                <TypographyDescriptionContent>
                  <b>Bootcamp GoStack:</b> Bootcamp online, prático e imersivo
                  que ensina do zero ao deploy todo o ecossistema da stack
                  NodeJS, ReactJS e React Native, indo direto ao ponto naquilo
                  que realmente importa, para te deixar pronto para o mercado de
                  trabalho. Incluindo testes automatizados, integração contínua,
                  publicação nas stores, e todas as biliotecas e frameworks
                  importantes para quem deseja ficar pronto para os desafios do
                  mundo real e se destacar no mercado de trabalho.
                </TypographyDescriptionContent>

                <TypographyDescriptionCalendary>
                  <ContainerDescription>
                    <TodayIconDescription />
                    <StrongDescription>Início:</StrongDescription> agosto de
                    2020{" "}
                    <StrongDescription style={{ marginLeft: 10 }}>
                      Fim:
                    </StrongDescription>{" "}
                    outubro de 2020
                  </ContainerDescription>

                  <ButtonRocketseat />
                </TypographyDescriptionCalendary>
              </PaperDescription>
            </GridDescription>
          </GridFormationItems>
        </Paper>
      </Grid>
    </Grid>
  );
};

const ContainerDescription = styled.div`
  display: flex;

  @media only screen and (max-width: 600px) {
    margin-top: 8px;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 720px) {
    margin-bottom: 18px;
  }
`;

const GridFormationItems = styled(Grid)`
  && {
    margin-top: 20px;
  }
`;

const TitleFormation = styled(Typography).attrs({
  variant: "h5",
})`
  && {
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 8px;
    color: #ff7a05;

    @media only screen and (max-width: 600px) {
      font-size: 1.6rem;
      text-align: center;
    }
  }
`;

const GridImage = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px;
    margin: 5px 0px;

    border-radius: 2px;
    background: #efefef;
  }
`;
const PaperImageIf = styled(Paper)`
  && {
    padding: 15px;
    height: 160px;
    width: 160px;
    background: url(${logo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }
`;

const PaperImageIgti = styled(Paper)`
  && {
    padding: 15px;
    height: 160px;
    width: 160px;
    background: url(${logoIgti});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }
`;

const PaperImageRocketseat = styled(Paper)`
  && {
    padding: 15px;
    height: 160px;
    width: 160px;
    background: url(${logoRocketseat});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }
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
    font-weight: bold;
    margin-bottom: 5px;
    padding-left: 5px;

    @media only screen and (max-width: 600px) {
      font-size: 1.2rem;
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

const TypographyDescriptionCalendary = styled(Typography)`
  && {
    display: flex;
    @media only screen and (min-width: 650px) {
      justify-content: space-between;
    }

    margin: 5px;
    margin-top: 8px;
    margin-bottom: 10px;
    padding: 5px;

    @media only screen and (max-width: 720px) {
      margin-top: 8px;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const StrongDescription = styled.strong`
  margin: 0px 7px;
`;

const TodayIconDescription = styled(TodayIcon)`
  && {
    margin-right: 6px;
    margin-bottom: 3px;
    color: darkred;

    @media only screen and (max-width: 600px) {
      font-size: 2.2rem;
      margin-bottom: 10px;
    }
  }
`;

export default Formation;
