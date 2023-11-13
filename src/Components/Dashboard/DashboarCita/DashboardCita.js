import React from 'react'
import styled from 'styled-components'
import DashboardCitaCard from './DashboardCitaCard'

const DashboardCita = ({ cita, heightCita, eliminarCita }) => {
  return (
    <>
      {cita.map((cita) => (
        <DashboardCitaCard
          key={cita.id}
          cita={cita}
          heightCita={heightCita}
          eliminarCita={eliminarCita}
        />
      ))}
    </>
  )
}

export default DashboardCita
