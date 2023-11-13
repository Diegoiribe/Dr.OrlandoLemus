import React from 'react'
import styled from 'styled-components'
import {
  colorPrimario,
  colorSecundario,
  fondoPrimario
} from '../../UI/Variables'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Link } from 'react-router-dom'

const CitaDoctorDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10%;
  align-items: center;
  margin: 0 10%;
  width: 78%;
  flex-grow: 1;
  border-bottom: 1px solid ${fondoPrimario};
  border-top: 1px solid ${fondoPrimario};
  height: 10vh;
`

const P = styled.p`
  color: ${colorPrimario};
  font-size: 1.25vw;
  @media (max-width: 980px) {
    font-size: 1rem;
  }
`

const CitaDoctor = ({ citaDoctor, citaservice }) => {
  return (
    <CitaDoctorDiv>
      <Link
        style={{
          minWidth: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          textDecoration: 'none'
        }}
        to={`/Cita/${citaservice.name}/Doctor/${citaDoctor.name}`}
      >
        <P>{citaDoctor.name}</P>
        <ArrowForwardIosIcon
          fontSize="small"
          style={{ color: colorPrimario }}
        />
      </Link>
    </CitaDoctorDiv>
  )
}

export default CitaDoctor
