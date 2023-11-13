import React from 'react'
import styled from 'styled-components'
import {
  colorPrimario,
  colorSecundario,
  fondoPrimario
} from '../../UI/Variables'
import DeleteForever from '@mui/icons-material/DeleteForever'

const DashboardAgendarHoraDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  flex-wrap: wrap;
  width: 45%;
  height: 7.5vh;
  background: ${colorPrimario};
  margin: 1% 0;
  border-radius: 10px;
  p {
    color: ${colorSecundario};
    font-size: 1.25vw;
  }
`

const DashboardAgendarHora = ({ hora, eliminarHora }) => {
  return (
    <>
      <DashboardAgendarHoraDiv>
        <p>{hora.tiempo}</p>
        <DeleteForever
          style={{
            color: colorSecundario,
            fontSize: '1.5vw ',
            cursor: 'pointer'
          }}
          onClick={() => eliminarHora(hora.id)}
        />
      </DashboardAgendarHoraDiv>
    </>
  )
}

export default DashboardAgendarHora
