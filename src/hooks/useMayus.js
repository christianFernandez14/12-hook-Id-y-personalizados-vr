export const useMayus = (texto) => {

  // Aca puedo diseñar todo tipo de función que se encarge de hacer algo
  const mayusculas =(valor = '')=>{
    // Vimos que toma el parametro "texto", pero podemos pasarle otro más interno
    return (texto + valor).toUpperCase()
  }

  // Aca vot a retornar cada función que se diseñara
  return{
    mayusculas
  }
}