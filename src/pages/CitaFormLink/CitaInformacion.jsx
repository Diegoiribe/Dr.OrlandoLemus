import React from 'react'
import styled from 'styled-components'
import CitaInformacionForm from '../../Components/CitaForm/CitaInformacion/CitaInformacionForm'
import Footer from '../../Components/Footer/Footer'

const CitaInformacionDiv = styled.div`
  margin: 7.5% 10% 5% 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 80%;
  height: 75vh;
  @media (max-width: 980px) {
    margin: 30% 5% 0;
    width: 90%;
    flex-direction: column-reverse;
  }
`
const CitaInformacionImg = styled.div`
  min-width: 40%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  @media (max-width: 980px) {
    min-width: 100%;
    margin-bottom: 1rem;
  }
`

const CitaInformacion = ({ registrarMensajeCita }) => {
  return (
    <>
      <CitaInformacionDiv>
        <CitaInformacionForm registrarMensajeCita={registrarMensajeCita} />
        <CitaInformacionImg
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1610629311544-50784bbd6d26?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
          }}
        ></CitaInformacionImg>
      </CitaInformacionDiv>
      <Footer />
    </>
  )
}

export default CitaInformacion
