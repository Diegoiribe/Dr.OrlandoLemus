import React from 'react'
import styled from 'styled-components'
import {
  colorPrimario,
  colorSecundario,
  fondoPrimario,
  colorFuerte,
  fondoSecundario
} from '../UI/Variables'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined'
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined'
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined'
import { BotonCardContacto } from '../Boton/Boton'
import { Link } from 'react-router-dom'

const CardContactoDiv = styled.div`
  width: 32.5%;
  height: 80%;
  background-color: ${colorFuerte};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 980px) {
    width: 70%;
    height: 100%;
    margin: 1rem 0;
    padding: 1.5rem 0.5rem;
  }
`
const CardContactoDivTwo = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const CardContactoDivThree = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
`
const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vh;
  height: 10vh;
  border-radius: 50%;
  background: ${fondoSecundario};
`
const Div = styled.div`
  border-bottom: 1px solid ${colorSecundario};
  padding: 2.5vh 0;
  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
const H3 = styled.h3`
  color: ${colorSecundario};
  font-size: 2rem;
  text-align: center;
  @media (max-width: 980px) {
    font-size: 1.5rem;
  }
`

const H4 = styled.h4`
  color: ${colorSecundario};
  font-size: 2rem;

  @media (max-width: 980px) {
    font-size: 1.25rem;
  }
`

const P = styled.p`
  color: ${colorSecundario};
  font-size: 1vw;
  @media (max-width: 980px) {
    font-size: 0.75rem;
  }
`

const CardContacto = ({ setSeccion, setSeccionActiva }) => {
  const cambiarSeccion = (nombre) => {
    setSeccionActiva(nombre)
    setSeccion((prevSeccion) =>
      prevSeccion.map((seccion) => ({
        ...seccion,
        uso: seccion.name === nombre
      }))
    )
    window.scrollTo(0, 0)
  }
  return (
    <CardContactoDiv>
      <Div>
        <H3>Agenda con nosotros</H3>
        <P>Tenemos a tu disposicion</P>
      </Div>
      <div>
        <CardContactoDivTwo>
          <IconDiv>
            <RoomOutlinedIcon
              fontSize="medium"
              style={{ color: colorSecundario }}
            />
          </IconDiv>
          <CardContactoDivThree>
            <H4>Visitanos</H4>
            <P>Montecarlo, Parque Canacintra I, 80054 Culiacán Rosales, Sin</P>
          </CardContactoDivThree>
        </CardContactoDivTwo>
        <CardContactoDivTwo>
          <IconDiv>
            <ForwardToInboxOutlinedIcon
              fontSize="medium"
              style={{ color: colorSecundario }}
            />
          </IconDiv>
          <CardContactoDivThree>
            <H4>Escribenos</H4>
            <P>Doctor@ejemplo.com</P>
          </CardContactoDivThree>
        </CardContactoDivTwo>
        <CardContactoDivTwo>
          <IconDiv>
            <PhoneIphoneOutlinedIcon
              fontSize="medium"
              style={{ color: colorSecundario }}
            />
          </IconDiv>
          <CardContactoDivThree>
            <H4>Llamanos</H4>
            <P>(+52) xxx-xxxx-xx</P>
          </CardContactoDivThree>
        </CardContactoDivTwo>
      </div>
      <Link
        style={{
          textDecoration: 'none'
        }}
        onClick={() => cambiarSeccion('cita')}
        to="/Cita"
      >
        <BotonCardContacto titulo="Agendar cita" />
      </Link>
    </CardContactoDiv>
  )
}

export default CardContacto
