import React from 'react'

// Styled-components global
import Input from '@ui/Input'
import Box from '@ui/Box'
import Label from '@ui/Label'
// Styled-components
import Field from './Field'
import Wrapper from './Wrapper'
import Title from './Title'
// Context
import { useTranslation } from '@context/LanguageContext'
import { useForm } from '@context/FormContext'

const Selection = () => {
  const { main } = useTranslation()
  const { input, onChangeInput, radio, onChangeRadio } = useForm()

  return (
    <Wrapper>
      <Title>{main?.titleOrder}</Title>
      <Box>
        <Label>
          <Input
            type="radio"
            checked={radio === 'ukr'}
            name="ukr"
            value="ukr"
            onChange={onChangeRadio}
          />
          <p>{main?.language.ukr}</p>
          <span></span>
        </Label>
      </Box>
      <Box>
        <Label>
          <Input
            type="radio"
            checked={radio === 'ru'}
            name="ru"
            value="ru"
            onChange={onChangeRadio}
          />
          <p>{main?.language.rus}</p>
          <span></span>
        </Label>
      </Box>
      <Box>
        <Label>
          <Input
            type="radio"
            checked={radio === 'en'}
            name="en"
            value="en"
            onChange={onChangeRadio}
          />
          <p>{main?.language.en}</p>
          <span></span>
        </Label>
      </Box>

      <Field>
        <Input
          placeholder={main?.commentPlaceholder}
          name="comment"
          value={input.comment}
          onChange={onChangeInput}
        />
      </Field>
    </Wrapper>
  )
}

export default Selection
