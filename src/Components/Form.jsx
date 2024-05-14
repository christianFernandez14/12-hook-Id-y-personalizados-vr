import React, { useState } from 'react'

const Form = () => {
  const [formulario, setFormulario] = useState({})

  const serializarFormulario = (formulario) => {
    const formData = new FormData(formulario)

    const objetoCompleto = {}

    for (let [name, value] of formData) {
      objetoCompleto[name] = value
    }

    return objetoCompleto
  }


  const handleSubmit = e => {
    e.preventDefault()

    let curso = serializarFormulario(e.target)

    setFormulario(curso)
  }

  // El manejo de una misma funcion de forma generica para todo los campos de los inpunt

  const cambiar = ({ target }) => {
    const { name, value } = target

    setFormulario({
      ...formulario,
      [name]: value
    })
  }
  return (
    <div>
      <h1>Formulario</h1>
      <p>Formulario para guardar un curso</p>
      <p>Curso guardado: {formulario.titulo}</p>

      <form className='mi-formulario' onSubmit={handleSubmit}>
        <input type="text" name='titulo' onChange={cambiar} placeholder='Titulo:' />
        <input type="number" name='year' onChange={cambiar} placeholder='Año publicación:' />
        <textarea name="descripcion" onChange={cambiar} placeholder='Descripción:'></textarea>
        <input type="text" name='autor' onChange={cambiar} placeholder='Autor:' />
        <input type="email" name='email' onChange={cambiar} placeholder='Correo del Contacto:' />

        <input type="submit" value='enviar' />
      </form>

    </div>
  )
}

export default Form