import React from 'react'
import styled from 'styled-components'
import {
  colorPrimario,
  colorSecundario,
  fondoPrimario
} from '../../UI/Variables'
import DeleteForever from '@mui/icons-material/DeleteForever'

const DashboardServicioAYDCardDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 40vh;
  background: ${colorPrimario};
  margin: 1% 0;
  border-radius: 10px;
`

const CardImg = styled.div`
  width: 45%;
  height: 100%;

  border-radius: 10px;
  margin: 0 1%;
`

const DashboardServicioAYDCard = ({ cardAntes, eliminarAYD }) => {
  return (
    <>
      <DashboardServicioAYDCardDiv>
        <CardImg
          style={{
            backgroundImage: `url(${cardAntes.fotoAntes})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        ></CardImg>
        <CardImg
          style={{
            backgroundImage: `url(${cardAntes.fotoDespues})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        ></CardImg>
        <DeleteForever
          style={{
            color: colorSecundario,
            fontSize: '1.5vw ',
            cursor: 'pointer'
          }}
          onClick={() => eliminarAYD(cardAntes.id)}
        />
      </DashboardServicioAYDCardDiv>
    </>
  )
}

export default DashboardServicioAYDCard
