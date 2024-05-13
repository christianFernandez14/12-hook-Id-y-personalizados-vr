import { useMayus } from "../hooks/useMayus"

const PruebasCustoms = () => {

  const { mayusculas } = useMayus('probando')
  return (
    <div>
      <h1>Pruebas de Customs Hooks</h1>
      <p>Texto original: </p>
      <p>Texto modificado a mayuscula: {mayusculas(' como estas')} </p>
    </div>
  )
}

export default PruebasCustoms