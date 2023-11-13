import React from 'react'
import styled from 'styled-components'
import CitaServicio from '../Components/CitaForm/CitaServicio/CitaServicio'
import Footer from '../Components/Footer/Footer'

const Cita = ({ citaservice }) => {
  return (
    <>
      <CitaServicio citaservice={citaservice} />
      <Footer />
    </>
  )
}

export default Cita
