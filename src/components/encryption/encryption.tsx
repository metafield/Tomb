import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import bcrypt from 'bcryptjs'
import { Encryptor } from './Encryptor'
import { Message } from './message'

const placeholderText = {
  input: `Type in your secret message or paste in a code!`,
  output: `Your secret text appears here!`,
}

const encryptor = new Encryptor()
const hashLength = 60

export const Encryption = (): JSX.Element => {
  const [inputText, setInputText] = React.useState('')
  const [outputText, setOutputText] = React.useState('')
  const [decodedMessage, setDecodedMessage] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [hidePass, setHidePass] = React.useState(true)
  const [hash, setHash] = React.useState('')
  const [showMessageModal, setShowMessageModal] = React.useState(false)
  const hideMessage = () => setShowMessageModal(false)

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const password = event.target.value
    setPassword(password)
    bcrypt.hash(password, 10, (err, hash) => {
      setHash(hash)
    })
  }

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const text = event.target.value
    if (shouldTryDecrypt(text)) {
      const decoded = encryptor.decrypt(text)
      setDecodedMessage(decoded)
      setShowMessageModal(true)
    }
    setInputText(text)
    setOutputText(encryptor.encrypt(text))
  }

  const shouldTryDecrypt = (text: string): boolean => {
    if (text.length < hashLength || !isValidPassword(password)) {
      return false
    }

    const hash = text.slice(-60)
    try {
      if (!bcrypt.compareSync(password, hash)) {
        alert('password does not match')
        return false
      }
    } catch (error) {
      return false
    }

    return true
  }

  const isValidPassword = (pass: string): boolean => {
    return pass.length > 0
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
    <>
      {showMessageModal && (
        <Message message={decodedMessage} close={hideMessage} />
      )}
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
        </div>
        <Input
          onChange={event => handleInputChange(event)}
          placeholder={placeholderText.input}
        />
        <Output
          value={outputText + hash}
          onChange={handleOutputChange}
          placeholder={placeholderText.output}
        />
      </Container>
    </>
  )
}

const Container = styled.div`
  height: 100%;
  grid-column: 2;
  display: grid;
  grid-gap: 25px;
  grid-template: 100px 1fr 1fr / 1fr;
  padding: 25px 0;

  > * {
    font: 1rem/ 1.5rem var(--body-font);
  }
`

const Input = styled.textarea``

const Output = styled.textarea``

const Password = styled.input`
  width: 100%;
`
