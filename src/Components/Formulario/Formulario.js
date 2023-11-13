import { useState } from 'react'
import styled from 'styled-components'
import CampoTexto from '../CampoTexto/CampoTexto'
import { BotonFooter } from '../Boton/Boton'
import { v4 as uuid } from 'uuid'
import { colorPrimario, colorSecundario, fondoPrimario } from '../UI/Variables'
import { Link } from 'react-router-dom'

const FormularioDiv = styled.div`
  @media (max-width: 980px) {
    width: 100%;
  }
`

const Formulario = (props) => {
  const [nombre, setNombre] = useState('')
  const [mensaje, setMensaje] = useState('')

  const { registrarMensaje } = props

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado', e)
    let datosAEnviar = {
      nombre,
      mensaje,
      id: uuid()
    }

    registrarMensaje(datosAEnviar)
  }

  return (
    <FormularioDiv>
      <form
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'column',
          alignItems: 'start',
          minHeight: '30vh',
          width: '100%'
        }}
        onSubmit={handleSubmit}
      >
        <h3 style={{ color: colorSecundario }}>Hazlo con nosotros</h3>
        <CampoTexto
          titulo=""
          placeholder="Ingresa tu nombre"
          value={nombre}
          setValor={setNombre}
        />
        <CampoTexto
          titulo=""
          placeholder="Ingresa tu mensaje"
          value={mensaje}
          setValor={setMensaje}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <BotonFooter color={colorPrimario} titulo="Enviar" />
          <Link to="/login">
            <BotonFooter color={colorPrimario} titulo="Login" />
          </Link>
        </div>
      </form>
    </FormularioDiv>
  )
}

export default Formulario
