import React from 'react'
import styled from 'styled-components'
import '../styles/global.css'
import { Encryptor } from '../components/encryption/encryptor'
import { Encryption } from '../components/encryption/Encryption'

const tomb = new Encryptor()

export default () => (
  <Container>
    <p>
      {tomb.alphabet}->{tomb.cipher}
    </p>
    <Encryption />
  </Container>
)

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 50px 1fr 50px;

  > p {
    grid-column: 2;
    border: solid cyan 1px;
  }
`
