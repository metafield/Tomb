import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import bcrypt from 'bcryptjs'
import { Encryptor } from './Encryptor'

const placeholderText = {
  input: `Type in your secret message!`,
  output: `Your secret text appears here!`,
}

const encryptor = new Encryptor()

export const Encryption = (): JSX.Element => {
  const [inputText, setInputText] = React.useState(placeholderText.input)
  const [outputText, setOutputText] = React.useState(placeholderText.output)
  const [password, setPassword] = React.useState('pass')
  const [hidePass, setHidePass] = React.useState(true)
  const [hash, setHash] = React.useState('pass')

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const password = event.target.value
    setPassword(password)
    bcrypt.hash(password, 10, (err, hash) => {
      setHash(hash)
    })
  }

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const text = event.target.value
    setInputText(text)
    setOutputText(encryptor.encrypt(text))
  }

  const handleOutputChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const text = event.target.value
    console.log(encryptor.decrypt(text))
  }

  const handleShowPassToggle = () => {
    setHidePass(!hidePass)
  }

  return (
    <Container>
      <div>
        <h1>Enter a passphrase!</h1>
        <Password
          type={hidePass ? 'password' : 'text'}
          onChange={handlePasswordChange}
        />
        <button onClick={handleShowPassToggle}>
          {hidePass ? 'show' : 'hide'}
        </button>
        <button onClick={() => encryptor.decrypt(outputText + hash)}>
          decrypt
        </button>
      </div>
      <Input onChange={event => handleInputChange(event)} />
      <Output value={outputText + hash} onChange={handleOutputChange} />
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  grid-column: 2;
  display: grid;
  grid-gap: 25px;
  grid-template: 100px 1fr 1fr / 1fr;

  > * {
    font: 1rem/ 1.5rem var(--body-font);
  }
`

const Input = styled.textarea``

const Output = styled.textarea``

const Password = styled.input`
  width: 100%;
`
