import React from 'react'
import styled from 'styled-components'
import DashboardContactoCard from './DashboardContactoCard'

const DashboardContacto = ({ contactoRegistro, eliminarContacto }) => {
  return (
    <>
      {contactoRegistro.map((contacto) => (
        <DashboardContactoCard
          key={contacto.id}
          contactoRegistro={contacto}
          eliminarContacto={eliminarContacto}
        />
      ))}
    </>
  )
}

export default DashboardContacto
