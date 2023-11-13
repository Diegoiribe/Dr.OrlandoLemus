import React from 'react'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'
import { CampoContacto, TextAreaContacto } from '../CampoContacto/CampoContacto'
import { colorPrimario, colorSecundario, colorFuerte } from '../UI/Variables'
import { BotonContacto } from '../Boton/Boton'

const FormContactoDiv = styled.form`
  height: 70%;
  width: 62.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  @media (max-width: 980px) {
    height: 100%;
    width: 70%;
  }
`

const TextContactoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  height: 12%;
`

const CampoContactoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
`
const H3 = styled.h3`
  color: ${colorFuerte};
  margin: 0.5rem 0;
  font-size: 1.5rem;
  @media (max-width: 980px) {
    font-size: 1rem;
  }
`
const H1 = styled.h1`
  color: ${colorFuerte};
  margin: 0.5rem 0;
  font-size: 2rem;
  @media (max-width: 980px) {
    font-size: 1.15rem;
  }
`

const P = styled.p`
  color: ${colorPrimario};
  font-size: 1vw;
  @media (max-width: 980px) {
    font-size: 0.75rem;
  }
`

const FormContacto = (props) => {
  const [email, setEmail] = useState('')
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [mensaje, setMensaje] = useState('')

  const { registrarMensajeContacto } = props

  const handleSubmitForm = (e) => {
    e.preventDefault()
    console.log('Formulario enviado', e)
    let datosAEnviar = {
      nombre,
      email,
      telefono,
      mensaje,
      id: uuid()
    }

    registrarMensajeContacto(datosAEnviar)
  }

  return (
    <>
      <FormContactoDiv onSubmit={handleSubmitForm}>
        <TextContactoDiv>
          <H1>Agenda tu Servicio Con Nosotros</H1>
          <P>Te contactaremos lo mas pronto posible</P>
        </TextContactoDiv>

        <CampoContactoDiv>
          <div>
            <H3>Informacion de Contacto</H3>
          </div>
          <CampoContactoDiv>
            <CampoContacto
              titulo=""
              placeholder="Tu Email"
              value={email}
              setValor={setEmail}
            />
            <CampoContacto
              titulo=""
              placeholder="Nombre"
              value={nombre}
              setValor={setNombre}
            />
            <CampoContacto
              titulo=""
              placeholder="Numero De Telefono"
              value={telefono}
              setValor={setTelefono}
            />
          </CampoContactoDiv>
        </CampoContactoDiv>
        <div style={{ width: '100%' }}>
          <H3>Mensaje</H3>
          <TextAreaContacto
            titulo=""
            placeholder="Ingresa un mensaje"
            value={mensaje}
            setValor={setMensaje}
          />
        </div>
        <BotonContacto color={colorSecundario} titulo="Enviar" />
      </FormContactoDiv>
    </>
  )
}

export default FormContacto
