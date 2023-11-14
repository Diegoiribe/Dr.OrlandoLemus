import React from 'react'
import styled from 'styled-components'
import { colorPrimario, colorSecundario, fondoPrimario } from '../UI/Variables'
import { BotonBody } from '../Boton/Boton'
import { Link } from 'react-router-dom'
import img1 from '../../img/img1.png'
import img2 from '../../img/img2.png'
import img9 from '../../img/img3.png'
import img4 from '../../img/img4.png'
import img5 from '../../img/img5.png'
import img6 from '../../img/img6.png'
import img10 from '../../img/img10.png'
import img11 from '../../img/img11.png'
import img12 from '../../img/img12.png'

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
  grid-column: 2/3;
  grid-row: 2/4;
  background: url(${img1});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  margin: 0.5rem;
  @media (max-width: 980px) {
    display: none;
  }
`
const BodyCardTwo = styled.div`
  grid-column: 2/3;
  grid-row: 4/5;
  background: url(${img2});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  margin: 0.5rem;
  @media (max-width: 980px) {
    display: none;
  }
`
const BodyCardThree = styled.div`
  grid-column: 3/4;
  grid-row: 2/4;
  background: url(${img5});
  background-size: cover;
  background-position: center left 107.5%;
  border-radius: 20px;
  margin: 0.5rem;
  @media (max-width: 980px) {
    display: none;
  }
`

const BodyCardFour = styled.div`
  grid-column: 3/4;
  grid-row: 4/5;
  background: url(${img4});
  background-position: center left 60%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  margin: 0.5rem;

  @media (max-width: 980px) {
    display: none;
  }
`
const BodyCardFive = styled.div`
  grid-column: 4/5;
  grid-row: 2/4;
  background: url(${img12});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  margin: 0.5rem;
  display: flex;
  justify-content: end;
  flex-direction: column;
  align-items: left;
  padding: 4rem 9rem;
  @media (max-width: 980px) {
    grid-column: 2/3;
    grid-row: 2/3;
    margin: 5.5rem 0.5rem 0.5rem;
    background: url(https://scontent.fcul1-1.fna.fbcdn.net/v/t39.30808-6/312916261_450165270572863_8040342826820066430_n.png?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF5sLrqSgDRijTb_5QnO1QtM75k5m-XNR8zvmTmb5c1Hx5EQkQ5fCJyLYKvsMUAzLW6-eNJEvma8q_qtZmNx1ZW&_nc_ohc=bmO5IYlRcdAAX_qv2B0&_nc_oc=AQmuBnf45zEn-L3ZfUnizNyonqi8H5tDObwVmoci0rJh2uNGjmxWWcgA4LDJPSeY1O8&_nc_ht=scontent.fcul1-1.fna&oh=00_AfDpozsqyLV-lW4-pnQZ7FujmdXoy7kitcU0ewjJCimj8w&oe=655698EB);
    background-position: center left 50%;
    background-size: cover;
    padding: 4rem 3rem;
  }
`
const BodyCardSix = styled.div`
  grid-column: 4/5;
  grid-row: 4/5;
  background: url(${img6});
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    display: none;
  }

  @media (max-width: 980px) {
    grid-column: 2/3;
    grid-row: 3/4;
    background: ${colorPrimario};
    margin: 1.5rem 0.5rem 0.5rem;
    h1 {
      display: block;
      color: ${colorSecundario};
    }
  }
`

const Body = () => {
  const styles = {
    fontSize: '3rem',
    width: '100%',
    color: colorPrimario
  }

  // Aplicar estilos condicionales en función del ancho de la pantalla
  if (window.innerWidth <= 980) {
    styles.width = '100%'
    styles.fontSize = '2.5rem'
    styles.color = colorSecundario
  }

  return (
    <BodyContainer>
      <BodyCardOne></BodyCardOne>
      <BodyCardTwo></BodyCardTwo>
      <BodyCardThree></BodyCardThree>
      <BodyCardFour></BodyCardFour>
      <BodyCardFive>
        <h1 style={styles}>Dr. Orlado Lemus</h1>
        <Link style={{ width: '100%' }} to="/Cita">
          <BotonBody titulo="Haz tu cita" />
        </Link>
      </BodyCardFive>
      <BodyCardSix>
        <h1>+52 66-74-50-70-62</h1>
      </BodyCardSix>
    </BodyContainer>
  )
}

export default Body
