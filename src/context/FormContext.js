import React from 'react'

const FormContext = React.createContext()

export const FormContextProvider = ({ children }) => {
  const [input, setInput] = React.useState({
    email: '',
    name: '',
    comment: '',
  })

  const [textarea, setTextarea] = React.useState('')
  const [radio, setRadio] = React.useState()

  const onChangeTextarea = e => setTextarea(e.target.value)

  const onChangeInput = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const onChangeRadio = e => {
    setRadio(e.target.value)
  }

  return (
    <FormContext.Provider
      value={{
        input,
        onChangeInput,
        textarea,
        onChangeTextarea,
        radio,
        onChangeRadio,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export const useForm = () => React.useContext(FormContext)
