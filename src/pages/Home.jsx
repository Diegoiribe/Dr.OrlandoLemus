import React from 'react'
import { Link } from 'react-router-dom'
import Body from '../Components/Body/Body'
import Footer from '../Components/Footer/Footer'
import Main from '../Components/Main/Main'
import Equipo from '../Components/Equipo/Equipo'

const Home = (props) => {
  const { colaboradores } = props
  return (
    <>
      <Body />
      <Main />
      <Equipo colaboradores={colaboradores} />
      <Footer />
    </>
  )
}

export default Home
