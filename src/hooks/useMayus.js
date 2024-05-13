export const useMayus = (texto) => {

  // En base a lo anterior, podemos hacer una librería de que padamos procesar dentro de este hook
  const mayusculas = () => {
    return texto.toUpperCase()
  }

  const minusculas = () => {
    return texto.toLowerCase()
  }

  const concatenar = (texto2) => {

    return texto + texto2
  }

  // Aca retorno los 3 metodos para tenerlos a disposición 
  return {
    mayusculas,
    minusculas,
    concatenar
  }
}