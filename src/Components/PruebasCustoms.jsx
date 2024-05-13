import { useMayus } from "../hooks/useMayus"

const PruebasCustoms = () => {

  // Hacesmos un poco más dinamico el hook, ya que usaremos useState
  const {
    texto_original,
    estado,
    mayusculas,
    minusculas,
    concatenar,
    original
  } = useMayus('Prueba WEB')



  return (
    <div>
      <h1>Pruebas de Customs Hooks</h1>

      <p>Texto original: {estado} </p>

      <button
        onClick={original}>Texto Original</button>
      
      <button
        onClick={mayusculas}>Poner en Mayuscula</button>

      <button
        onClick={minusculas}>Poner en Minuscula</button>
      
      <button
        onClick={() => concatenar('- Me concatena esa frase')}>Concatenar</button>
        
      
        

    </div>
  )
}

export default PruebasCustoms