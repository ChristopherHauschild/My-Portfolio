import React, { useState } from "react";
import styled from "styled-components";
import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";

import rocketseat from "../../../assets/rocketseat.png";

const ButtonRocketseat = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ButtonMore onClick={handleClickOpen}>Mais</ButtonMore>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <ContainerTitle>
            <Code />
            Bootcamp GoStack
          </ContainerTitle>
        </DialogTitle>

        <DialogContent dividers>
          <ImageRocketseat />

          <Typography gutterBottom>
            O Bootcamp disponibilizado pela Rocketseat aborda as principais
            tecnologias do mercado tanto no backend quanto no frontend, visando
            capacitar o aluno à atuar no mercado de trabalho.
          </Typography>

          <Typography gutterBottom>
            Para atingir esse objetivo, o Bootcamp é organizado da seguinte
            maneira: <br />
            <br />
            <b>Semana de Preparação</b>
            <br />
            Preparando os estudos
            <br />
            Ambiente de Desenvolvimento
            <br />
            <br />
            <b>Semana 01</b>
            <br />
            Conceitos Importantes
            <br />
            <br />
            <b>Semana 02</b>
            <br />
            Primeiro projeto com Node.js <br />
            Iniciando o back-end do GoBarber
            <br />
            <br />
            <b>Semana 03</b>
            <br />
            Primeiro projeto com React
            <br />
            Iniciando front-end do GoBarber
            <br />
            Iniciando aplicativo mobile do GoBarber
            <br />
            <br />
            <b>Expansion Week</b>
            <br />
            <br />
            <b>Semana 04</b>
            <br />
            Arquitetura e testes no Node.js
            <br />
            <br />
            <b>Semana 05</b>
            <br />
            Finalizando back-end do GoBarber
            <br />
            Finalizando front-end do GoBarber
            <br />
            <br />
            <b>Semana 06</b>
            <br />
            Finalizando app mobile do GoBarber
            <br />
            Testes no React
            <br />
            <br />
            <b>Semana 07</b>
            <br />
            Deploy de aplicações Node.js <br />
            Deploy de aplicações ReactJS
            <br />
            <br />
            <b>Semana 08</b>
            <br />
            Publicação de apps React Native
            <br />
            <br />
          </Typography>

          <Typography gutterBottom>
            Algumas das tecnologias trabalhadas:
            <ul>
              <li>React</li>
              <li>React Native</li>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>Redux</li>
              <li>MongoDB</li>
              <li>Express</li>
            </ul>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const ButtonMore = styled(Button)``;

const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Code = styled(CodeIcon)`
  && {
    font-size: 1.8rem;
    margin-right: 7.5px;
  }
`;

const ImageRocketseat = styled.div`
  width: 100%;
  height: 160px;
  margin-bottom: 18px;

  background: url(${rocketseat});
  background-repeat: no-repeat;
  background-position: center;
`;

export default ButtonRocketseat;
