import React from "react";
import styled from "styled-components";
import { Typography, Grid, Paper, Divider } from "@material-ui/core";

import ExploreIcon from "@material-ui/icons/Explore";
import TodayIcon from "@material-ui/icons/Today";

import EMEI from "../../../assets/EMEI.png";
import logyc from "../../../assets/logyc.png";
import cfa from "../../../assets/cfa.png";

import background from "../../../assets/banner4.jpg";

const Work = () => {
  return (
    <GridContainer container spacing={2} style={{ marginBottom: 25 }}>
      <Grid item xs={12}>
        <PaperContainer
          style={{ padding: 20 }}
          elevation={3}
          variant="contained"
        >
          <TitleWork>Experiência Profissional</TitleWork>

          <DividerUp />

          <GridWorkContainer container item xs={12}>
            <GridWorkItems container item sm={12} md={6}>
              <PaperWork>
                <ContainerImage>
                  <PaperImageEMEI />
                  <Divider />
                </ContainerImage>

                <ContainerDescription>
                  <TypographyWorkTitle>Secretário</TypographyWorkTitle>

                  <DividerTitle />

                  <ContentWork>
                    <TypographyWorkContent>
                      <ExploreIconWork />
                      EMEI Yolita da Cruz Portella
                    </TypographyWorkContent>

                    <TypographyWorkContent>
                      <TodayIconWork />
                      junho 2018 - janeiro 2019
                    </TypographyWorkContent>

                    <TypographyWorkContent>
                      <TypographyText>
                        <b>Descrição:</b> além do serviço de atendimento e
                        gerenciamento de papeladas, trabalhei com o pacote
                        Office na criação de planilhas e documentos, além de
                        utilizar o Sony Vegas e o Corel Drawn para a edição de
                        vídeos e imagens a serem utilizados em aula. O estágio
                        se deu a partir de um concurso realizado pela Prefeitura
                        de Venâncio Aires.
                      </TypographyText>
                    </TypographyWorkContent>
                  </ContentWork>
                </ContainerDescription>
              </PaperWork>
            </GridWorkItems>

            <GridWorkItems container item sm={12} md={6}>
              <PaperWork>
                <ContainerImage>
                  <PaperImageLogyc />
                  <Divider />
                </ContainerImage>

                <ContainerDescription>
                  <TypographyWorkTitle>
                    Assistente de Implantação
                  </TypographyWorkTitle>

                  <DividerTitle />

                  <ContentWork>
                    <TypographyWorkContent>
                      <ExploreIconWork />
                      Logycware Sistemas de Informática LTDA
                    </TypographyWorkContent>

                    <TypographyWorkContent>
                      <TodayIconWork />
                      janeiro 2020 - maio 2020
                    </TypographyWorkContent>

                    <TypographyWorkContent>
                      <TypographyText>
                        <b>Descrição:</b> atuei auxiliando o cliente, a partir
                        de treinamentos, no processo de implantação do software
                        da empresa, além de realizar configurações de NF's e
                        Integrações Bancárias. Produzi também, em texto e vídeo,
                        materiais informativos e manuais de uso do software. O
                        exercício das funções se deu a partir do estágio
                        obrigatório do IFSUL.
                      </TypographyText>
                    </TypographyWorkContent>
                  </ContentWork>
                </ContainerDescription>
              </PaperWork>
            </GridWorkItems>

            <GridWorkItems container item sm={12} md={12}>
              <PaperWorkCFA>
                <ContainerImageCFA>
                  <PaperImageCFA />
                </ContainerImageCFA>

                <ContainerDescriptionCAF>
                  <TypographyDescriptionTitle>
                    Back Office - Analista de Suporte
                  </TypographyDescriptionTitle>

                  <DividerTitle />

                  <ContentWork>
                    <InfoWork>
                      <TypographyWorkContent>
                        <ExploreIconWork />
                        Combate a Fraude
                      </TypographyWorkContent>

                      <TypographyWorkContent>
                        <TodayIconWork />
                        maio 2020 - agosto de 2020
                      </TypographyWorkContent>
                    </InfoWork>

                    <TypographyWorkContent>
                      <TypographyText>
                        <b>Descrição:</b> atuei no back office dando suporte ao
                        cliente no andamentos de documentos não interpretados
                        pela I.A, realizando quando necessário configurações no
                        server AWS. Auxilei também na produção de conteúdo sobre
                        a API e produtos desenvolvidos pela empresa.
                      </TypographyText>
                    </TypographyWorkContent>
                  </ContentWork>
                </ContainerDescriptionCAF>
              </PaperWorkCFA>
            </GridWorkItems>

            <GridWorkItems container item sm={12} md={12}>
              <PaperWorkCFA>
                <ContainerImageCFA>
                  <PaperImageCFA />
                </ContainerImageCFA>

                <ContainerDescriptionCAF>
                  <TypographyDescriptionTitle>
                    Desenvolvedor Frontend Pleno
                  </TypographyDescriptionTitle>

                  <DividerTitle />

                  <ContentWork>
                    <InfoWork>
                      <TypographyWorkContent>
                        <ExploreIconWork />
                        Combate a Fraude
                      </TypographyWorkContent>

                      <TypographyWorkContent>
                        <TodayIconWork />
                        agosto de 2020 - emprego atual
                      </TypographyWorkContent>
                    </InfoWork>

                    <TypographyWorkContent>
                      <TypographyText>
                        <b>Descrição:</b> atuo no desenvolvimento frontend de
                        aplicações para web, utilizando o ecossistema do React e
                        consumindo a API e demais serviços desenvolvidos pela
                        empresa.
                      </TypographyText>
                    </TypographyWorkContent>
                  </ContentWork>
                </ContainerDescriptionCAF>
              </PaperWorkCFA>
            </GridWorkItems>
          </GridWorkContainer>
        </PaperContainer>
      </Grid>
    </GridContainer>
  );
};

const GridContainer = styled(Grid)`
  && {
    margin: 45px 0px;
    background: url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    width: 100%;

    @media only screen and (min-width: 680px) {
      background-size: 100% 100%;
    }

    @media only screen and (max-width: 720px) {
      margin-top: 40px;
      background-size: 180% 100%;
    }
  }
`;

const PaperContainer = styled(Paper)`
  && {
    background: transparent;
    box-shadow: none;
  }
`;

const TitleWork = styled(Typography).attrs({
  variant: "h5",
})`
  && {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 8px;
    color: #fff;
    text-align: center;
    padding: 10px 0px;
    width: 100%;
    background: #0008;

    @media only screen and (max-width: 600px) {
      font-size: 1.75rem;
    }
  }
`;

const DividerUp = styled(Divider)`
  && {
    background: #0002;
  }
`;

const GridWorkContainer = styled(Grid)`
  && {
    margin-top: 20px;
  }
`;
const GridWorkItems = styled(Grid)`
  && {
    padding: 10px;
  }
`;

const PaperWork = styled(Paper)`
  && {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;
  }
`;

const PaperWorkCFA = styled(Paper)`
  && {
    display: flex;

    width: 100%;
    height: auto;
    background: #fafafa;
    margin-bottom: 0px;

    @media only screen and (min-width: 980px) {
      margin-top: 20px;
    }

    @media only screen and (max-width: 980px) {
      flex-direction: column;
    }
  }
`;

const ContainerImage = styled.div`
  background: black;
  border-radius: 4px;
`;

const PaperImageEMEI = styled.div`
  && {
    width: 100%;
    height: 100px;
    margin-bottom: 8px;

    background: url(${EMEI});
    background-repeat: no-repeat;
    background-position: center;

    @media only screen and (max-width: 540px) {
      background-size: 72%;
    }
  }
`;

const PaperImageLogyc = styled.div`
  && {
    width: 100%;
    height: 100px;
    margin-bottom: 8px;

    background: url(${logyc});
    background-size: 105px 105px;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const ContainerImageCFA = styled.div`
  && {
    @media only screen and (min-width: 980px) {
      width: 330px;
      height: 100%;
    }

    @media only screen and (max-width: 980px) {
      width: 100%;
      height: 100px;
    }

    border-radius: 4px;

    background-color: black;
  }
`;

const PaperImageCFA = styled.div`
  width: 100%;

  background: url(${cfa});
  background-repeat: no-repeat;
  background-position: center;

  @media only screen and (min-width: 980px) {
    height: 270px;
    background-size: 75%;
  }

  @media only screen and (max-width: 980px) {
    height: 100px;
    background-size: 180px 50px;
  }
`;

const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #fafafa;
`;

const ContainerDescriptionCAF = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #fafafa;
`;

const InfoWork = styled.div`
  display: flex;

  @media only screen and (max-width: 980px) {
    flex-direction: column;
  }
`;

const TypographyWorkTitle = styled(Typography)`
  && {
    margin: 15px 18px;
    margin-bottom: 10px;

    font-size: 1.45rem;
    font-weight: 500;
  }

  @media only screen and (max-width: 750px) {
    font-size: 1.35rem;
    text-align: center;
  }
`;

const DividerTitle = styled(Divider)`
  && {
    margin: 0px 15px;
  }
`;

const ContentWork = styled.div`
  display: flex;
  flex-direction: column;

  width: auto;
  height: 100%;
  margin: 10px;
  padding: 10px;

  @media only screen and (max-width: 650px) {
    align-items: center;
  }
`;

const TypographyWorkContent = styled(Typography)`
  && {
    display: flex;
    align-items: center;

    font-size: 1.1rem;
    margin-bottom: 12px;

    @media only screen and (min-width: 980px) {
      margin-right: 20px;
    }
  }
`;

const ExploreIconWork = styled(ExploreIcon)`
  && {
    color: darkred;
    margin-right: 10px;
    font-size: 1.6rem;
  }
`;

const TodayIconWork = styled(TodayIcon)`
  && {
    color: darkred;
    margin-right: 10px;
    font-size: 1.6rem;
  }
`;
const TypographyText = styled(Typography)`
  && {
    margin-top: 12px;
    text-align: justify;
    font-size: 1.15rem;
  }
`;

const TypographyDescriptionTitle = styled(Typography)`
  && {
    margin: 15px 18px;
    margin-bottom: 10px;

    font-size: 1.45rem;
    font-weight: 500;

    @media only screen and (max-width: 750px) {
      font-size: 1.35rem;
      text-align: center;
    }
  }
`;

export default Work;
