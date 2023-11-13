import React from 'react'
import styled from 'styled-components'
import LoginForm from '../Components/LoginForm/LoginForm'

const Login = ({ verificarUsuario }) => {
  return (
    <>
      <LoginForm verificarUsuario={verificarUsuario} />
    </>
  )
}

export default Login
