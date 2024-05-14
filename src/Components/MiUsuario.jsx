import React, { useState } from 'react'

const MiUsuario = () => {

  const [usuario, setUsuario] = useState({
    datos: null
  })

  const getUsuario = async(url) =>{
    const peticion = await fetch(url)
    const {data} = await peticion.json()

    // console.log(data)

    setUsuario({
      datos: data
    })
  }


  const getId = e => {
    let id = parseInt(e.target.value)
    let url = `https://reqres.in/api/users/${id}`

    getUsuario(url)

  }

  // console.log(usuario.datos.avatar)
  return (
    <div>
      <h1>Mi usuario:</h1>
      <p>Datos del usuario</p>
      <input type="number" name='id' onChange={getId} />
      <p>Nombre: {usuario?.datos?.first_name}</p>
      <p>Apellido: {usuario?.datos?.last_name}</p>
      <p>Email: {usuario?.datos?.email}</p>
      <img src={usuario?.datos?.avatar} alt="" />
    </div>
  )
}

export default MiUsuario