import { useMayus } from "../hooks/useMayus"

const PruebasCustoms = () => {

  // Destructuramos todos los metodos del hook creado
  const { mayusculas, minusculas, concatenar } = useMayus('Probando La WEB:')
  return (
    <div>
      <h1>Pruebas de Customs Hooks</h1>
      
      {/* Haciendo las pruebas */}
      <p>Texto original: {'Probando La WEB:'} </p>
      <p>Usando metodo  mayuscula: <strong>{mayusculas()}</strong> </p>
      <p>Usando metodo  mminuscula: <strong>{minusculas()}</strong> </p>
      <p>Usando metodo concatenar: <strong>{concatenar(' www.christian.web')}</strong> </p>
    </div>
  )
}

export default PruebasCustoms