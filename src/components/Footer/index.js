import React from 'react'

// Styled-components global
import Container from '@ui/Container'
import Box from '@ui/Box'
// Styled-components
import Footer from './Footer'
import Wrapper from './Wrapper'
import Link from './Link'
import Button from './Button'
// Context
import { useTranslation } from '@context/LanguageContext'

const MyFooter = () => {
  const { setSelectedLanguage } = useTranslation()

  return (
    <Footer>
      <Container>
        <Wrapper>
          <Box>
            <Link href="https://www.facebook.com/correctarium/" target="_blank">
              Facebook
            </Link>
            <Link href="#">manager@correctarium.com</Link>
          </Box>
          <Box>
            <Button onClick={() => setSelectedLanguage('ukr')}>Українська</Button>
            <Button onClick={() => setSelectedLanguage('rus')}>Русский</Button>
          </Box>
        </Wrapper>
      </Container>
    </Footer>
  )
}

export default MyFooter
