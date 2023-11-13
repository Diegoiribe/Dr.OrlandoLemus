import React from 'react'
import styled from 'styled-components'
import { Boton } from '../Boton/Boton'
import { Link } from 'react-router-dom'
import {
  colorFuerte,
  colorPrimario,
  colorSecundario,
  fondoPrimario
} from '../UI/Variables'
import { useState } from 'react'

const HeaderContainer = styled.div`
  padding: 0 10%;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${colorSecundario};
  width: 100%;
  height: ${(props) => (props.expanded ? '50vh' : '10vh')};
  flex-direction: ${(props) => (props.expanded ? 'column' : 'row')};
  border-bottom: 1px solid ${fondoPrimario};
  z-index: 1;
  @media (max-width: 1024px) {
    height: ${(props) => (props.expanded ? '50vh' : '12vh')};
  }
`
const HeaderDivTwo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 40%;
  background: ${fondoPrimario};
  border-radius: 4.375rem;
  padding: 0.3rem;

  @media (max-width: 1024px) {
    min-width: 35%;
    padding: 0.2rem;
  }

  @media (max-width: 980px) {
    background: none;
    display: ${(props) => (props.expanded ? 'flex' : 'none')};
  }
`
const HeaderP = styled.p`
  font-weight: bolder;
  font-family: 'Epidemic', sans-serif;

  padding: 0.3rem 1rem;
  color: ${colorPrimario};
  border-radius: 5px;
  font-size: 1.15rem;
  cursor: pointer;
  &:hover {
    color: #666;
  }
  @media (max-width: 1024px) {
    padding: 0.1rem 0.5rem;
    font-size: 0.9rem;
  }
`

const HeaderTreeDiv = styled.div`
  @media (max-width: 980px) {
    display: ${(props) => (props.expanded ? 'flex' : 'none')};
  }
`

const Toggle = styled.div`
  display: none;
  position: relative;
  width: 32px;
  height: 40px;

  justify-content: center;
  align-items: center;
  z-index: 100000;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${colorPrimario};
    transform: translateY(-10px);
    box-shadow: 0 10px 0 ${colorPrimario};
    transition: 0.25s;
  }
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${colorPrimario};
    transform: translateY(10px);
    transition: 0.25s;
  }

  @media (max-width: 980px) {
    display: flex;
  }
`

const HeaderH1 = styled.h1`
  color: ${colorPrimario};
  font-family: 'Epidemic', sans-serif;
  font-size: 3rem;
  @media (max-width: 1240px) {
    font-size: 1.5rem;
  }
`

const Header = ({ seccion, setSeccion, seccionActiva, setSeccionActiva }) => {
  const [expanded, setExpanded] = useState(false)
  const toggleHeight = () => {
    setExpanded(!expanded)
    console.log(expanded)
  }

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

  const customStyle = {
    background: colorFuerte,
    borderRadius: '4.375rem',
    color: colorSecundario,
    transition: '.6s'
  }

  return (
    <HeaderContainer expanded={expanded}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <HeaderH1>Dr. Orlando Lemus</HeaderH1>
      </div>
      <HeaderDivTwo expanded={expanded}>
        <Link style={{ textDecoration: 'none' }} to="/">
          <HeaderP
            style={
              seccionActiva === 'inicio' && seccion[0].uso ? customStyle : {}
            }
            onClick={() => cambiarSeccion('inicio')}
          >
            Inicio
          </HeaderP>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/Servicio">
          <HeaderP
            style={
              seccionActiva === 'servicio' && seccion[1].uso ? customStyle : {}
            }
            onClick={() => cambiarSeccion('servicio')}
          >
            Servicio
          </HeaderP>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/Contacto">
          <HeaderP
            style={
              seccionActiva === 'contacto' && seccion[2].uso ? customStyle : {}
            }
            onClick={() => cambiarSeccion('contacto')}
          >
            Contacto
          </HeaderP>
        </Link>
      </HeaderDivTwo>

      <HeaderTreeDiv expanded={expanded}>
        <Link
          style={{
            textDecoration: 'none'
          }}
          onClick={() => cambiarSeccion('cita')}
          to="/Cita"
        >
          <Boton primaty="false" titulo="Agenda tu cita" />
        </Link>
      </HeaderTreeDiv>

      <Toggle onClick={toggleHeight}></Toggle>
    </HeaderContainer>
  )
}

export default Header
