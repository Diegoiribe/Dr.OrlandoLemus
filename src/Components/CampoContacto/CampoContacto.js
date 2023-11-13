import React from 'react'
import styled from 'styled-components'
import { colorPrimario, colorSecundario, fondoPrimario } from '../UI/Variables'

const InputContacto = styled.input`
  min-width: 49%;
  background: ${fondoPrimario};
  border-radius: 4.375rem;
  padding: 1vw;
  margin: 1% 0;
  border: none;
  font-size: 1vw;
  &:focus {
    outline: none;
  }
  @media (max-width: 980px) {
    font-size: 0.75rem;
    padding: 0.5rem;
    min-width: 98%;
  }
`

const CampoContacto = (props) => {
  const placeholderModificado = `${props.placeholder}...`
  const { type = 'text' } = props
  const handleChange = (e) => {
    props.setValor(e.target.value)
  }

  return (
    <>
      <InputContacto
        placeholder={placeholderModificado}
        value={props.valor}
        onChange={handleChange}
        type={type}
        rows="4"
      />
    </>
  )
}

const TextArea = styled.textarea`
  min-width: 100%;
  min-height: 15vh;
  background: ${fondoPrimario};
  border-radius: 10px;
  padding: 0.5rem;
  margin: 1% 0;
  border: none;
  resize: none;
  font-size: 1vw;
  &:focus {
    outline: none;
  }
  @media (max-width: 980px) {
    font-size: 0.75rem;
    padding: 0.5rem;
  }
`

const TextAreaContacto = (props) => {
  const placeholderModificado = `${props.placeholder}...`
  const { type = 'text' } = props
  const handleChange = (e) => {
    props.setValor(e.target.value)
  }
  return (
    <>
      <TextArea
        placeholder={placeholderModificado}
        value={props.valor}
        onChange={handleChange}
        type={type}
        rows="4"
        as="textarea"
        style={{
          minWidth: props.width,
          minHeight: props.height,
          borderRadius: props.borderRadius
        }}
      />
    </>
  )
}

const InputContactoInformacion = styled.input`
  background: ${fondoPrimario};
  border-radius: 4.375rem;
  padding: 1vw;
  margin: 1% 0.5%;
  border: none;
  font-size: 1vw;

  &:focus {
    outline: none;
  }
  @media (max-width: 980px) {
    font-size: 0.75rem;
    padding: 0.5rem;
  }
`

const CampoContactoInformacion = (props) => {
  const placeholderModificado = `${props.placeholder}...`
  const { type = 'text' } = props
  const handleChange = (e) => {
    props.setValor(e.target.value)
  }

  return (
    <>
      <InputContactoInformacion
        style={{
          width: props.width,
          height: props.height,
          borderRadius: props.borderRadius
        }}
        placeholder={placeholderModificado}
        value={props.valor}
        onChange={handleChange}
        type={type}
        rows="4"
      />
    </>
  )
}

export { CampoContacto, TextAreaContacto, CampoContactoInformacion }
