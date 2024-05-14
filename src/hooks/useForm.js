import { useState } from "react";

export const useForm = (objetoInicial = {}) => {

  const [formulario, setFormulario] = useState(objetoInicial)

  const serializarFormulario = (formulario) => {
    const formData = new FormData(formulario)

    const objetoCompleto = {}

    for (let [name, value] of formData) {
      objetoCompleto[name] = value
    }

    return objetoCompleto
  }


  const enviado = e => {
    e.preventDefault()

    let curso = serializarFormulario(e.target)

    setFormulario(curso)

    // Forzamos de una manera un poco antigua la inclusión de una clase, para ver la reaccion del envio, ya que manejamos los evento de onChage y esto crea forma reactiva de los cambio, son de inmediatos.
    document.querySelector('.curso').classList.add('enviado')
  }

  // El manejo de una misma funcion de forma generica para todo los campos de los inpunt

  const cambiado = ({ target }) => {
    const { name, value } = target

    setFormulario({
      ...formulario,
      [name]: value
    })
  }

  return {
    estado: formulario,
    enviado,
    cambiado
  }
}