import React, { useState } from 'react'
import styled from 'styled-components'
import {
  colorPrimario,
  colorSecundario,
  fondoPrimario
} from '../Components/UI/Variables'
import Footer from '../Components/Footer/Footer'
import DashboardCita from '../Components/Dashboard/DashboarCita/DashboardCita'
import DashboardContacto from '../Components/Dashboard/DashboardContacto/DashboardContacto'
import DashboardInicio from '../Components/Dashboard/DashboardInicio/DashboardInicio'
import DashboardServicio from '../Components/Dashboard/DashboardServicio/DashboardServicio'
import DashboardAgendar from '../Components/Dashboard/DashboardAgendar/DashboardAgendar'

const DashboardDiv = styled.div`
  margin: 7.5% 10% 9.5% 10%;
  min-height: 75vh;
  width: 80vw;
  display: flex;
  justify-content: space-around;
  align-items: start;
  flex-direction: row;
`

const HeaderDashboard = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  min-height: 50vh;
  width: 15%;
`

const ContenidoDashboard = styled.div`
  border-radius: 10px;
  width: 77.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

const CardHeader = styled.div`
  background: ${colorSecundario};
  border: 1px solid ${colorPrimario};
  border-radius: 5px;
  height: 5vh;
  width: 90%;
  margin: 2.5% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  h2 {
    color: ${colorPrimario};
  }
`

const SubCardHeader = styled.div`
  background: ${colorPrimario};
  border-radius: 5px;
  height: 4vh;
  width: 80%;
  margin: 1% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  h3 {
    color: ${colorSecundario};
  }
`

const Dashboard = ({
  cita,
  heightCita,
  eliminarCita,
  contactoRegistro,
  eliminarContacto,
  colaboradores,
  crearColaborador,
  eliminarColaborador,
  services,
  cardAntes,
  crearAYD,
  eliminarAYD,
  crearServicio,
  eliminarServicio,
  citaservice,
  crearServicioEdicion,
  eliminarCitaService,
  citaDoctor,
  crearDoctor,
  eliminarDoctor,
  hora,
  crearHorario,
  eliminarHora
}) => {
  const [informacion, setInformacion] = useState(false)
  const [edicion, setEdicion] = useState(false)

  //SubCatergorias informacion

  const [citas, setCitas] = useState(false)
  const [contacto, setContacto] = useState(false)

  const informacionActiva = () => {
    setInformacion(!informacion)
    console.log(informacion)
    if (informacion === true) {
      setContacto(false)
      setCitas(false)
    }
  }

  const edicionActiva = () => {
    setEdicion(!edicion)
    console.log(edicion)
    if (edicion === true) {
      setContacto(false)
      setInicio(false)
      setCitas(false)
      setServicio(false)

      setAgendarCita(false)
    }
  }

  const citasActiva = () => {
    setCitas(!citas)
    console.log(citas)
    if (
      contacto === true ||
      agendarCita === true ||
      inicio === true ||
      servicio === true
    ) {
      setAgendarCita(false)
      setInicio(false)
      setServicio(false)
      setContacto(false)
    }
  }

  const contactoActiva = () => {
    setContacto(!contacto)
    console.log(contacto)
    if (contacto === false) {
      setInicio(false)
      setCitas(false)
      setServicio(false)

      setAgendarCita(false)
    }
  }

  //SubCatergorias edicion

  const [inicio, setInicio] = useState(false)
  const [servicio, setServicio] = useState(false)

  const [agendarCita, setAgendarCita] = useState(false)

  const inicioActiva = () => {
    console.log(inicio)
    setInicio(!inicio)
    console.log(inicio)
    if (inicio === false) {
      setContacto(false)
      setCitas(false)
      setServicio(false)

      setAgendarCita(false)
    }
  }

  const servicioActiva = () => {
    setServicio(!servicio)
    console.log(servicio)
    if (servicio === false) {
      setContacto(false)
      console.log(contacto)
      setCitas(false)
      console.log(citas)
      setInicio(false)
      console.log(inicio)

      setAgendarCita(false)
      console.log(agendarCita)
    }
  }

  const agendarCitaActiva = () => {
    setAgendarCita(!agendarCita)
    console.log(agendarCita)
    if (agendarCita === false) {
      setContacto(false)
      setCitas(false)
      setInicio(false)

      setServicio(false)
    }
  }

  return (
    <>
      <DashboardDiv>
        <HeaderDashboard>
          <CardHeader
            onClick={() => {
              informacionActiva()
            }}
          >
            <h2>Informacion</h2>
          </CardHeader>

          {informacion && (
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'start',
                flexDirection: 'column'
              }}
            >
              <SubCardHeader
                onClick={() => {
                  citasActiva()
                }}
              >
                <h3>Citas</h3>
              </SubCardHeader>
              <SubCardHeader
                onClick={() => {
                  contactoActiva()
                }}
              >
                <h3>Contacto</h3>
              </SubCardHeader>
            </div>
          )}

          <CardHeader
            onClick={() => {
              edicionActiva()
            }}
          >
            <h2>Edicion</h2>
          </CardHeader>
          {edicion && (
            <div
              style={{
                width: '100%',

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'start',
                flexDirection: 'column'
              }}
            >
              <SubCardHeader
                onClick={() => {
                  inicioActiva()
                }}
              >
                <h3>Inicio</h3>
              </SubCardHeader>
              <SubCardHeader
                onClick={() => {
                  servicioActiva()
                }}
              >
                <h3>Servicio</h3>
              </SubCardHeader>

              <SubCardHeader
                onClick={() => {
                  agendarCitaActiva()
                }}
              >
                <h3>Agendar Cita</h3>
              </SubCardHeader>
            </div>
          )}
        </HeaderDashboard>

        {/* Renderizado de contenido */}
        {citas && (
          <ContenidoDashboard>
            <DashboardCita
              cita={cita}
              heightCita={heightCita}
              eliminarCita={eliminarCita}
            />
          </ContenidoDashboard>
        )}
        {contacto && (
          <ContenidoDashboard>
            <DashboardContacto
              contactoRegistro={contactoRegistro}
              eliminarContacto={eliminarContacto}
            />
          </ContenidoDashboard>
        )}

        {inicio && (
          <ContenidoDashboard>
            <DashboardInicio
              colaboradores={colaboradores}
              crearColaborador={crearColaborador}
              eliminarColaborador={eliminarColaborador}
            />
          </ContenidoDashboard>
        )}
        {servicio && (
          <ContenidoDashboard>
            <DashboardServicio
              services={services}
              cardAntes={cardAntes}
              crearAYD={crearAYD}
              eliminarAYD={eliminarAYD}
              crearServicio={crearServicio}
              eliminarServicio={eliminarServicio}
            />
          </ContenidoDashboard>
        )}
        {agendarCita && (
          <ContenidoDashboard>
            <DashboardAgendar
              citaservice={citaservice}
              crearServicioEdicion={crearServicioEdicion}
              eliminarCitaService={eliminarCitaService}
              citaDoctor={citaDoctor}
              crearDoctor={crearDoctor}
              eliminarDoctor={eliminarDoctor}
              hora={hora}
              crearHorario={crearHorario}
              eliminarHora={eliminarHora}
            />
          </ContenidoDashboard>
        )}
      </DashboardDiv>

      <Footer />
    </>
  )
}

export default Dashboard
