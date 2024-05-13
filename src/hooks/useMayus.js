import { useState } from "react"


export const useMayus = (texto) => {

  const [miTexto, setTexto] = useState(texto)

  // En base a lo anterior, podemos hacer una librería de que padamos procesar dentro de este hook
  const mayusculas = () => {
    setTexto(texto.toUpperCase())
  }

  // Aca puede ver la diferncia de aplicarle un metodo al estado y la variable que le pases al State OJO
  const minusculas = () => {
    setTexto(miTexto.toLowerCase())
  }

  const concatenar = (texto2) => {

    setTexto(miTexto + texto2)
  }

  const original = () => {
    return setTexto(texto)
  }

  // Aca retorno los 3 metodos para tenerlos a disposición 
  return {
    texto_original: texto,
    estado: miTexto,
    mayusculas,
    minusculas,
    concatenar,
    original
  }
}