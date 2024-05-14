import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

const Form = () => {

  // Hacemos el llamado del Custom Hook y lo incializamos y no tienes que hacer todo la logica que esta diseñada en el hook
  const { estado, enviado, cambiado } = useForm({})

  return (
    <div>
      <h1>Formulario</h1>
      <p>Formulario para guardar un curso</p>
      <p>Curso guardado: {estado.titulo}</p>
      {/* Una etiqueta para ver en pantalla lo que hay en el objeto */}
      <pre className='curso'>{JSON.stringify(estado)}</pre>

      <form className='mi-formulario' onSubmit={enviado}>
        <input type="text" name='titulo' onChange={cambiado} placeholder='Titulo:' />
        <input type="number" name='year' onChange={cambiado} placeholder='Año publicación:' />
        <textarea name="descripcion" onChange={cambiado} placeholder='Descripción:'></textarea>
        <input type="text" name='autor' onChange={cambiado} placeholder='Autor:' />
        <input type="email" name='email' onChange={cambiado} placeholder='Correo del Contacto:' />

        <input type="submit" value='enviar' />
      </form>

    </div>
  )
}

export default Form