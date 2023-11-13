import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from '@mui/material'
import CitaServicioCard from './CitaServicioCard/CitaServicioCard'

const CitaServicioDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 80%;
  margin: 5% 10% 0 10%;
  @media (max-width: 980px) {
    margin: 25% 10% 0 10%;
  }
`

const CitaServicio = ({ citaservice }) => {
  return (
    <CitaServicioDiv>
      {citaservice.map((citaservice, index) => {
        return <CitaServicioCard citaservice={citaservice} key={index} />
      })}
    </CitaServicioDiv>
  )
}

export default CitaServicio
