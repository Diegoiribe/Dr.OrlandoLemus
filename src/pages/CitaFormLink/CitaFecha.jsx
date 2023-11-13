import './CitaFecha.css'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { DemoItem } from '@mui/x-date-pickers/internals/demo'
import { colorFuerte, colorPrimario } from '../../Components/UI/Variables'
import CitaFechaCard from '../../Components/CitaForm/CitaFecha/CitaFechaCard'
import { BotonCardCita } from '../../Components/Boton/Boton'
import Footer from '../../Components/Footer/Footer'
import { useLocation } from 'react-router-dom'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'

const CitaFechaLInkDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  margin: 7.5% 10% 5% 10%;
  width: 80%;
  max-height: 75vh;
  @media (max-width: 980px) {
    margin: 15% 5% 0;
    width: 90%;
    flex-direction: column-reverse;
    max-height: 150vh;
  }
`

const H1 = styled.h1`
  color: ${colorPrimario};
  font-size: 2rem;
  @media (max-width: 980px) {
    font-size: 1.5rem;
  }
`
const DivHora = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 40%;
  justify-content: space-around;
  height: 70vh;
  @media (max-width: 980px) {
    width: 100%;
    height: 75vh;
    margin-bottom: 1rem;
  }
`

const CitaFechaLink = ({ hora, horaSeleccionada }) => {
  const [time, setTime] = useState(dayjs(''))
  const { registrarMensaje, id } = hora

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado', e)
    let datosAEnviar = {
      time
    }

    console.log(datosAEnviar)
    navigate(`${URL}/Dia/${time}/Informacion`)
  }

  const location = useLocation()
  const currentURL = location.pathname

  const URL = currentURL

  const navigate = useNavigate()

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CitaFechaLInkDiv>
          <div>
            <LocalizationProvider
              style={{ marginTop: '0' }}
              dateAdapter={AdapterDayjs}
            >
              <DemoItem style={{ marginTop: '0' }} label="">
                <DateCalendar
                  style={{
                    color: colorPrimario,
                    height: '70vh',
                    fontSize: '.5vw'
                  }}
                  valor={time}
                  onChange={(newValue) => setTime(newValue)}
                />
              </DemoItem>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <BotonCardCita titulo="Siguiente" />
              </div>
            </LocalizationProvider>
          </div>
          <DivHora>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <H1>Elige una hora</H1>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '100%',
                justifyContent: 'center'
              }}
            >
              {hora.map((horaItem, index) => (
                <CitaFechaCard
                  hora={horaItem}
                  key={index}
                  horaSeleccionada={horaSeleccionada}
                />
              ))}
            </div>
          </DivHora>
        </CitaFechaLInkDiv>
      </form>
      <Footer />
    </>
  )
}

export default CitaFechaLink
