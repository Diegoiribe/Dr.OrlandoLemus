import React from 'react'
import styled from 'styled-components'
import CardServices from '../CardServices/CardServices'

const HomeServicesDiv = styled.div`
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
const CardServicesDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  border-radius: 10px;
  flex-grow: 1;
`

const HomeServices = (props) => {
  const { services, height } = props

  return (
    <HomeServicesDiv>
      <CardServicesDiv style={{}}>
        {services.map((service) => (
          <CardServices key={service.id} service={service} height={height} />
        ))}
      </CardServicesDiv>
    </HomeServicesDiv>
  )
}

export default HomeServices
