import React from 'react'
import styled from 'styled-components'
import {
  colorPrimario,
  colorSecundario,
  fondoPrimario
} from '../../UI/Variables'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const DashboardContactoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 1% 0;
  border: 1px solid ${colorPrimario};
  border-radius: 10px;
  height: 25vh;
  width: 100%;
`

const DashboardContactoCard = ({ contactoRegistro, eliminarContacto }) => {
  const { nombre, mensaje, email, telefono, id } = contactoRegistro

  return (
    <>
      <DashboardContactoDiv>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'column',
            alignItems: 'center',
            width: '95%',
            height: '100%'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '95%',
              padding: '0 0 1% 0',
              borderBottom: `1px solid ${fondoPrimario}`
            }}
          >
            <p style={{ color: colorPrimario }}>{nombre}</p>
            <p style={{ color: colorPrimario }}>{email}</p>
            <p style={{ color: colorPrimario }}>{telefono}</p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '95%'
            }}
          >
            <p style={{ color: colorPrimario }}>{mensaje}</p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '5%',
            height: '100%'
          }}
        >
          <DeleteForeverIcon
            onClick={() => eliminarContacto(id)}
            style={{
              color: colorPrimario,
              fontSize: '1.5vw ',
              cursor: 'pointer'
            }}
          />
        </div>
      </DashboardContactoDiv>
    </>
  )
}

export default DashboardContactoCard
