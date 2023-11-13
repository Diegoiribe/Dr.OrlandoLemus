import React, { useState } from 'react'
import styled from 'styled-components'
import { colorPrimario, colorSecundario } from '../../UI/Variables'
import { Link } from 'react-router-dom'
import { BotonCardCita } from '../../Boton/Boton'
import { useLocation } from 'react-router-dom'

const CitaFechaCardDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid ${colorPrimario};
  width: 12.5vw;
  margin: 1%;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 980px) {
    width: 8rem;
  }
`

const PActive = styled.p`
  color: ${colorSecundario};
  font-size: 1vw;
  @media (max-width: 980px) {
    font-size: 1rem;
  }
`

const P = styled.p`
  color: ${colorPrimario};
  font-size: 1vw;
  @media (max-width: 980px) {
    font-size: 1rem;
  }
`

const CitaFechaCard = ({ hora, horaSeleccionada }) => {
  const { id, activa, tiempo } = hora
  const [selectedId, setSelectedId] = useState('') // Estado para guardar el id

  const handleCardClick = () => {
    console.log(tiempo)
    if (activa) {
      setSelectedId(tiempo)
      console.log(selectedId)
      // Actualizar el estado con el id al hacer clic
    } else if (tiempo !== selectedId) {
      setSelectedId(tiempo)
      console.log(selectedId)
    }
  }

  const location = useLocation()
  const currentURL = location.pathname

  const cleanedURL = currentURL.split('/Hora/')[0]

  return (
    <>
      {activa ? (
        <CitaFechaCardDiv
          onClick={() => {
            handleCardClick()
            horaSeleccionada(id)

            console.log(id)
            console.log(activa)
          }}
          style={{ backgroundColor: colorPrimario }}
        >
          <Link
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              textDecoration: 'none',
              padding: '5%',
              height: '100%',
              alignItems: 'center'
            }}
            to={`${cleanedURL}/Hora/${selectedId}`}
          >
            <PActive>{tiempo}</PActive>
          </Link>
        </CitaFechaCardDiv>
      ) : (
        <CitaFechaCardDiv
          onClick={() => {
            handleCardClick()
            horaSeleccionada(id)

            console.log(id)
            console.log(activa)
          }}
        >
          <Link
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              textDecoration: 'none',
              padding: '5%',
              height: '100%',
              alignItems: 'center'
            }}
            to={`${cleanedURL}/Hora/${tiempo}`}
          >
            <P>{tiempo}</P>
          </Link>
        </CitaFechaCardDiv>
      )}
    </>
  )
}

export default CitaFechaCard
