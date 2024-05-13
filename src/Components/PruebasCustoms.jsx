import { useState } from "react"
import { useMayus } from "../hooks/useMayus"

const PruebasCustoms = () => {

  // Hacesmos un poco más dinamico el hook, ya que usaremos useState
  const [texto, setTexto] = useState('Probando La WEB:')

  const { mayusculas, minusculas, concatenar } = useMayus(texto)
  return (
    <div>
      <h1>Pruebas de Customs Hooks</h1>

      <p>Texto original: {texto} </p>

      {/* Me cree un buttom que me cambia a mayuscula con el evento onClick */}
      <button
        onClick={e => (
          setTexto(mayusculas())
        )}>Mayuscula</button>

      {/* Me cree un buttom que me cambia a minuscula con el evento onClick */}
      <button
        onClick={e => {
          setTexto(minusculas())
        }}>Minuscula</button>

    </div>
  )
}

export default PruebasCustoms