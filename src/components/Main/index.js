import React from 'react'

// Components
import Form from '@components/Form/index'
import Selection from '@components/Selection/index'
// Styled-components global
import Container from '@ui/Container'
// Styled-components
import Grid from './Grid'
import Sidebar from './Sidebar'
import Price from './Price'
import Button from './Button'
import Main from './Main'
import Desc from './Desc'
// Context
import { useTranslation } from '@context//LanguageContext'
import { useForm } from '@context//FormContext'
// helper
import { calcSumm } from '@/helper/calcSumm'
import { deadline } from '@/helper/deadline'

const MyMain = () => {
  const { main } = useTranslation()

  const { textarea, radio } = useForm()

  const summ = calcSumm(textarea.length, radio)

  const desc = deadline(textarea.length, radio)

  return (
    <Container>
      <Grid>
        <Main>
          <Form />
          <Selection />
        </Main>

        <Sidebar>
          <Price>
            <div>{textarea.length > 0 && radio !== undefined ? `${summ}  грн` : '0,00  грн'}</div>

            <Desc>{textarea.length > 0 && radio !== undefined ? desc : null}</Desc>
          </Price>
          <Button>{main?.button}</Button>
        </Sidebar>
      </Grid>
    </Container>
  )
}

export default MyMain
