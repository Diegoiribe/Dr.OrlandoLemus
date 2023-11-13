import React from 'react'
import styled from 'styled-components'

const ImgDiv = styled.div`
  min-width: 31%;
  min-height: 40vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  margin: 0.5rem 0;
`

const CardInstalaciones = (props) => {
  const { foto, activa } = props.datos
  return (
    <>
      <ImgDiv
        style={{
          backgroundImage: `url(${foto})`,
          display: activa ? 'block' : 'none'
        }}
      />
    </>
  )
}

export default CardInstalaciones
