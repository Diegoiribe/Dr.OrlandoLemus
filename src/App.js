import './App.css'
import { v4 as uuid } from 'uuid'
import React, { useState, useEffect } from 'react'
import Header from './Components/Header/Header'
import { fondoPrimario } from './Components/UI/Variables'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Servicio from './pages/Servicio'
import Contacto from './pages/Contacto'
import Cita from './pages/Cita'
import CitaDoctorLink from './pages/CitaFormLink/CitaDoctor'
import CitaFechaLink from './pages/CitaFormLink/CitaFecha'
import CitaInformacion from './pages/CitaFormLink/CitaInformacion'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuid(),
      foto: 'https://static.wixstatic.com/media/7a7b29_eeefeb695c7d4355973a216b02f62b30~mv2_d_2048_1365_s_2.jpg/v1/fill/w_1903,h_969,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7a7b29_eeefeb695c7d4355973a216b02f62b30~mv2_d_2048_1365_s_2.jpg',
      nombre: 'Harland Lohora',
      puesto: 'Doctor',
      fondoPrimario: fondoPrimario
    },
    {
      id: uuid(),
      foto: 'https://images.unsplash.com/photo-1624133172255-7717e1021429?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      nombre: 'Andrea Ruvalcaba',
      puesto: 'Enfermera',
      fondoPrimario: fondoPrimario
    },
    {
      id: uuid(),
      foto: 'https://plus.unsplash.com/premium_photo-1683134019752-70aa026fe3b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      nombre: 'Mary Castro',
      puesto: 'Enferemera',
      fondoPrimario: fondoPrimario
    },
    {
      id: uuid(),
      foto: 'https://images.unsplash.com/photo-1587500154541-1cafd74f0efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      nombre: 'Armando Del Valle Sandoval',
      puesto: 'Enfermero',
      fondoPrimario: fondoPrimario
    },
    {
      id: uuid(),
      foto: 'https://plus.unsplash.com/premium_photo-1673953510158-174d4060db8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      nombre: 'Armando Del Valle Sandoval',
      puesto: 'Enfermero',
      fondoPrimario: fondoPrimario
    },
    {
      id: uuid(),
      foto: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      nombre: 'Armando Del Valle Sandoval',
      puesto: 'Enfermero',
      fondoPrimario: fondoPrimario
    },
    {
      id: uuid(),
      foto: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      nombre: 'Armando Del Valle Sandoval',
      puesto: 'Enfermero',
      fondoPrimario: fondoPrimario
    },
    {
      id: uuid(),
      foto: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80',
      nombre: 'Armando Del Valle Sandoval',
      puesto: 'Enfermero',
      fondoPrimario: fondoPrimario
    },
    {
      id: uuid(),
      foto: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      nombre: 'Armando Del Valle Sandoval',
      puesto: 'Enfermero',
      fondoPrimario: fondoPrimario
    }
  ])

  const [loadingFromStorageColaborador, setLoadingFromStorageColaborador] =
    useState(true)

  useEffect(() => {
    // Intenta cargar datos de localStorage solo si loadingFromStorage es true
    if (loadingFromStorageColaborador) {
      const storedColaborador = localStorage.getItem('colaborador')
      if (storedColaborador) {
        setColaboradores(JSON.parse(storedColaborador))
      }
      setLoadingFromStorageColaborador(false) // Desactiva la carga desde localStorage después de cargar
    } else {
      // Guarda datos en localStorage cuando cita cambia
      localStorage.setItem('colaborador', JSON.stringify(colaboradores))
    }
  }, [colaboradores, loadingFromStorageColaborador])

  const crearColaborador = (datos) => {
    console.log(datos)
    setColaboradores([...colaboradores, datos])
  }
  const eliminarColaborador = (id) => {
    console.log('Eliminar', id)
    const nuevaColaborador = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    )
    setColaboradores(nuevaColaborador)
    // Recuperar los datos almacenados en localStorage
    const storedData = localStorage.getItem('colaborador')

    // Verificar si hay datos en localStorage
    if (storedData) {
      // Parsear los datos de JSON a un objeto JavaScript
      const data = JSON.parse(storedData)

      // Eliminar el elemento que deseas (por ejemplo, utilizando filter)
      const updatedData = data.filter((colaborador) => colaborador.id !== id)

      // Guardar los datos actualizados en localStorage
      localStorage.setItem('colaborador', JSON.stringify(updatedData))

      // Actualizar el estado si es necesario (opcional)
      setColaboradores(updatedData)
    }
  }

  //\n se usa para dar saltos linea
  const [services, setServices] = useState([
    {
      id: uuid(),
      name: 'Acné',
      photo:
        'https://img.freepik.com/foto-gratis/antes-despues-retrato-joven-retocado_23-2149121646.jpg?w=740&t=st=1699871589~exp=1699872189~hmac=1c854e03b15c8ba8d9ecbfb0c279380e72b6d6da30420c4992d044d6a1fb4935',
      text: '¿Tienes grasa no deseada en áreas específicas de tu cuerpo que no han mejorado con la dieta y el ejercicio?\nLa liposucción es un procedimiento dirigido a remover excesos de grasa en diferentes partes del cuerpo, logrando una mejor proporción, creando una figura más atractiva y femenina.\nLas áreas más comunes a las que está dirigida la liposucción son: Abdomen, Cintura, Caderas, Muslos, Espalda, Brazos y Cuello.\nPara mejores resultados, a menudo se realiza junto con otros procedimientos como Lipectomia (Tummy Tuck) y transferencia de grasa.\nDurante la consulta con tu Cirujano Plástico te ofrecerá sugerencias para obtener los resultados que deseas.',
      fav: false
    },
    {
      id: uuid(),
      name: 'Cáncer de piel',
      photo:
        'https://img.freepik.com/foto-gratis/doctora-diagnosticando-melanoma-cuerpo-paciente_23-2149365867.jpg?w=740&t=st=1699871678~exp=1699872278~hmac=495e75a66bfdbdfe8144c9e86c3b7a55dec5308855a18bbe3a49c471d7592dc4',
      text: 'Muchas personas tratan de conseguir un abdomen más plano y bien tonificado.\nCuando la dieta y el ejercicio no funcionan, es recomendable considerar una cirugía estética de abdomen. También conocida como Abdominoplastía o Lípectomia, la cual consiste en quitar exceso de grasa,  piel y en la mayoría de los casos restaurar el debilitamiento o la separación de los músculos abdominales.\nEl objetivo es crear un abdomen más plano y firme.\nUna cirugía estética de abdomen es útil para las personas que:\nHan sido incapaces de disminuir la grasa abdominal a través de ejercicio.\nAquellas que tienen exceso de piel, llantitas y/o estrías debido al embarazo y/o pérdida de peso.',
      fav: false
    },
    {
      id: uuid(),
      name: 'Lunares',
      photo:
        'https://img.freepik.com/foto-gratis/mujer-desnuda-artistica-posando_23-2149450619.jpg?w=740&t=st=1699871888~exp=1699872488~hmac=63f5bed450a6cd100ae9c1f3b424be310b901aa1b6e6ab43d1d64d07fde14be9',
      text: 'El aumento de senos es un procedimiento de Cirugía Plástica muy popular en México y el mundo. Para muchas mujeres mejorar el tamaño y/o forma de sus senos puede ayudar a sentirse más segura, atractiva y femenina.\nEsta cirugía no afecta la lactancia en futuros embarazos.',
      fav: false
    },
    {
      id: uuid(),
      name: 'Verrugas (Mezquinos)',
      photo:
        'https://img.freepik.com/foto-gratis/cerrar-gotas-agua-sobre-piel-mujer_23-2149379988.jpg?w=740&t=st=1699871952~exp=1699872552~hmac=6ab46f7428edf32958978581960277fdeb33951983834f5e00c45132b88d73b1',
      text: 'Una de los más exitosos caminos para hacer una mejora dramática en tu aspecto general, es con una cirugía de rejuvenecimiento facial.\nRecordemos que nuestra cara es nuestra carta de presentación.\nPara esto podemos ofrecerte distintos procedimientos quirúrgicos como el estiramiento facial y de cuello combinado con transferencia de grasa y cirugía de parpados, logrando con esto eliminar arrugas, piel flácida y otros signos de envejecimiento.',
      fav: false
    },
    {
      id: uuid(),
      name: 'Paño',
      photo:
        'https://img.freepik.com/foto-gratis/mujer-desnuda-colocar-cama-angulo_23-2149428583.jpg?w=740&t=st=1697692220~exp=1697692820~hmac=0f651419740e610eaeab3e4734852af12d29c1d3d8d7d8d26fdc83be1cc07250',
      text: '¿Te sientes incómodo sobre el tamaño, forma o alineación de tu nariz?\nLa rinoplastia ayuda a los pacientes a lograr una nariz de aspecto natural bien proporcionada que se combina perfectamente con el resto de su cara.',
      fav: false
    },
    {
      id: uuid(),
      name: 'Vitíligo',
      photo:
        'https://img.freepik.com/foto-gratis/hermosa-mujer-joven-vitiligo_23-2149180786.jpg?w=740&t=st=1699872015~exp=1699872615~hmac=264ca5980b30b013a800ac7ec66050a85262c0f98ace776ec72b4fafe4288181',
      text: 'Las arrugas y flacidez de la piel en el área del ojo pueden hacer que una persona parezca cansada, de edad mayor y pueden incluso interferir con la visión.\nLa Blefaroplastía (también conocida como cirugía de los párpados) la cual retira el exceso de piel y bolsas de grasa en el párpado o superior y/o inferior, ayudando a lograr una apariencia juvenil y descansada.',
      fav: false
    },
    {
      id: uuid(),
      name: 'Caída de Cabello',
      photo:
        'https://img.freepik.com/foto-gratis/hermoso-cabello-tratado-queratina_23-2149332486.jpg?w=740&t=st=1699872091~exp=1699872691~hmac=9ddbb0773bab7a6e7ca87895fb1156743ca7a8dd4c5ff91362c90d22ce6cb3c4',
      text: 'A medida que envejecemos, los cambios en la cara y el cuerpo se hacen más evidentes.\nPodemos ver líneas que aparecen alrededor de los ojos, la boca y la frente.\nTambién observamos que los huesos de la mejilla no son tan prominentes como eran antes y la piel es más flácida.\nEl proceso de envejecimiento es normal.\nEn la transferencia de grasa el cirujano plástico utiliza una microliposucción para quitar la grasa de una zona del cuerpo para luego inyectarla en otra como la cara; logrando con esto llenar zonas que perdieron volumen y estirar la piel (lifting) por efecto de carpa de circo, disminuyendo gran parte de las arrugas.\nAl mismo tiempo la grasa lleva consigo factores de crecimiento que dan a la piel una apariencia mas radiante y joven.\nTodo esto con un resultado duradero.',
      fav: false
    },
    {
      id: uuid(),
      name: 'Alergias en la piel',
      photo:
        'https://img.freepik.com/foto-gratis/mujer-que-ocupa-condicion-piel-rosacea-cara_23-2150248328.jpg?w=740&t=st=1699872171~exp=1699872771~hmac=000124e1ae02097c0d35d33ef3e297f93c88a8ce5b75082cb0e721cbe3d94ab3',
      text: 'Avances en la técnologia han permitido desarrollar rellenos no autólogos (ajenos al cuerpo) seguros y duraderos para corregir arrugas y falta de volumen que aparecen con el envejecimiento.\nPara esto contamos con ácido hialurónico e hidroxiapatita de calcio.\nDe igual manera utilizamos la tóxina botúlinica para el bloqueo muscular facial, logrando con esto una apariencia joven y descansada del rostro con un efecto duradero de 4 a 6 meses.',
      fav: false
    },
    {
      id: uuid(),
      name: 'Uña encarnada',
      photo:
        'https://img.freepik.com/foto-gratis/composicion-manos-sobre-soporte_23-2150693564.jpg?w=740&t=st=1699872205~exp=1699872805~hmac=4e724624717401e3590c637c39892159a54c4c183f389fb6a321a588249c8b0c',
      text: 'El concepto de belleza visualmente hablando es proporción, para lograr un menton y unos labios bellos necesitan tener la proporción adecuada con el resto de las estructuras de la cara.\nPara esto nos apoyamos de los rellenos como el acido hialuronico y la hidroxiapatita de calcio con resultados inmediatos y duraderos.\nPregunta a tu Cirujano Plástico las dudas sobre este procedimiento.',
      fav: false
    }
  ])

  const [loadingFromStorageServicio, setLoadingFromStorageServicio] =
    useState(true)

  useEffect(() => {
    // Intenta cargar datos de localStorage solo si loadingFromStorage es true
    if (loadingFromStorageServicio) {
      const storedServices = localStorage.getItem('services')
      if (storedServices) {
        setServices(JSON.parse(storedServices))
      }
      setLoadingFromStorageServicio(false) // Desactiva la carga desde localStorage después de cargar
    } else {
      // Guarda datos en localStorage cuando cita cambia
      localStorage.setItem('services', JSON.stringify(services))
    }
  }, [services, loadingFromStorageServicio])

  const crearServicio = (datos) => {
    console.log('Servicio registrado', datos)
    setServices([...services, datos])
  }

  const eliminarServicio = (id) => {
    console.log('Eliminar', id)
    const nuevaServices = services.filter((services) => services.id !== id)
    setServices(nuevaServices)
    // Recuperar los datos almacenados en localStorage
    const storedDataServices = localStorage.getItem('services')

    // Verificar si hay datos en localStorage
    if (storedDataServices) {
      // Parsear los datos de JSON a un objeto JavaScript
      const dataServices = JSON.parse(storedDataServices)

      // Eliminar el elemento que deseas (por ejemplo, utilizando filter)
      const updatedDataServices = dataServices.filter(
        (services) => services.id !== id
      )

      // Guardar los datos actualizados en localStorage
      localStorage.setItem('services', JSON.stringify(updatedDataServices))

      // Actualizar el estado si es necesario (opcional)
      setServices(updatedDataServices)
    }
  }

  const [citaservice, setCitaService] = useState([
    {
      name: 'Acne',
      id: uuid()
    },
    {
      name: 'Cáncer-de-piel',
      id: uuid()
    },
    {
      name: 'Lunares',
      id: uuid()
    },
    {
      name: 'Verrugas-(Mezquinos)',
      id: uuid()
    },
    {
      name: 'Paño',
      id: uuid()
    },
    {
      name: 'Vitíligo',
      id: uuid()
    },
    {
      name: 'Caída-de-Cabello',
      id: uuid()
    },
    {
      name: 'Alergias-en-la-piel',
      id: uuid()
    },
    {
      name: 'Uña-encarnada',
      id: uuid()
    }
  ])

  const [
    loadingFromStorageServicioEdicion,
    setLoadingFromStorageServicioEdicion
  ] = useState(true)

  useEffect(() => {
    // Intenta cargar datos de localStorage solo si loadingFromStorage es true
    if (loadingFromStorageServicioEdicion) {
      const storedServicioEdicion = localStorage.getItem('citaservice')
      if (storedServicioEdicion) {
        setCitaService(JSON.parse(storedServicioEdicion))
      }
      setLoadingFromStorageServicioEdicion(false) // Desactiva la carga desde localStorage después de cargar
    } else {
      // Guarda datos en localStorage cuando cita cambia
      localStorage.setItem('citaservice', JSON.stringify(citaservice))
    }
  }, [citaservice, loadingFromStorageServicioEdicion])

  const crearServicioEdicion = (datos) => {
    console.log('Servicio registrado', datos)
    setCitaService([...citaservice, datos])
  }

  const eliminarCitaService = (id) => {
    console.log('Eliminar', id)
    const nuevaCitaService = citaservice.filter(
      (citaservice) => citaservice.id !== id
    )
    setCitaService(nuevaCitaService)
    // Recuperar los datos almacenados en localStorage
    const storedDataCitaService = localStorage.getItem('citaservice')

    // Verificar si hay datos en localStorage
    if (storedDataCitaService) {
      // Parsear los datos de JSON a un objeto JavaScript
      const dataCitaService = JSON.parse(storedDataCitaService)

      // Eliminar el elemento que deseas (por ejemplo, utilizando filter)
      const updatedDataCitaService = dataCitaService.filter(
        (citaservice) => citaservice.id !== id
      )

      // Guardar los datos actualizados en localStorage
      localStorage.setItem(
        'citaservice',
        JSON.stringify(updatedDataCitaService)
      )

      // Actualizar el estado si es necesario (opcional)
      setCitaService(updatedDataCitaService)
    }
  }

  const [citaDoctor, setCitaDoctor] = useState([
    { name: 'Dr. Orlando Lemus', id: uuid() },
    { name: 'Dra. Ari Villa Armenta', id: uuid() }
  ])

  const [loadingFromStorageDoctor, setLoadingFromStorageDoctor] = useState(true)

  useEffect(() => {
    // Intenta cargar datos de localStorage solo si loadingFromStorage es true
    if (loadingFromStorageDoctor) {
      const storedDoctor = localStorage.getItem('doctor')
      if (storedDoctor) {
        setCitaDoctor(JSON.parse(storedDoctor))
      }
      setLoadingFromStorageDoctor(false) // Desactiva la carga desde localStorage después de cargar
    } else {
      // Guarda datos en localStorage cuando cita cambia
      localStorage.setItem('doctor', JSON.stringify(citaDoctor))
    }
  }, [citaDoctor, loadingFromStorageDoctor])

  const crearDoctor = (datos) => {
    console.log('doctor', datos)
    setCitaDoctor([...citaDoctor, datos])
  }

  const eliminarDoctor = (id) => {
    console.log('Eliminar', id)
    const nuevaDoctor = citaDoctor.filter((doctor) => doctor.id !== id)
    setCitaDoctor(nuevaDoctor)
    // Recuperar los datos almacenados en localStorage
    const storedDataDoctor = localStorage.getItem('doctor')

    // Verificar si hay datos en localStorage
    if (storedDataDoctor) {
      // Parsear los datos de JSON a un objeto JavaScript
      const dataDoctor = JSON.parse(storedDataDoctor)

      // Eliminar el elemento que deseas (por ejemplo, utilizando filter)
      const updatedDataDoctor = dataDoctor.filter((doctor) => doctor.id !== id)

      // Guardar los datos actualizados en localStorage
      localStorage.setItem('doctor', JSON.stringify(updatedDataDoctor))

      // Actualizar el estado si es necesario (opcional)
      setCitaDoctor(updatedDataDoctor)
    }
  }

  const [seccion, setSeccion] = useState([
    { name: 'inicio', uso: true },
    { name: 'servicio', uso: false },
    { name: 'contacto', uso: false },
    { name: 'cita', uso: false }
  ])
  const [seccionActiva, setSeccionActiva] = useState('inicio')

  const height = (id) => {
    const serviceActive = services.map((service) => {
      if (service.id === id) {
        service.fav = !service.fav
      }
      return service
    })
    setServices(serviceActive)
  }

  const [cardAntes, setCardAntes] = useState([
    {
      fotoAntes:
        'https://mejorconsalud.as.com/wp-content/uploads/2014/04/por-que-se-descaman-unas.jpg',
      fotoDespues:
        'https://img.freepik.com/foto-gratis/cerrar-mujer-sonriente-hermosa-manicura_23-2149311579.jpg?w=740&t=st=1699872234~exp=1699872834~hmac=32751de86b8667920349a09c430175cf9a6541789a84da61801f7576bbeab0a7',
      id: uuid()
    },
    {
      fotoAntes:
        'https://mejorconsalud.as.com/wp-content/uploads/2014/04/por-que-se-descaman-unas.jpg',
      fotoDespues:
        'https://img.freepik.com/foto-gratis/cerrar-mujer-sonriente-hermosa-manicura_23-2149311579.jpg?w=740&t=st=1699872234~exp=1699872834~hmac=32751de86b8667920349a09c430175cf9a6541789a84da61801f7576bbeab0a7',
      id: uuid()
    },
    {
      fotoAntes:
        'https://mejorconsalud.as.com/wp-content/uploads/2014/04/por-que-se-descaman-unas.jpg',
      fotoDespues:
        'https://img.freepik.com/foto-gratis/cerrar-mujer-sonriente-hermosa-manicura_23-2149311579.jpg?w=740&t=st=1699872234~exp=1699872834~hmac=32751de86b8667920349a09c430175cf9a6541789a84da61801f7576bbeab0a7',
      id: uuid()
    },
    {
      fotoAntes:
        'https://mejorconsalud.as.com/wp-content/uploads/2014/04/por-que-se-descaman-unas.jpg',
      fotoDespues:
        'https://img.freepik.com/foto-gratis/cerrar-mujer-sonriente-hermosa-manicura_23-2149311579.jpg?w=740&t=st=1699872234~exp=1699872834~hmac=32751de86b8667920349a09c430175cf9a6541789a84da61801f7576bbeab0a7',
      id: uuid()
    },
    {
      fotoAntes:
        'https://mejorconsalud.as.com/wp-content/uploads/2014/04/por-que-se-descaman-unas.jpg',
      fotoDespues:
        'https://img.freepik.com/foto-gratis/cerrar-mujer-sonriente-hermosa-manicura_23-2149311579.jpg?w=740&t=st=1699872234~exp=1699872834~hmac=32751de86b8667920349a09c430175cf9a6541789a84da61801f7576bbeab0a7',
      id: uuid()
    },

    {
      fotoAntes:
        'https://mejorconsalud.as.com/wp-content/uploads/2014/04/por-que-se-descaman-unas.jpg',
      fotoDespues:
        'https://img.freepik.com/foto-gratis/cerrar-mujer-sonriente-hermosa-manicura_23-2149311579.jpg?w=740&t=st=1699872234~exp=1699872834~hmac=32751de86b8667920349a09c430175cf9a6541789a84da61801f7576bbeab0a7',
      id: uuid()
    }
  ])

  const [loadingFromStorageAYD, setLoadingFromStorageAYD] = useState(true)

  useEffect(() => {
    // Intenta cargar datos de localStorage solo si loadingFromStorage es true
    if (loadingFromStorageAYD) {
      const storedAYD = localStorage.getItem('AYD')
      if (storedAYD) {
        setCardAntes(JSON.parse(storedAYD))
      }
      setLoadingFromStorageAYD(false) // Desactiva la carga desde localStorage después de cargar
    } else {
      // Guarda datos en localStorage cuando cita cambia
      localStorage.setItem('AYD', JSON.stringify(cardAntes))
    }
  }, [cardAntes, loadingFromStorageAYD])

  const crearAYD = (datos) => {
    console.log('AYD registrado', datos)
    setCardAntes([...cardAntes, datos])
  }

  const eliminarAYD = (id) => {
    console.log('Eliminar', id)
    const nuevaAYD = cardAntes.filter((contacto) => contacto.id !== id)
    setCardAntes(nuevaAYD)
    // Recuperar los datos almacenados en localStorage
    const storedDataAYD = localStorage.getItem('AYD')

    // Verificar si hay datos en localStorage
    if (storedDataAYD) {
      // Parsear los datos de JSON a un objeto JavaScript
      const dataAYD = JSON.parse(storedDataAYD)

      // Eliminar el elemento que deseas (por ejemplo, utilizando filter)
      const updatedDataAYD = dataAYD.filter((ayd) => ayd.id !== id)

      // Guardar los datos actualizados en localStorage
      localStorage.setItem('AYD', JSON.stringify(updatedDataAYD))

      // Actualizar el estado si es necesario (opcional)
      setCardAntes(updatedDataAYD)
    }
  }

  const [cardInstalaciones, setCardInstalaciones] = useState([
    {
      foto: 'https://static.wixstatic.com/media/7a7b29_ef406d4431154310bf1b12db8735eaa8~mv2_d_2048_1931_s_2.jpg/v1/fit/w_1740,h_821,q_90/7a7b29_ef406d4431154310bf1b12db8735eaa8~mv2_d_2048_1931_s_2.webp',
      activa: true
    },
    {
      foto: 'https://static.wixstatic.com/media/7a7b29_6f8620019d6f47459a19769f076d4167~mv2_d_1600_1237_s_2.jpg/v1/fit/w_1164,h_821,q_90/7a7b29_6f8620019d6f47459a19769f076d4167~mv2_d_1600_1237_s_2.webp',
      activa: true
    },
    {
      foto: 'https://static.wixstatic.com/media/7a7b29_70b103c6eb614a8b84a19c8d29aed047~mv2_d_3024_4032_s_4_2.jpg/v1/fit/w_1740,h_821,q_90/7a7b29_70b103c6eb614a8b84a19c8d29aed047~mv2_d_3024_4032_s_4_2.webp',
      activa: true
    },
    {
      foto: 'https://static.wixstatic.com/media/7a7b29_12744dfe39b54fefaefc67b457ce89e2~mv2.jpg/v1/fit/w_1600,h_821,q_90/7a7b29_12744dfe39b54fefaefc67b457ce89e2~mv2.webp',
      activa: false
    },
    {
      foto: 'https://static.wixstatic.com/media/7a7b29_0aeab79609a7458d9cdc99b03b664bec~mv2.jpg/v1/fit/w_1600,h_821,q_90/7a7b29_0aeab79609a7458d9cdc99b03b664bec~mv2.webp',
      activa: false
    },
    {
      foto: 'https://static.wixstatic.com/media/7a7b29_98ac2b82d7bd414299262d710db4645e~mv2.jpg/v1/fit/w_1600,h_821,q_90/7a7b29_98ac2b82d7bd414299262d710db4645e~mv2.webp',
      activa: false
    }
  ])

  const [hora, setHora] = useState([
    {
      tiempo: '09:00 am',
      activa: false,
      id: uuid()
    },
    { tiempo: '09:30 am', activa: false, id: uuid() },
    { tiempo: '10:00 am', activa: false, id: uuid() },
    { tiempo: '10:30 am', activa: false, id: uuid() },
    { tiempo: '1:00 pm', activa: false, id: uuid() },
    { tiempo: '1:30 pm', activa: false, id: uuid() },
    { tiempo: '2:00 pm', activa: false, id: uuid() },
    { tiempo: '2:30 pm', activa: false, id: uuid() },
    { tiempo: '3:00 pm', activa: false, id: uuid() },
    { tiempo: '3:30 pm', activa: false, id: uuid() },
    { tiempo: '4:00 pm', activa: false, id: uuid() },
    { tiempo: '4:30 pm', activa: false, id: uuid() },
    { tiempo: '5:00 pm', activa: false, id: uuid() },
    { tiempo: '5:30 pm', activa: false, id: uuid() },
    { tiempo: '6:00 pm', activa: false, id: uuid() },
    { tiempo: '6:30 pm', activa: false, id: uuid() }
  ])
  const [loadingFromStorageHorario, setLoadingFromStorageHorario] =
    useState(true)

  useEffect(() => {
    // Intenta cargar datos de localStorage solo si loadingFromStorage es true
    if (loadingFromStorageHorario) {
      const storedHorario = localStorage.getItem('hora')
      if (storedHorario) {
        setHora(JSON.parse(storedHorario))
      }
      setLoadingFromStorageHorario(false) // Desactiva la carga desde localStorage después de cargar
    } else {
      // Guarda datos en localStorage cuando cita cambia
      localStorage.setItem('hora', JSON.stringify(hora))
    }
  }, [hora, loadingFromStorageHorario])

  const crearHorario = (datos) => {
    console.log('Horario', datos)
    setHora([...hora, datos])
  }

  const eliminarHora = (id) => {
    console.log('Eliminar', id)
    const nuevaHora = hora.filter((horas) => horas.id !== id)
    setHora(nuevaHora)
    // Recuperar los datos almacenados en localStorage
    const storedDataHora = localStorage.getItem('hora')

    // Verificar si hay datos en localStorage
    if (storedDataHora) {
      // Parsear los datos de JSON a un objeto JavaScript
      const dataHora = JSON.parse(storedDataHora)

      // Eliminar el elemento que deseas (por ejemplo, utilizando filter)
      const updatedDataHora = dataHora.filter((horas) => horas.id !== id)

      // Guardar los datos actualizados en localStorage
      localStorage.setItem('hora', JSON.stringify(updatedDataHora))

      // Actualizar el estado si es necesario (opcional)
      setHora(updatedDataHora)
    }
  }

  //Funcion para que solo haya una hora activa, haciendo un map la que es verdadera se activa y las que no lo son se desactivan

  const horaSeleccionada = (id) => {
    const horaActive = hora.map((hora) => {
      if (hora.id === id) {
        return {
          ...hora,
          activa: !hora.activa
        }
      } else {
        return {
          ...hora,
          activa: false
        }
      }
    })
    setHora(horaActive)
  }

  const switchActive = () => {
    // Mapear y negar el valor "activa" de cada elemento en cardInstalaciones
    const updatedCardInstalaciones = cardInstalaciones.map((item) => ({
      ...item,
      activa: !item.activa
    }))

    // Actualizar el estado con el nuevo array
    setCardInstalaciones(updatedCardInstalaciones)
  }
  // Utiliza useEffect para ejecutar switchActive cada segundo
  useEffect(() => {
    const intervalId = setInterval(switchActive, 3000) // 1000ms = 1 segundo

    // Limpia el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(intervalId)
    }
  }, [cardInstalaciones])

  const [usuario, setUsuario] = useState([
    {
      email: '1@1.com',
      password: '123456'
    }
  ])

  const verificarUsuario = (email, password) => {
    const usuarioEncontrado = usuario.find(
      (usuarios) => usuarios.email === email && usuarios.password === password
    )

    if (usuarioEncontrado) {
      return true
    } else {
      return false
    }
  }

  const [cita, setCita] = useState([
    {
      nombre: 'Omar',
      telefono: '1234567890',
      email: 'ejemplo@.com',
      domicilio: 'Calle 1',
      estado: 'Jalisco',
      ciudad: 'Guadalajara',
      codigoPostal: '12345',
      mensaje: 'Hola',
      fav: false
    }
  ])
  const [loadingFromStorage, setLoadingFromStorage] = useState(true)

  useEffect(() => {
    // Intenta cargar datos de localStorage solo si loadingFromStorage es true
    if (loadingFromStorage) {
      const storedCita = localStorage.getItem('cita')
      if (storedCita) {
        setCita(JSON.parse(storedCita))
      }
      setLoadingFromStorage(false) // Desactiva la carga desde localStorage después de cargar
    } else {
      // Guarda datos en localStorage cuando cita cambia
      localStorage.setItem('cita', JSON.stringify(cita))
    }
  }, [cita, loadingFromStorage])

  const registrarMensajeCita = (citas) => {
    console.log('Cita registrado', citas)
    setCita([...cita, citas])
  }

  const heightCita = (id) => {
    const citaActive = cita.map((cita) => {
      if (cita.id === id) {
        cita.fav = !cita.fav
      }
      return cita
    })
    setCita(citaActive)
  }

  const eliminarCita = (id) => {
    console.log('Eliminar', id)
    const nuevaCita = cita.filter((citas) => citas.id !== id)
    setCita(nuevaCita)
    // Recuperar los datos almacenados en localStorage
    const storedData = localStorage.getItem('cita')

    // Verificar si hay datos en localStorage
    if (storedData) {
      // Parsear los datos de JSON a un objeto JavaScript
      const data = JSON.parse(storedData)

      // Eliminar el elemento que deseas (por ejemplo, utilizando filter)
      const updatedData = data.filter((citas) => citas.id !== id)

      // Guardar los datos actualizados en localStorage
      localStorage.setItem('cita', JSON.stringify(updatedData))

      // Actualizar el estado si es necesario (opcional)
      setCita(updatedData)
    }
  }

  const [contactoRegistro, setContactoRegistro] = useState([
    {
      nombre: 'Omar',
      telefono: '1234567890',
      email: 'ejemplo@.com',
      mensaje: 'Hola',
      id: uuid()
    }
  ])

  const [loadingFromStorageContacto, setLoadingFromStorageContacto] =
    useState(true)

  useEffect(() => {
    // Intenta cargar datos de localStorage solo si loadingFromStorage es true
    if (loadingFromStorageContacto) {
      const storedContacto = localStorage.getItem('contacto')
      if (storedContacto) {
        setContactoRegistro(JSON.parse(storedContacto))
      }
      setLoadingFromStorageContacto(false) // Desactiva la carga desde localStorage después de cargar
    } else {
      // Guarda datos en localStorage cuando cita cambia
      localStorage.setItem('contacto', JSON.stringify(contactoRegistro))
    }
  }, [contactoRegistro, loadingFromStorageContacto])

  const registrarMensajeContacto = (datos) => {
    console.log('Cita registrado', datos)
    setContactoRegistro([...contactoRegistro, datos])
  }

  const eliminarContacto = (id) => {
    console.log('Eliminar', id)
    const nuevaContacto = contactoRegistro.filter(
      (contacto) => contacto.id !== id
    )
    setContactoRegistro(nuevaContacto)
    // Recuperar los datos almacenados en localStorage
    const storedDataContacto = localStorage.getItem('contacto')

    // Verificar si hay datos en localStorage
    if (storedDataContacto) {
      // Parsear los datos de JSON a un objeto JavaScript
      const dataContacto = JSON.parse(storedDataContacto)

      // Eliminar el elemento que deseas (por ejemplo, utilizando filter)
      const updatedDataContacto = dataContacto.filter(
        (contacto) => contacto.id !== id
      )

      // Guardar los datos actualizados en localStorage
      localStorage.setItem('contacto', JSON.stringify(updatedDataContacto))

      // Actualizar el estado si es necesario (opcional)
      setContactoRegistro(updatedDataContacto)
    }
  }

  return (
    <Router className="App">
      <Header
        seccion={seccion}
        setSeccion={setSeccion}
        seccionActiva={seccionActiva}
        setSeccionActiva={setSeccionActiva}
      />
      <Routes>
        <Route path="/" element={<Home colaboradores={colaboradores} />} />
        <Route
          path="/Servicio"
          element={
            <Servicio
              services={services}
              height={height}
              cardAntes={cardAntes}
            />
          }
        />
        <Route
          path="/Contacto"
          element={
            <Contacto
              cardInstalaciones={cardInstalaciones}
              setSeccion={setSeccion}
              setSeccionActiva={setSeccionActiva}
              registrarMensajeContacto={registrarMensajeContacto}
            />
          }
        />
        <Route
          path="/login"
          element={<Login verificarUsuario={verificarUsuario} />}
        />

        <Route
          path="/Dashboard"
          element={
            <Dashboard
              cita={cita}
              heightCita={heightCita}
              eliminarCita={eliminarCita}
              contactoRegistro={contactoRegistro}
              eliminarContacto={eliminarContacto}
              colaboradores={colaboradores}
              crearColaborador={crearColaborador}
              eliminarColaborador={eliminarColaborador}
              services={services}
              cardAntes={cardAntes}
              eliminarAYD={eliminarAYD}
              crearServicio={crearServicio}
              eliminarServicio={eliminarServicio}
              crearAYD={crearAYD}
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
          }
        />

        <Route path="/Cita" element={<Cita citaservice={citaservice} />} />
        <Route
          path="/Cita/:name"
          element={
            <CitaDoctorLink citaDoctor={citaDoctor} citaservice={citaservice} />
          }
        />
        <Route
          path="/Cita/:id/Doctor/:name"
          element={
            <CitaFechaLink hora={hora} horaSeleccionada={horaSeleccionada} />
          }
        />
        <Route
          path="/Cita/:id/Doctor/:name/Hora/:hora"
          element={
            <CitaFechaLink hora={hora} horaSeleccionada={horaSeleccionada} />
          }
        />
        <Route
          path="/Cita/:id/Doctor/:name/Hora/:hora/Dia/:time/Informacion"
          element={
            <CitaInformacion
              hora={hora}
              horaSeleccionada={horaSeleccionada}
              registrarMensajeCita={registrarMensajeCita}
            />
          }
        />
        <Route path="*" />
      </Routes>
    </Router>
  )
}

export default App
