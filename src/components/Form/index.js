import React from 'react'

// Styled-components global
import Textarea from '@ui/Textarea'
import Input from '@ui/Input'
// Styled-components
import FieldReq from './FieldReq'
import Field from './Field'
import Counter from './Counter'
import Paragraf from './Paragraf'
import Link from './Link'
import Wrapper from './Wrapper'
import Title from './Title'
// Context
import { useTranslation } from '@context//LanguageContext'
import { useForm } from '@context//FormContext'

const Form = () => {
  const { main } = useTranslation()
  const { input, textarea, onChangeTextarea, onChangeInput } = useForm()

  return (
    <Wrapper>
      <Title>{main?.title}</Title>
      <Paragraf>
        {main?.subtitle}
        <Link>{main?.link}</Link>
      </Paragraf>
      <FieldReq>
        <Input
          placeholder="Ваша эл. почта"
          name="email"
          value={input.email}
          onChange={onChangeInput}
        />
      </FieldReq>
      <Field>
        <Input placeholder="Ваше имя" name="name" value={input.name} onChange={onChangeInput} />
      </Field>
      <Field>
        <Textarea
          placeholder={main?.textareaPlaceholder}
          value={textarea}
          onChange={onChangeTextarea}
        />
      </Field>
      {textarea.length > 0 ? <Counter>{textarea.length}</Counter> : <Counter>&nbsp;</Counter>}
    </Wrapper>
  )
}

export default Form
