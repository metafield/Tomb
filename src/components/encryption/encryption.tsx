import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import { Output } from './output'
import { Encryptor } from './Encryptor'

const placeholderText = {
  input: `Type in your secret message!`,
  output: `Your secret text appears here!`,
}

const encryptor = new Encryptor()

export const Encryption = (): JSX.Element => {
  const [inputText, setInputText] = React.useState(placeholderText.input)
  const [outputText, setOutputText] = React.useState(placeholderText.output)

  const handleInput = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const text = event.target.value
    setInputText(text)
    setOutputText(encryptor.encrypt(text))
  }

  return (
    <Container>
      <Input onChange={event => handleInput(event)} />
      <Output text={outputText} />
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
