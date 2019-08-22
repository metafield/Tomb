import React, {
  ReactEventHandler,
  FormEvent,
  FormEventHandler,
  SyntheticEvent,
} from 'react'
import styled from 'styled-components'
import { Output } from './output'

const placeholderText = {
  input: `Type in your secret message!`,
}

export const Encryptor = (): JSX.Element => {
  const [InputText, setInputText] = React.useState(placeholderText.input)

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    // TODO: if some cooldown has cooled
    setInputText(event.target.value)
  }

  return (
    <Container>
      <Input onChange={event => handleInput(event)} />
      <Output text={InputText} />
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  grid-column: 2;
  display: grid;
  grid-gap: 25px;
  grid-template: repeat(3, 1fr) / 1fr 1fr;
`

const Input = styled.textarea`
  grid-row: 2;
`
