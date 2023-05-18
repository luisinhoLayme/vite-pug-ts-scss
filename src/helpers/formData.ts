import { Form } from "../interfaces"

export const handleForm = (form: HTMLFormElement): void => {
  const url = 'https://sheet.best/api/sheets/979f70ea-a483-4eeb-8359-989314730e87/0'

  const useForm = async(e: Event) => {
    e.preventDefault()
    const values: Form = {
      user: form.user.value,
      email: form.email.value,
      password: form.password.value
    }
    // // Insertar Filas
    // try {
    //   const resp = await fetch(url, {
    //     method: 'POST',
    //     mode: 'cors',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(values)
    //   })
    //   const content = await resp.json()
    //   console.log(content)
    // } catch (error) {
    //   console.log(error)
    // }


    // Leer Filas
    // try {
    //   const resp = await fetch(url)
    //   const content = await resp.json()
    //   console.log(content)
    // } catch (error) {
    //   console.log(error)
    // }

    // Eliminar Filas
    // try {
    //   const resp = await fetch(url, {
    //     method: 'DELETE',
    //   })
    //   const content = await resp.json()
    //   console.log(content)
    // } catch (error) {
    //   console.log(error)
    // }


    // Actualizar fila
    try {
      const resp = await fetch(url, {
        method: 'PATCH',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: 'Luisinho'})
      })
      const content = await resp.json()
      console.log(content)
    } catch (error) {
      console.log(error)
    }

  }

  form.addEventListener('submit', useForm)
}
