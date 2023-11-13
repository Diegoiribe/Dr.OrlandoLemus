import React from 'react'
import styled from 'styled-components'
import Formulario from '../Formulario/Formulario'
import { colorPrimario, colorSecundario, fondoPrimario } from '../UI/Variables'

const FooterDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const FooterDivOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  background: ${colorPrimario};
  padding: 1.5rem 11%;
  @media (max-width: 980px) {
    flex-direction: column;
  }
`
const FooterDivTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colorPrimario};
  font-weight: bolder;
  width: 100%;
  padding: 1rem;
`
const FooterP = styled.p`
  font-size: 1.1vw;
  font-weight: bolder;
  color: white;
  margin: 0.5rem 0;
  @media (max-width: 980px) {
    font-size: 2.5vw;
  }
`
const FooterForm = styled.div`
  @media (max-width: 980px) {
    width: 100%;
  }
`

const P = styled.p`
  color: ${colorPrimario};
  font-size: 1.1vw;
  @media (max-width: 980px) {
    font-size: 2.5vw;
  }
`

const Footer = () => {
  return (
    <FooterDiv>
      <FooterDivOne>
        <div>
          <h1 style={{ color: colorSecundario }}>Dr. Orlando Lemus</h1>
        </div>
        <div>
          <FooterP>Inicio</FooterP>
          <FooterP>Servicio</FooterP>
          <FooterP>Acerca</FooterP>
          <FooterP>Consulta</FooterP>
        </div>
        <FooterForm>
          <Formulario />
        </FooterForm>
      </FooterDivOne>
      <FooterDivTwo>
        <a
          style={{ textDecoration: 'none' }}
          href="https://www.instagram.com/is.thistheway/"
        >
          <P>Desarrollado IsThisTheWay - 2023</P>
        </a>
      </FooterDivTwo>
    </FooterDiv>
  )
}

export default Footer
