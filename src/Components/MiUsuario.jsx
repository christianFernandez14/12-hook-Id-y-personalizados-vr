import React, { useState, useEffect } from 'react'

const MiUsuario = () => {

  const [usuario, setUsuario] = useState({
    datos: null
  })

  const getUsuario = async (url) => {

    setUsuario({
      ...usuario,
      cargando: true
    })

    // Incorporamos la fucnion setTimeout, para ver la ejecucion de Cargando...
    setTimeout(async () => {
      const peticion = await fetch(url)
      const { data } = await peticion.json()

      setUsuario({
        datos: data,
        cargando: false
      })
    }, 2000)
  }


  const getId = e => {
    let id = parseInt(e.target.value)
    let url = `https://reqres.in/api/users/${id}`

    getUsuario(url)

  }

  // Genero al menos un usuario al cargar la pagina.
  useEffect(() => {
    getUsuario('https://reqres.in/api/users/1')
  }, [])


  return (
    <div>
      <h1>Mi usuario:</h1>
      <p>Datos del usuario</p>
      <input type="number" name='id' onChange={getId} />
      <hr />
      {
        usuario.cargando
          ? 'Cargando...'
          : (<div>
            <p>Nombre: {usuario?.datos?.first_name}</p>
            <p>Apellido: {usuario?.datos?.last_name}</p>
            <p>Email: {usuario?.datos?.email}</p>
            <img src={usuario?.datos?.avatar} alt="" />
          </div>)
      }
    </div>
  )
}

export default MiUsuario