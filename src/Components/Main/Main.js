import React from 'react'
import styled from 'styled-components'
import doctor from '../../img/doctor2.webp'
import { colorPrimario, colorSecundario, fondoPrimario } from '../UI/Variables'

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 30% 50% 10%;
  grid-template-rows: 30% 50% 20%;
  width: 100%;
  height: 100vh;
`
const MainDivOne = styled.div`
  grid-column: 1/5;
  grid-row: 1/2;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colorPrimario};
  margin-top: 0.5rem;
`

const H2MAinOne = styled.h2`
  max-width: 30%;
  text-align: center;
  color: ${colorSecundario};
  font-size: 2.5vw;
  @media (max-width: 980px) {
    max-width: 55%;
    font-size: 4.5vw;
  }
`

const MainDivTwo = styled.div`
  grid-column: 2/3;
  grid-row: 2/4;
  background: url(${doctor});
  background-position: center right 26%;
  background-size: cover;
  border-radius: 10px;
  margin: 1rem;
  @media (max-width: 980px) {
    background: url(https://static.wixstatic.com/media/7a7b29_74c0f629aa3c4a5b846612b59e8aae76~mv2.jpg/v1/fill/w_788,h_809,al_c,q_85,enc_auto/7a7b29_74c0f629aa3c4a5b846612b59e8aae76~mv2.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 1rem 0;
  }
`

const MainDivThree = styled.div`
  grid-column: 3/4;
  grid-row: 2/3;
  background: ${colorSecundario};
  border-radius: 10px;
  margin: 1rem 1rem 0.5rem;
  padding: 1vw 2.5vw;
`

const MainDivFour = styled.div`
  grid-column: 3/4;
  grid-row: 3/4;
  background: ${colorSecundario};
  border-radius: 10px;
  margin: 0.5rem 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  div {
    width: 30%;
  }
`

const P = styled.p`
  color: ${colorPrimario};
  margin: 0.5rem;
  font-size: 1.1vw;
  font-weight: 700;
  @media (max-width: 980px) {
    font-size: 2.48vw;
    margin: 0.3rem;
  }
`
const H2 = styled.h2`
  color: ${colorPrimario};
  font-size: 2vw;
  text-align: center;
  @media (max-width: 980px) {
    font-size: 4vw;
  }
`

const H2P = styled.p`
  color: ${colorPrimario};
  font-weight: 700;
  text-align: center;
  font-size: 1.5vw;
  @media (max-width: 980px) {
    font-size: 2vw;
  }
`

const Main = () => {
  return (
    <MainContainer>
      <MainDivOne>
        <H2MAinOne>
          Transformando belleza y restaurando confianza, con orgullo
        </H2MAinOne>
      </MainDivOne>
      <MainDivTwo></MainDivTwo>
      <MainDivThree>
        <P>
          Egresado, en 2006, como Médico, por la Facultad de Medicina de la
          Universidad Autónoma de Baja California (UABC) Campus Mexicali.{' '}
        </P>
        <P>
          Especialista en Cirugía General por el Hospital Universitario ¨Dr.
          José Eleuterio González¨ de la Universidad Autónoma de Nuevo León
          (UANL) en 2013.
        </P>
        <P>
          Subespecialista en Cirugía Plástica y Reconstructiva por el Hospital
          Universitario ¨Dr. José Eleuterio González¨ de la Universidad Autónoma
          de Nuevo León (UANL) en 2016.
        </P>
        <P>
          Es miembro de Asociación Mexicana de Cirugía Plástica, Estética y
          Reconstructiva (AMCPER) y cuenta con la Certificación No. 1895 del
          Consejo Mexicano de Cirugía Plástica, Estética y Reconstructiva
          (CMCPER).
        </P>
      </MainDivThree>
      <MainDivFour>
        <div>
          <H2>+ 11</H2>
          <H2P>Años de experiencia</H2P>
        </div>
        <div>
          <H2>+ 100</H2>
          <H2P>Cirugias plasticas realizadas</H2P>
        </div>
        <div>
          <H2>+ 500</H2>
          <H2P>Pacientes satisfechos</H2P>
        </div>
      </MainDivFour>
    </MainContainer>
  )
}

export default Main
