import React from "react";
import styled from "styled-components";
import { Grid, Typography, Divider, Paper } from "@material-ui/core";

import logoRN from "../../../assets/logoRN.jpg";
import logoC3 from "../../../assets/logoC3.png";
import USP from "../../../assets/USP.png";
import udemy from "../../../assets/udemy.png";

import Card from "./cards-coursers.js";

const Courser = () => {
  return (
    <Grid container xs={12}>
      <PaperContainer>
        <GridTitle item xs={12}>
          <TypographyTitle>Cursos e Certificações</TypographyTitle>
          <DividerTitle />
        </GridTitle>

        <CardsContainer>
          <Card
            image={logoRN}
            title="React.js Ninja - React Completo"
            content="Curso disponibilizado pelo dev Fernando Daciuk na plataforma Udemy. Foca em capacitar
          o aluno a atuar no mercado de trabalho utilizando React. O curso tem duração de cerca 80 horas,
          e é divido em 4 módulos, durante os quais são realizados projetos completos."
            linkButton="https://github.com/ChristopherHauschild/curso-react-ninja"
          />

          <Card
            image={logoC3}
            title="Web Moderno com JavaScript 2020 Completo + Projetos"
            content="Disponibilizado pela plataform Cod3r, tem duração de mais de 75 horas e foca em capacitar o aluno
          a atuar como dev Web Full Stack, apresentando as principais tecnologias do mercado."
            linkButton="https://github.com/ChristopherHauschild/curso-web-moderno-cod3r"
          />

          <Card
            image={USP}
            title="Introdução à Ciência da Computação com Python"
            content="Curso disponibilizado pela USP na plataforma Coursera, foca em criar uma base sólida de
          Python, além de introduzir o aluno à Ciência da Computação. Conta com mais de 30 horas de conteúdo."
            linkButton="https://github.com/ChristopherHauschild/intro-to-computer-science-with-python"
          />

          <Card
            image={udemy}
            title="Gatsby: Crie um site PWA com React, GraphQL e Netlify CMS"
            content="Curso disponibilizado por Willian Justen na plataforma Udemy, foca em desenvolver um blog utilizando React e Gatsby, aliando com as melhores práticas de programação voltadas para um código limpo, reutilizável e otimizado."
            linkButton="https://github.com/ChristopherHauschild/site-pwa-react-graphql"
          />

          <Card
            image={logoC3}
            title="React + Redux"
            content="Curso disponibilizado pela Cod3r, focado em criar uma base no desenvolvimento utilizando o framework React aliando ao gerenciador de estado Redux, trabalhando conceitos fundamentais dessas tecnologias, além de desenvolver aplicações com funcionalidades reais para trabalhar as mesmas."
            linkButton="https://github.com/ChristopherHauschild/curso-react-redux"
          />
        </CardsContainer>
      </PaperContainer>
    </Grid>
  );
};

const PaperContainer = styled(Paper)`
  && {
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 10px;
  }
`;
const GridTitle = styled(Grid)`
  && {
    padding: 10px 15px;
  }
`;

const TypographyTitle = styled(Typography).attrs({
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

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const DividerTitle = styled(Divider)``;

export default Courser;
