import React from 'react'
import styled from 'styled-components'
import { colorPrimario, colorSecundario, fondoPrimario } from '../UI/Variables'

const CardBAndADiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1%;
  height: 45vh;
  width: 48%;
  @media (max-width: 980px) {
    width: 98%;
    height: 35vh;
  }
`

const CardImg = styled.div`
  width: 50%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin: 0 1%;
`

const CardBAndA = (props) => {
  const { fotoAntes, fotoDespues } = props.datos
  return (
    <CardBAndADiv>
      <CardImg
        style={{
          backgroundImage: `url(${fotoAntes})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      ></CardImg>
      <CardImg
        style={{
          backgroundImage: `url(${fotoDespues})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      ></CardImg>
    </CardBAndADiv>
  )
}

export default CardBAndA
