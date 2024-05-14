import { useState } from "react"
import { useAjax } from "../hooks/useAjax"

const MiUsuario = () => {

  const [url, setUrl] = useState('https://reqres.in/api/users/1')

  // Hacemos el llamado a nuestro Custom Hook 
  const {datos, cargando } = useAjax(url)

  // Es el unico metedo que ese queda, ya esta vinculado con el formulario
  const getId = e => {
    let id = parseInt(e.target.value)
    setUrl(`https://reqres.in/api/users/${id}`)


    return 

  }

  return (
    <div>
      <h1>Mi usuario:</h1>
      <p>Datos del usuario</p>
      <input type="number" name='id' onChange={getId} />
      <hr />
      {
        cargando
          ? 'Cargando...'
          : (<div>
            <p>Nombre: {datos?.first_name}</p>
            <p>Apellido: {datos?.last_name}</p>
            <p>Email: {datos?.email}</p>
            <img src={datos?.avatar} alt={`Imagen de ${datos?.first_name}`} />
          </div>)
      }
    </div>
  )
}

export default MiUsuario