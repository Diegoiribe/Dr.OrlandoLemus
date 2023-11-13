import React, { useState } from 'react'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'
import { CampoContactoInformacion } from '../../CampoContacto/CampoContacto'
import { BotonCardCita } from '../../Boton/Boton'
import DashboardInicioCard from './DashBoardInicioCard'
import { colorPrimario } from '../../UI/Variables'

const DashboardInicio = ({
  colaboradores,
  crearColaborador,
  eliminarColaborador
}) => {
  const [foto, setFoto] = useState('')
  const [nombre, setNombre] = useState('')
  const [puesto, setPuesto] = useState('')
  const [color, setColor] = useState('')

  const handleSubmitForm = (e) => {
    e.preventDefault()
    let datosAEnviar = {
      foto,
      nombre,
      puesto,
      fondoPrimario: color,
      id: uuid()
    }

    crearColaborador(datosAEnviar)
  }

  return (
    <>
      <h3 style={{ color: colorPrimario }}>Crear colaborador</h3>
      <form
        style={{ display: 'flex', maxWidth: '100% ', flexWrap: 'wrap' }}
        onSubmit={handleSubmitForm}
      >
        <CampoContactoInformacion
          width="99%"
          type="URL"
          placeholder="URL de imagen"
          value={foto}
          setValor={setFoto}
        />
        <CampoContactoInformacion
          width="99%"
          placeholder="Nombre"
          value={nombre}
          setValor={setNombre}
        />
        <CampoContactoInformacion
          width="92%"
          placeholder="Puesto"
          value={puesto}
          setValor={setPuesto}
        />
        <CampoContactoInformacion
          width="6vh"
          height="6vh"
          borderRadius="50%"
          type="color"
          placeholder="Color"
          value={color}
          setValor={setColor}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '50%',
            margin: '1vh 0'
          }}
        >
          <BotonCardCita titulo="Crear colaborador" />
        </div>
      </form>

      <h3 style={{ color: colorPrimario, margin: '5vh 0 0' }}>Colaboradores</h3>

      <div
        style={{
          margin: '1vh 0',
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }}
      >
        {colaboradores.map((colaboradores, index) => {
          return (
            <DashboardInicioCard
              colaboradores={colaboradores}
              eliminarColaborador={eliminarColaborador}
              key={index}
            />
          )
        })}
      </div>
    </>
  )
}

export default DashboardInicio
