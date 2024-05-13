import React, { useId } from 'react'

const MiComponete = () => {

  // De esta manera asiganabamos un id aleatorio, por asi decirlo, pero podia existir el caso que se podria repetir
  // const id = new Date().getTime()
  
  // Para eso se creo el useId, para corregir ese eventual problema  
  const id = useId()

  return (
    <div>
      <h1>Hook useID</h1>


      <input type="text" id={id} placeholder='Nombre' />
    </div>
  )
}

export default MiComponete