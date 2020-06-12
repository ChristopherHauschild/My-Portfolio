import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Typography,
  Button,
  Dialog, DialogTitle, DialogContent, DialogActions
} from '@material-ui/core'
import CodeIcon from '@material-ui/icons/Code'

import igti from '../../../assets/igti.png'

const ButtonIgti = () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ButtonMore onClick={handleClickOpen}>
        Mais
      </ButtonMore>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <ContainerTitle>
            <Code />
            Bootcamp Full Stack Developer
          </ContainerTitle>
        </DialogTitle>

        <DialogContent dividers>
          
          <ImageIgti />

          <Typography gutterBottom>
            O Bootcamp disponibilizado pelo IGTI aborda as principais tecnologias do mercado tanto no backend quanto no frontend,
            visando capacitar o aluno à atuar no mercado de trabalho.
          </Typography>

          <Typography gutterBottom>
            Para atingir esse objetivo, o Bootcamp é dividido em módulos da seguinte maneira: <br /><br />
            <b>Módulo 01 - Fundamentos:</b> Introdução e instalação do VSCode e Node.js. Noções de HTML, CSS e JavaScript Moderno. <br /><br />
            <b>Módulo 02 - Desenvolvimento de API's:</b> Introdução ao desenvolvimento backend e criação de APIs com Node.js e Express. <br /><br />
            <b>Módulo 03 - Frontend com React:</b> Introdução ao desenvolvimento frontend utilizando o React. <br /><br />
            <b>Módulo 04 - Persistência de dados, versionamento de código e implantação:</b> Introdução ao MongoDB, Github e Heroku. <br /><br />
            <b>Módulo 05 - Fechamento:</b> Entrega do Desafio Final.
          </Typography>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

const ButtonMore = styled(Button)``

const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Code = styled(CodeIcon)`
  && {
    font-size: 1.8rem;
    margin-right: 7.5px;
  }
`

const ImageIgti = styled.div`
  width: 100%;
  height: 160px;
  margin-bottom: 18px;

  background: url(${igti});
  background-repeat: no-repeat;
  background-position: center;
`


export default ButtonIgti