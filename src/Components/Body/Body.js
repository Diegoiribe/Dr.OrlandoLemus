import React from 'react'
import styled from 'styled-components'

import imagenTwo from '../../img/doctor2.webp'

import { colorPrimario, colorSecundario, fondoPrimario } from '../UI/Variables'
import { BotonBody } from '../Boton/Boton'
import { Link } from 'react-router-dom'

const BodyContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 10% 26.6% 16.6% 36.6% 10%;
  grid-template-rows: 10% 30% auto 30%;
  @media (max-width: 980px) {
    grid-template-columns: 5% 90% 5%;
    grid-template-rows: 4% 81% 15%;
  }
`
const BodyCardOne = styled.div`
  grid-column: 4/5;
  grid-row: 2/5;

  background-size: cover;
  background-position: center;
  border-radius: 5px;
  margin: 0.5rem;
`
const BodyCardTwo = styled.div`
  grid-column: 2/3;
  grid-row: 4/5;

  background-size: cover;
  background-position: center;
  border-radius: 5px;
  margin: 0.5rem;
`
const BodyCardThree = styled.div`
  grid-column: 3/4;
  grid-row: 4/5;

  background-size: cover;
  background-position: center;
  border-radius: 5px;
  margin: 0.5rem;
`

const BodyCardFour = styled.div`
  grid-column: 2/4;
  grid-row: 2/5;
  background: url(https://scontent.fcul1-1.fna.fbcdn.net/v/t39.30808-6/312916261_450165270572863_8040342826820066430_n.png?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF5sLrqSgDRijTb_5QnO1QtM75k5m-XNR8zvmTmb5c1Hx5EQkQ5fCJyLYKvsMUAzLW6-eNJEvma8q_qtZmNx1ZW&_nc_ohc=bmO5IYlRcdAAX_qv2B0&_nc_oc=AQmuBnf45zEn-L3ZfUnizNyonqi8H5tDObwVmoci0rJh2uNGjmxWWcgA4LDJPSeY1O8&_nc_ht=scontent.fcul1-1.fna&oh=00_AfDpozsqyLV-lW4-pnQZ7FujmdXoy7kitcU0ewjJCimj8w&oe=655698EB);
  background-position: center left 60%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  margin: 1.5rem;
  display: flex;
  justify-content: end;
  flex-direction: column;
  align-items: left;
  padding: 20vh 10vw;
  @media (max-width: 980px) {
    grid-column: 2/3;
    grid-row: 2/3;
    margin: 5.5rem 0.5rem 0.5rem;
    background-position: center;
  }
`
const BodyCardFive = styled.div`
  grid-column: 4/5;
  grid-row: 2/4;
  background: url(https://scontent.fcul1-1.fna.fbcdn.net/v/t1.6435-9/42627575_538535219929148_4248989533657366528_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeGSMzzTpFlzvCNOST-f6hNEdrjJyNXVjG12uMnI1dWMbRjtfvh1Jc_K_IaZaM-Bz-rwUt1l9FmKFkWavS3dg89Y&_nc_ohc=qzMTNFj-QswAX8cjFzW&_nc_ht=scontent.fcul1-1.fna&oh=00_AfDwlc1HCoYJ0FJmV66YaE9ciNT5CcKPl8V7oEY9GBrwJQ&oe=6579686F);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  margin: 1.5rem;
  display: flex;
  justify-content: end;
  flex-direction: column;
  align-items: left;
  @media (max-width: 980px) {
    display: none;
  }
`
const BodyCardSix = styled.div`
  grid-column: 4/5;
  grid-row: 4/5;
  background: ${colorPrimario};
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  margin: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: ${colorSecundario};

    font-size: 3rem;
    padding: 1rem;
  }
  @media (max-width: 980px) {
    grid-column: 2/3;
    grid-row: 3/4;
    background-position: center;
    margin: 1.5rem 0.5rem 0.5rem;
    h1 {
      font-size: 2rem;
    }
  }
`

const Body = () => {
  const styles = {
    fontSize: '3rem',
    color: colorSecundario,
    width: '100%'
  }

  // Aplicar estilos condicionales en función del ancho de la pantalla
  if (window.innerWidth <= 980) {
    styles.width = '100%'
    styles.fontSize = '2.5rem'
  }

  return (
    <BodyContainer>
      {/* <BodyCardOne></BodyCardOne>
      <BodyCardTwo></BodyCardTwo> */}
      {/* <BodyCardThree></BodyCardThree> */}
      <BodyCardFour>
        <h1 style={styles}>Dr. Orlado Lemus</h1>
        <Link to="/Cita">
          <BotonBody titulo="Haz tu cita" />
        </Link>
      </BodyCardFour>
      <BodyCardFive></BodyCardFive>
      <BodyCardSix>
        <h1>+52 66-71-59-87-96</h1>
      </BodyCardSix>
    </BodyContainer>
  )
}

export default Body
