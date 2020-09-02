import React from 'react'
import ReactDOM from 'react-dom'
// Global styles
import GlobalStyle from '@components/UI/GlobalStyle'
// Context
import { LanguageContextProvider } from '@context/LanguageContext'

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <LanguageContextProvider />
  </React.Fragment>,
  document.getElementById('root')
)
