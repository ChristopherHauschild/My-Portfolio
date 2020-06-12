import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Typography,
  Button,
  Dialog, DialogTitle, DialogContent, DialogActions
} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import ExploreIcon from '@material-ui/icons/Explore'

import ifsul from '../../../assets/ifsul.jpg'

const ButtonIf = () => {
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
            <LocationIcon />
            Campus Venâncio Aires
          </ContainerTitle>
        </DialogTitle>

        <DialogContent dividers>

          <ImageIfsul />

          <TypographyAddres gutterBottom>
            <ContainerAddress>
              <Explore />
              <Bold>Endereço:</Bold> <i> Venâncio Aires, RS. Brasil.</i>
            </ContainerAddress>
          </TypographyAddres>

          <Typography gutterBottom>
            Dando início às atividades em fevereiro de 2011, o campus é umas das 14 unidades que integram a rede do Instituto
            Federal de Educação, Ciência e Tecnologia Sul-rio-grandense (IFSUL), com sede em Pelotas/RS.
          </Typography>
          
          <Typography gutterBottom>
            Na formação técnica em informática, o campus oferta as seguintes disciplinas: <br /><br />
            <b>1° ano:</b> Lógica de Programação e Informática Instrumental. <br /><br />
            <b>2° ano:</b> Design, Banco de Dados, Sistemas Operacionais e Linguagem de Programação I. <br /><br />
            <b>3° ano:</b> Web Design, Programação Web, Redes, Organização e Arquitetura de Computadores e Linguagem de Programação II. <br /><br />
            <b>4° ano:</b> Segurança da Informação, Engenharia de Software, Administração e Gerenciamento de Redes, Programação para Dispositivos Móveis e Linguagem de Programação III.
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

const LocationIcon = styled(LocationOnIcon)`
  && {
    font-size: 1.8rem;
    margin-right: 6px;
  }
`

const ImageIfsul = styled.div`
  width: 100%;
  height: 150px;
  margin-bottom: 18px;

  background: url(${ifsul});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`

const TypographyAddres = styled(Typography)`
  && {
    margin-top: 10px;
    margin-bottom: 16px;
  }
`

const ContainerAddress= styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Explore = styled(ExploreIcon)`
  && {
    font-size: 1.4rem;
    margin-right: 6px;
    color: darkred;
  }
`

const Bold = styled.b`
  margin-right: 7px;
`

export default ButtonIf