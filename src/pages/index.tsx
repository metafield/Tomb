import React from 'react'
import styled from 'styled-components'
import '../styles/global.css'
import { Encryptor } from '../components/encryptor/encryptor'

export default () => (
  <Container>
    <Encryptor />
  </Container>
)

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template: 1fr / 50px 1fr 50px;
`
