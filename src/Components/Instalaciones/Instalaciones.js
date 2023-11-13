import React from 'react'
import styled from 'styled-components'
import CardInstalaciones from '../CardInstalaciones/CardInstalaciones'
import { colorPrimario, colorFuerte, fondoPrimario } from '../UI/Variables'

const InstalacionesDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 10% 10% 0;
  @media (max-width: 980px) {
    flex-direction: column;
    margin: 25% 10% 0;
  }
`

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  max-width: 25%;
  min-height: 15vh;
  flex-wrap: wrap;
  @media (max-width: 980px) {
    max-width: 100%;
    align-items: center;
    margin: 0 0 1.5rem 0;
  }
`

const ImgDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  min-height: 15vh;
  background: ${fondoPrimario};
  border-radius: 10px;
  @media (max-width: 980px) {
    width: 100%;
  }
`

const H2 = styled.h2`
  color: ${colorFuerte};
  font-size: 2rem;
  @media (max-width: 980px) {
    font-size: 2.5rem;
  }
`
const P = styled.p`
  color: ${colorFuerte};
  font-size: 1.25vw;
  @media (max-width: 980px) {
    font-size: 0.75rem;
    width: 80%;
    text-align: center;
  }
`

const Instalaciones = ({ cardInstalaciones }) => {
  return (
    <InstalacionesDiv>
      <TextDiv>
        <H2>Instalaciones</H2>
        <P>Montecarlo, Parque Canacintra I, 80054 Culiacán Rosales, Sin.</P>
      </TextDiv>

      <ImgDiv>
        {cardInstalaciones.map((cardInstalacion, index) => {
          return <CardInstalaciones key={index} datos={cardInstalacion} />
        })}
      </ImgDiv>
    </InstalacionesDiv>
  )
}

export default Instalaciones
