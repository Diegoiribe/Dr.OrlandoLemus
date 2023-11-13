import React, { useState } from 'react'
import styled from 'styled-components'
import { CampoContactoInformacion } from '../CampoContacto/CampoContacto'
import { colorPrimario } from '../UI/Variables'
import { BotonLogin } from '../Boton/Boton'
import { useNavigate } from 'react-router-dom'

const LoginFormDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const LoginFormLabel = styled.label`
  font-size: 0.9vw;
  font-weight: 600;
  margin: 0.5vw;
  color: ${colorPrimario};
`

const LoginForm = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { verificarUsuario } = props
  const navigate = useNavigate()

  const handleSubmitForm = (e) => {
    e.preventDefault()

    const usuarioValido = verificarUsuario(email, password)

    if (usuarioValido) {
      navigate('/Dashboard')
    } else {
      console.log('Usuario no válido')
      console.log('Datos a enviar', email, password)
      // Muestra un mensaje de error o toma otra acción si el inicio de sesión falla
    }
  }

  return (
    <LoginFormDiv>
      <div
        style={{
          width: '30%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '40%'
        }}
      >
        <h1 style={{ color: colorPrimario, fontWeight: '100' }}>
          Inicia sesión en tu cuenta
        </h1>
        <form onSubmit={handleSubmitForm}>
          <LoginFormLabel htmlFor="email">Correo electrónico</LoginFormLabel>
          <CampoContactoInformacion
            width="99%"
            type="email"
            titulo="email"
            placeholder="Correo electrónico"
            value={email}
            setValor={setEmail}
          />
          <LoginFormLabel htmlFor="password">Contraseña</LoginFormLabel>
          <CampoContactoInformacion
            width="99%"
            type="password"
            titulo="password"
            placeholder="Contraseña"
            value={password}
            setValor={setPassword}
          />
          <BotonLogin titulo="Iniciar sesión" />
        </form>
      </div>
    </LoginFormDiv>
  )
}

export default LoginForm
