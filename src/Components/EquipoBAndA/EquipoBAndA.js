import React from 'react'
import styled from 'styled-components'
import CardBAndA from '../CardBAndA/CardBAndA'

const EquipoBAndADiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
  width: 80%;
  margin: 0.5rem 10%;
  flex-wrap: wrap;
  @media (max-width: 980px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`

const EquipoBAndA = ({ cardAntes }) => {
  return (
    <EquipoBAndADiv>
      {cardAntes.map((cardData, index) => {
        return <CardBAndA datos={cardData} key={index} />
      })}
    </EquipoBAndADiv>
  )
}

export default EquipoBAndA
