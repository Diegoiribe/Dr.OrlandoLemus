import React, { useState } from 'react'
import styled from 'styled-components'
import {
  CampoContactoInformacion,
  TextAreaContacto
} from '../../CampoContacto/CampoContacto'
import { colorPrimario } from '../../UI/Variables'
import DashboardServicioCard from './DashboardServicioCard'
import DashboardServicioAYDCard from './DashboardServicioAYDCard'
import { BotonContacto } from '../../Boton/Boton'
import { v4 as uuid } from 'uuid'

const DashboardServicio = ({
  services,
  cardAntes,
  eliminarAYD,
  crearServicio,
  eliminarServicio,
  crearAYD
}) => {
  const [fotoAntes, setFotoAntes] = useState('')
  const [fotoDespues, setFotoDespues] = useState('')
  const [photo, setPhoto] = useState('')
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado' + e)
    let datosAEnviar = {
      photo,
      name,
      text,
      fav: false,
      id: uuid()
    }
    console.log(datosAEnviar)
    crearServicio(datosAEnviar)
  }

  const handleSubmitAYD = (e) => {
    e.preventDefault()
    console.log('Formulario enviado' + e)
    let datosAEnviar = {
      fotoAntes,
      fotoDespues,
      id: uuid()
    }
    console.log(datosAEnviar)
    crearAYD(datosAEnviar)
  }

  return (
    <div>
      <div style={{ margin: '0 0 3vh' }}>
        <h3 style={{ color: colorPrimario }}>Registrar servicios</h3>
        <form onSubmit={handleSubmit}>
          <CampoContactoInformacion
            width="99%"
            value={photo}
            setValor={setPhoto}
            placeholder="Ingresa una URL"
            type="URL"
          />
          <CampoContactoInformacion
            width="99%"
            value={name}
            setValor={setName}
            placeholder="Ingresa el nombre del servicio"
          />
          <TextAreaContacto
            width="99%"
            value={text}
            setValor={setText}
            placeholder="Ingresa una descripcion"
          />

          <BotonContacto titulo="Crear servicio" />
        </form>
      </div>
      <div>
        {services.map((services) => (
          <DashboardServicioCard
            key={services.id}
            services={services}
            eliminarServicio={eliminarServicio}
          />
        ))}
      </div>
      <div style={{ margin: '5vh 0 3vh' }}>
        <h3 style={{ color: colorPrimario }}>Registrar antes y despues</h3>
        <form onSubmit={handleSubmitAYD}>
          <CampoContactoInformacion
            width="99%"
            value={fotoAntes}
            setValor={setFotoAntes}
            placeholder="Ingresa una URL de antes"
            type="URL"
          />
          <CampoContactoInformacion
            width="99%"
            value={fotoDespues}
            setValor={setFotoDespues}
            placeholder="Ingresa una URL de despues"
            type="URL"
          />
          <BotonContacto titulo="Crear antes y despues" />
        </form>
      </div>
      <div>
        {cardAntes.map((cardAntes) => (
          <DashboardServicioAYDCard
            key={cardAntes.id}
            cardAntes={cardAntes}
            eliminarAYD={eliminarAYD}
          />
        ))}
      </div>
    </div>
  )
}

export default DashboardServicio
