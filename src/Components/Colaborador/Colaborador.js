import React from 'react'
import styled from 'styled-components'
import { colorPrimario, colorSecundario } from '../UI/Variables'

const ColaboradorDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 32%;
  height: 32%;
  border-radius: 5px;
  border: 2px solid;
  @media (max-width: 980px) {
    width: 100%;
    margin: 1% 0;
  }
`
const H1 = styled.h1`
  color: ${colorPrimario};
  font-size: 1.4vw;
  @media (max-width: 980px) {
    font-size: 3.5vw;
  }
`
const H2 = styled.h2`
  color: ${colorPrimario};
  font-size: 1.3vw;
  @media (max-width: 980px) {
    font-size: 3vw;
  }
`

const Colaborador = (props) => {
  const { nombre, puesto, foto, fondoPrimario } = props.datos

  return (
    <ColaboradorDiv
      style={{ backgroundColor: fondoPrimario, border: fondoPrimario }}
    >
      <div style={{ width: '80%', height: '100%' }}>
        <div
          style={{
            backgroundImage: `url(${foto})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center right 30%',
            width: '100%',
            height: '100%'
          }}
        />
      </div>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'column',
          textAlign: 'center'
        }}
      >
        <H1>{nombre}</H1>
        <H2>{puesto}</H2>
      </div>
    </ColaboradorDiv>
  )
}

export default Colaborador
