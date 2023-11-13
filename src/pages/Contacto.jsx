import React from 'react'
import styled from 'styled-components'
import Instalaciones from '../Components/Instalaciones/Instalaciones'
import FormContacto from '../Components/FormContacto/FormContacto'
import CardContacto from '../Components/CardContacto/CardContacto'
import { colorPrimario } from '../Components/UI/Variables'
import Footer from '../Components/Footer/Footer'

const ContactoDiv = styled.div`
  height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 10%;
  flex-direction: row;
  @media (max-width: 980px) {
    flex-direction: column;
    height: auto;
    margin: 0 0;
  }
`

const ContactoEtiqueta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 1% 0;
  background: ${colorPrimario};
  height: 25vh;
  margin: 15vh 0 5vh;
`

const Contacto = ({
  cardInstalaciones,
  setSeccion,
  setSeccionActiva,
  registrarMensajeContacto
}) => {
  return (
    <>
      <Instalaciones cardInstalaciones={cardInstalaciones} />
      <ContactoEtiqueta>
        <h2 style={{ color: 'white', fontSize: '3rem' }}>Contacto</h2>
      </ContactoEtiqueta>
      <ContactoDiv>
        <FormContacto registrarMensajeContacto={registrarMensajeContacto} />
        <CardContacto
          setSeccion={setSeccion}
          setSeccionActiva={setSeccionActiva}
        />
      </ContactoDiv>
      <Footer />
    </>
  )
}

export default Contacto
