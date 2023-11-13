import React from 'react'
import styled from 'styled-components'
import Colaborador from '../Colaborador/Colaborador'
import { colorPrimario, colorSecundario, fondoPrimario } from '../UI/Variables'

const ColaboradoresDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 100vh;
  margin: 0.5rem 10%;
  flex-wrap: wrap;
  @media (max-width: 980px) {
    height: 200vh;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`

const Equipo = (props) => {
  const { colaboradores } = props
  return (
    <div>
      <div
        style={{
          width: '80%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          margin: '1rem 10%'
        }}
      >
        <h1 style={{ color: colorPrimario }}>Equipo</h1>
      </div>
      <ColaboradoresDiv>
        {colaboradores.map((colaborador, index) => {
          return <Colaborador datos={colaborador} key={index} />
        })}
      </ColaboradoresDiv>
    </div>
  )
}

export default Equipo
