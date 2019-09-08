import React from 'react'
import styled from 'styled-components'

interface MessageProps {
  message: string
}

export const Message = ({ message }: MessageProps): JSX.Element => {
  return (
    <Container>
      <h1>{message}</h1>
    </Container>
  )
}

const Container = styled.div`
  background: red;
`
