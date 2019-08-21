import React from 'react'
import styled from 'styled-components'

export const Encryptor = () => {
  return (
    <Container>
      <Input />
      <Input />
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
