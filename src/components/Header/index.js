import React from 'react'

// Image(svg)
import LogoSvg from '@/cr_logo_w.svg'
// Styled-components global
import Container from '@ui/Container'
import Link from '@ui/Link'
// Styled-components
import Header from './Header'
import Wrapper from './Wrapper'
import Box from './Box'
import Button from './Button'
import Logo from './Logo'
import Navbar from './Navbar'
import LinkLogo from './LinkLogo'
// Context
import { useTranslation } from '@context//LanguageContext'

const MyHeader = () => {
  const { header } = useTranslation()

  return (
    <Header>
      <Container>
        <Wrapper>
          <Box>
            <LinkLogo href="#">
              <Logo src={LogoSvg} />
            </LinkLogo>

            <Navbar>
              <Link href="#">{header?.nav.link1}</Link>
              <Link href="#">{header?.nav.link2}</Link>
              <Link href="#">{header?.nav.link3}</Link>
              <Link href="#">{header?.nav.link4}</Link>
            </Navbar>
          </Box>
          <Box>
            <Button>{header?.button}</Button>
          </Box>
        </Wrapper>
      </Container>
    </Header>
  )
}

export default MyHeader
