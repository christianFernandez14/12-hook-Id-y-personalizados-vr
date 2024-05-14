import { useState, useEffect } from 'react'

export const useAjax = (url) => {

  // hacemos nuestro state mas generico
  const [estado, setEstado] = useState({ datos: null})

  const getData = async () => {

    setEstado({
      ...estado,
      cargando: true
    })
    
      const peticion = await fetch(url)
      const { data } = await peticion.json()

      setEstado({
        datos: data,
        cargando: false
      })
  }

  useEffect(() => {
    getData()
  }, [url])


  return {
    datos: estado.datos,
    cargando: estado.cargando

  }
}