import React from 'react'
import styled from 'styled-components'

const CampoTextoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 40vw;
  @media (max-width: 980px) {
    width: 100%;
  }
`

const CampoTextoInput = styled.input`
  padding: 0.2vw 1vw;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 6vh;
  font-size: 1vw;
  &:focus {
    outline: none;
  }
  @media (max-width: 980px) {
    font-size: 3vw;
  }
`

const CampoTexto = (props) => {
  const placeholderModificado = `${props.placeholder}...`

  const { type = 'text' } = props

  const handleChange = (e) => {
    props.setValor(e.target.value)
  }

  return (
    <CampoTextoDiv>
      <label>{props.titulo}</label>
      <CampoTextoInput
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={handleChange}
        type={type}
        rows="4"
      />
    </CampoTextoDiv>
  )
}

export default CampoTexto
