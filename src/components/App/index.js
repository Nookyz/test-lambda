import React from 'react'

// Components
import Header from '@components/Header/index'
import Main from '@components/Main/index'
import Footer from '@components/Footer/index'
// Provider
import { FormContextProvider } from '@context/FormContext'

const App = () => {
  return (
    <FormContextProvider>
      <Header />
      <Main />
      <Footer />
    </FormContextProvider>
  )
}

export default App
