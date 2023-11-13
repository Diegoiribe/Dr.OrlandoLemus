import React, { useState } from 'react'
import styled from 'styled-components'
import {
  colorPrimario,
  colorSecundario,
  fondoPrimario
} from '../../UI/Variables'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const DashboardCitaCardDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 1% 0;
  background: ${colorSecundario};
  height: 10vh;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${colorPrimario};
`
const DivOne = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: satrt;
  width: 80%;
  height: 100%;
  flex-direction: column;
  p {
    color: ${colorPrimario};
    font-size: 1.3vw;
  }
`

const DivTwo = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  p {
    color: ${colorPrimario};
    font-size: 1vw;
  }
`
const PTwo = styled.p`
  color: ${colorPrimario};
  font-size: 1vw;
`

const DashboardCitaCard = ({ cita, heightCita, eliminarCita }) => {
  const { fav, id } = cita
  return (
    <>
      {fav ? (
        <DashboardCitaCardDiv
          onClick={() => heightCita(id)}
          s
          style={{ height: '40vh' }}
        >
          <DivOne style={{ width: '90%' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '100%',
                height: '30%',
                flexDirection: 'column',
                borderBottom: '1px solid ',
                borderColor: fondoPrimario
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%'
                }}
              >
                <p>{cita.nombre}</p>
                <p>{cita.citaId}</p>
                <p>
                  {cita.dia}
                  {cita.Hora}
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '50%'
                }}
              >
                <p style={{ fontSize: '1vw', color: '#828383' }}>
                  {cita.email}
                </p>
                <p style={{ fontSize: '1vw', color: '#828383' }}>
                  {cita.telefono}
                </p>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                width: '100%',
                height: '60%'
              }}
            >
              <div
                style={{
                  borderBottom: '1px solid ',
                  borderColor: fondoPrimario
                }}
              >
                <PTwo>{cita.doctorName}</PTwo>
              </div>
              <div>
                <PTwo>{cita.domicilio}</PTwo>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid ',
                  borderColor: fondoPrimario
                }}
              >
                <PTwo>{cita.estado}</PTwo>
                <PTwo>{cita.ciudad}</PTwo>
                <PTwo>{cita.codigoPostal}</PTwo>
              </div>
              <div
                style={{
                  borderBottom: '1px solid ',
                  borderColor: fondoPrimario
                }}
              >
                <PTwo>{cita.mensaje}</PTwo>
              </div>
            </div>
          </DivOne>
        </DashboardCitaCardDiv>
      ) : (
        <DashboardCitaCardDiv>
          <DivOne>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
              }}
            >
              <p>{cita.nombre}</p>
              <p>{cita.citaId}</p>
              <p>
                {cita.dia}
                {cita.Hora}
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',

                width: '50%'
              }}
            >
              <p style={{ fontSize: '1vw', color: '#828383' }}>{cita.email}</p>
              <p style={{ fontSize: '1vw', color: '#828383' }}>
                {cita.telefono}
              </p>
            </div>
          </DivOne>
          <DivTwo>
            <ArrowDropDownIcon
              style={{ color: colorPrimario, cursor: 'pointer' }}
              onClick={() => heightCita(id)}
            />
            <DeleteForeverIcon
              onClick={() => eliminarCita(id)}
              style={{
                color: colorPrimario,
                fontSize: '1.5vw ',
                cursor: 'pointer'
              }}
            />
          </DivTwo>
        </DashboardCitaCardDiv>
      )}
    </>
  )
}

export default DashboardCitaCard
