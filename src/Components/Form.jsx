import React, { useState } from 'react'

const Form = () => {
  const [formulario, setFormulario] = useState({})

  // Recopilamos la información de manera más dinamica
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

    let curso = {
      titulo: e.target.titulo.value,
      year: e.target.year.value,
      descripcion: e.target.descripcion.value,
      autor: e.target.autor.value,
      email: e.target.email.value
    }

    // Acá demostramos que lo que recogemos del fomrulario es los mismo, de una forma u otra
    console.log(curso)
    console.log(serializarFormulario(e.target))


    setFormulario(curso)
  }
  return (
    <div>
      <h1>Formulario</h1>
      <p>Formulario para guardar un curso</p>
      <p>Curso guardado: </p>

      <form className='mi-formulario' onSubmit={handleSubmit}>
        <input type="text" name='titulo' placeholder='Titulo:' />
        <input type="number" name='year' placeholder='Año publicación:' />
        <textarea name="descripcion" placeholder='Descripción:'></textarea>
        <input type="text" name='autor' placeholder='Autor:' />
        <input type="email" name='email' placeholder='Correo del Contacto:' />

        <input type="submit" value='enviar' />
      </form>

    </div>
  )
}

export default Form