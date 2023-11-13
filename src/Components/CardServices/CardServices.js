import React from 'react'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add'
import {
  colorPrimario,
  fondoPrimario,
  colorFuerte,
  colorSecundario,
  colorservice
} from '../UI/Variables'
import { style } from '@mui/system'

const CardServicesOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10%;
  align-items: center;
  margin: 1% 10%;
  width: 78%;
  flex-grow: 1;
  border-bottom: 1px solid ${fondoPrimario};
  height: 15vh; // Cambio de altura si está activo
  @media (max-width: 980px) {
    padding: 0;
  }
`

const H3 = styled.h3`
  color: ${colorPrimario};
  font-size: 2rem;
  @media (max-width: 980px) {
    font-size: 1.25rem;
    max-width: 80%;
  }
`

const Circulo = styled.div`
  width: 3.5vw;
  height: 3.5vw;
  background: ${colorFuerte};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 980px) {
    background: ${colorservice};
    box-shadow: none;
  }
`

const ContainerTextDiv = styled.div`
  min-height: 40vh;
  width: 40vw;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  @media (max-width: 980px) {
    min-height: 60vh;
    width: 60vw;
  }
`

const CardServicesP = styled.p`
  font-size: 1.1vw;
  color: ${colorPrimario};
  margin: 0.5rem 0;
  @media (max-width: 980px) {
    font-size: 0.75rem;
  }
`

const CardServices = ({ service, height }) => {
  const { fav, id, photo, text } = service
  console.log('height:', height)
  const styled = {
    color: colorSecundario
  }
  const styledCard = {
    height: '50vh',
    width: '88%',
    margin: '1% 5%',
    padding: '0 5%',
    transition: 'height 0.3s ease',
    overflow: 'hidden'
  }
  const styledPhoto = {
    backgroundImage: `url(${photo})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center right 30%',
    width: '20vw',
    height: '45vh',
    borderRadius: '10px'
  }
  if (window.innerWidth < 980) {
    styled.color = colorPrimario
    styledCard.flexDirection = 'column'
    styledCard.padding = '0 1%'
    styledCard.height = '85vh'
    styledPhoto.width = '100%'
    styledPhoto.height = '25vh'
    styledPhoto.margin = '1rem 0'
  }

  const parrafos = text.split('\n')
  const parrafosRenderizados = parrafos.map((parrafo, index) => (
    <CardServicesP key={index}>{parrafo}</CardServicesP>
  ))
  return (
    <>
      {fav ? (
        <CardServicesOne onClick={() => height(id)} style={styledCard}>
          <ContainerTextDiv>
            <H3>{service.name}</H3>
            <div>{parrafosRenderizados}</div>
          </ContainerTextDiv>
          <div style={styledPhoto} />
        </CardServicesOne>
      ) : (
        <CardServicesOne
          style={{ transition: 'height 0.3s ease', overflow: 'hidden' }}
        >
          <H3>{service.name}</H3>
          <Circulo onClick={() => height(id)}>
            <AddIcon style={styled} />
          </Circulo>
        </CardServicesOne>
      )}
    </>
  )
}

export default CardServices
