import React from 'react'
// lang
import rus from '../helper/lang/rus.json'
import ukr from '../helper/lang/ukr.json'

import App from '../components/App/index'

const LanguageContext = React.createContext()

const languageObj = {
  ukr,
  rus,
}

export const LanguageContextProvider = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState()

  React.useEffect(() => {
    const curentLanguage = localStorage.getItem('language') || 'rus'

    setSelectedLanguage(curentLanguage)
  }, [])

  React.useEffect(() => {
    localStorage.setItem('language', selectedLanguage || 'rus')
  }, [selectedLanguage])

  const value = {
    ...languageObj[selectedLanguage],
    setSelectedLanguage,
  }

  return (
    <LanguageContext.Provider value={value}>
      <App />
    </LanguageContext.Provider>
  )
}

export const useTranslation = () => React.useContext(LanguageContext)
