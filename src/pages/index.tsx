import React from 'react'
import styled from 'styled-components'
import '../styles/global.css'
import { Encryption } from '../components/encryption/Encryption'

export default () => (
  <Container>
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
