import React from 'react'
import styled from 'styled-components'
import {
  colorPrimario,
  colorSecundario,
  fondoPrimario,
  colorFuerte
} from '../UI/Variables'

const HeaderBoton = styled.button`
  font-weight: bolder;
  padding: 0.8vw 1.25vw;
  background: ${(props) => (props.primaty ? colorFuerte : colorSecundario)};
  font-size: 1.2vw;
  color: ${(props) => (props.primaty ? colorSecundario : colorFuerte)};
  border-radius: 5px;
  border: 1.25px solid ${colorPrimario};
  cursor: pointer;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.05);
  @media (max-width: 980px) {
    font-size: 5vw;
    padding: 2vw 2.5vw;
  }
`

const Boton = (props) => {
  return <HeaderBoton primaty>{props.titulo}</HeaderBoton>
}

const FooterBoton = styled.button`
  font-weight: bolder;
  padding: 0.8vw 1.25vw;
  background: ${(props) => (props.primaty ? colorFuerte : colorSecundario)};
  font-size: 1.2vw;
  color: ${(props) => (props.primaty ? colorSecundario : colorFuerte)};
  border-radius: 5px;
  border: 1.25px solid ${colorPrimario};
  cursor: pointer;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.05);
  @media (max-width: 980px) {
    font-size: 2.5vw;
    padding: 2vw 2.5vw;
  }
`

const BotonFooter = (props) => {
  return <FooterBoton>{props.titulo}</FooterBoton>
}

const BotonContactoDiv = styled.button`
  font-weight: bolder;
  padding: 0.8vw 3.25vw;
  background: ${colorPrimario};
  color: ${colorSecundario};
  border-radius: 20px;
  border: 1.25px solid ${colorPrimario};
  cursor: pointer;
  font-size: 0.8vw;
  @media (max-width: 980px) {
    font-size: 3vw;
    padding: 2vw 2.5vw;
    width: 30%;
  }
`

const BotonContacto = (props) => {
  return (
    <BotonContactoDiv type="submit" style={{ width: props.width }}>
      {props.titulo}
    </BotonContactoDiv>
  )
}

const BotonCardContactoDiv = styled.button`
  font-weight: bolder;
  padding: 0.8vw 3.25vw;
  background: ${colorSecundario};
  color: ${colorPrimario};
  border-radius: 20px;
  border: 1.25px solid ${colorSecundario};
  cursor: pointer;
  font-size: 0.8vw;
  @media (max-width: 980px) {
    font-size: 3vw;
    padding: 2vw 2.5vw;
  }
`

const BotonCardContacto = (props) => {
  return <BotonCardContactoDiv>{props.titulo}</BotonCardContactoDiv>
}

const BotonCardCitaDiv = styled.button`
  font-weight: bolder;
  padding: 0.8vw 35%;
  background: ${colorPrimario};
  color: ${colorSecundario};
  border-radius: 20px;
  border: 1.25px solid ${colorPrimario};
  cursor: pointer;
  font-size: 0.8vw;
  @media (max-width: 980px) {
    width: 100%;
    font-size: 3.5vw;
    padding: 2vw 2.5vw;
  }
`

const BotonCardCita = (props) => {
  return <BotonCardCitaDiv>{props.titulo}</BotonCardCitaDiv>
}

const BotonLoginDiv = styled.button`
  font-weight: bolder;
  width: 99%;
  padding: 0.8vw;
  margin: 1vw 0.5%;
  background: ${colorPrimario};
  color: ${colorSecundario};
  border-radius: 20px;
  border: 1.25px solid ${colorPrimario};
  cursor: pointer;
  font-size: 0.8vw;
  @media (max-width: 980px) {
    font-size: 5vw;
    padding: 2vw 2.5vw;
  }
`

const BotonLogin = (props) => {
  return <BotonLoginDiv>{props.titulo}</BotonLoginDiv>
}

const BotonBodyDiv = styled.button`
  font-weight: bolder;
  width: 55%;
  padding: 1vw;
  margin: 1vw 0.5%;
  background: ${colorFuerte};
  color: ${colorSecundario};
  border-radius: 5px;
  border: 1.25px solid ${colorFuerte};
  cursor: pointer;
  font-size: 1.5vw;
  @media (max-width: 980px) {
    font-size: 5vw;
    padding: 2vw 2.5vw;
    width: 100%;
  }
`

const BotonBody = (props) => {
  return <BotonBodyDiv>{props.titulo}</BotonBodyDiv>
}

export {
  Boton,
  BotonFooter,
  BotonContacto,
  BotonCardContacto,
  BotonCardCita,
  BotonLogin,
  BotonBody
}
