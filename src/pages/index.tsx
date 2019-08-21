import React from 'react'
import styled from 'styled-components'

export default () => (
  <Container>
    <p>Hello</p>
    <p>World</p>
  </Container>
)

const Container = styled.div`
  display: grid;
  height: 100vh;
  align-content: center;
  grid-template: auto / 1fr 1fr;

  > p {
    text-align: center;
    font: 3rem / 1.2rem 'Livvic', sans-serif;
    font-weight: 600;
  }
`
