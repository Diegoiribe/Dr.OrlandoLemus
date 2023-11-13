import React from 'react'
import styled from 'styled-components'
import { colorPrimario, colorSecundario, fondoPrimario } from '../UI/Variables'

const BAndADiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 1% 0;
  background: ${colorPrimario};
  height: 25vh;
`

const H2 = styled.h2`
  color: ${colorSecundario};
  font-size: 3rem;
  @media (max-width: 980px) {
    font-size: 2rem;
  }
`

const BAndA = () => {
  return (
    <div>
      <BAndADiv>
        <H2>Before and After</H2>
      </BAndADiv>
    </div>
  )
}

export default BAndA
