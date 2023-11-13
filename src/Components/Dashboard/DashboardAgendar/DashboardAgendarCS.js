import React from 'react'
import styled from 'styled-components'
import {
  colorPrimario,
  colorSecundario,
  fondoPrimario
} from '../../UI/Variables'
import DeleteForever from '@mui/icons-material/DeleteForever'

const DashboardAgendarCSDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 7.5vh;
  background: ${colorPrimario};
  margin: 1% 0;
  border-radius: 10px;
  p {
    color: ${colorSecundario};
    font-size: 1.25vw;
  }
`

const DashboardAgendarCS = ({ citaservice, eliminarCitaService }) => {
  return (
    <>
      <DashboardAgendarCSDiv>
        <p>{citaservice.name}</p>
        <DeleteForever
          style={{
            color: colorSecundario,
            fontSize: '1.5vw ',
            cursor: 'pointer'
          }}
          onClick={() => eliminarCitaService(citaservice.id)}
        />
      </DashboardAgendarCSDiv>
    </>
  )
}

export default DashboardAgendarCS
