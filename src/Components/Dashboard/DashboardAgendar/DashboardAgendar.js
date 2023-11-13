import React, { useState } from 'react'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'
import {
  colorPrimario,
  colorSecundario,
  fondoPrimario
} from '../../UI/Variables'
import { CampoContactoInformacion } from '../../CampoContacto/CampoContacto'
import { BotonContacto } from '../../Boton/Boton'
import DashboardAgendarCS from './DashboardAgendarCS'
import DashboardAgendarD from './DashboardAgendarD'
import DashboardAgendarHora from './DashboardAgendarHora'

const DashboardAgendar = ({
  citaservice,
  eliminarCitaService,
  citaDoctor,
  eliminarDoctor,
  hora,
  eliminarHora,
  crearServicioEdicion,
  crearDoctor,
  crearHorario
}) => {
  const [servicio, setServicio] = useState('')
  const [doctor, setDoctor] = useState('')
  const [horario, setHorario] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let datosAEnviar = {
      name: servicio,
      id: uuid()
    }
    console.log(datosAEnviar)
    crearServicioEdicion(datosAEnviar)
  }

  const handleSubmitDoctor = (e) => {
    e.preventDefault()
    let datosAEnviar = {
      name: doctor,
      id: uuid()
    }
    console.log(datosAEnviar)
    crearDoctor(datosAEnviar)
  }

  const handleSubmitHorario = (e) => {
    e.preventDefault()
    let datosAEnviar = {
      tiempo: horario,
      activa: false,
      id: uuid()
    }
    console.log(datosAEnviar)
    crearHorario(datosAEnviar)
  }

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <div style={{ width: '80%', margin: '0 0 3vh' }}>
        <h3 style={{ color: colorPrimario }}>Servicios</h3>
        <form onSubmit={handleSubmit}>
          <CampoContactoInformacion
            width="99%"
            placeholder="Ingresa un servico"
            value={servicio}
            setValor={setServicio}
          />
          <BotonContacto titulo="Crear servicio" width="100%" />
        </form>
      </div>
      <div style={{ width: '80%' }}>
        {citaservice.map((citaservice) => (
          <DashboardAgendarCS
            key={citaservice.id}
            citaservice={citaservice}
            eliminarCitaService={eliminarCitaService}
          />
        ))}
      </div>
      <div style={{ width: '80%', margin: '3vh 0 3vh' }}>
        <h3 style={{ color: colorPrimario }}>Doctores</h3>
        <form onSubmit={handleSubmitDoctor}>
          <CampoContactoInformacion
            width="99%"
            placeholder="Ingresa un doctor"
            value={doctor}
            setValor={setDoctor}
          />
          <BotonContacto titulo="Crear doctor" width="100%" />
        </form>
      </div>
      <div style={{ width: '80%' }}>
        {citaDoctor.map((citaDoctor) => (
          <DashboardAgendarD
            key={citaDoctor.id}
            citaDoctor={citaDoctor}
            eliminarDoctor={eliminarDoctor}
          />
        ))}
      </div>
      <div style={{ width: '80%', margin: '3vh 0 3vh' }}>
        <h3 style={{ color: colorPrimario }}>Horarios</h3>
        <form onSubmit={handleSubmitHorario}>
          <CampoContactoInformacion
            width="99%"
            placeholder="Ingresa un horario"
            value={horario}
            setValor={setHorario}
          />
          <BotonContacto titulo="Crear horario" width="100%" />
        </form>
      </div>
      <div
        style={{
          width: '80%',

          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}
      >
        {hora.map((hora) => (
          <DashboardAgendarHora
            key={hora.id}
            hora={hora}
            eliminarHora={eliminarHora}
          />
        ))}
      </div>
    </div>
  )
}

export default DashboardAgendar
