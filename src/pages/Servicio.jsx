import React from 'react'
import HomeServices from '../Components/HomeServices/HomeServices'
import BAndA from '../Components/BAndA/BAndA'
import EquipoBAndA from '../Components/EquipoBAndA/EquipoBAndA'
import Footer from '../Components/Footer/Footer'

const Servicio = ({ services, height, cardAntes }) => {
  // Verifica si services y like están definidos antes de pasarlos

  return (
    <>
      <HomeServices services={services} height={height} />
      <BAndA />
      <EquipoBAndA cardAntes={cardAntes} />
      <Footer />
    </>
  )
}

export default Servicio
