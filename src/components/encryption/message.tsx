import React, { MouseEvent } from 'react'
import styled from 'styled-components'

interface MessageProps {
  message: string
  show: boolean
}

export const Message = ({
  message,
  show,
}: MessageProps): JSX.Element | null => {
  const [enabled, setEnabled] = React.useState(show)

  if (!enabled) {
    return null
  }

  const onBackgroundClick = () => {
    setEnabled(false)
  }

  const onMessageBoxClick = (event: MouseEvent) => {
    event.stopPropagation()
  }

  return (
    <Container id="modal" onClick={onBackgroundClick}>
      <MessageBox onClick={onMessageBoxClick}>
        <h3>Access Granted</h3>
        <hr />
        <p>{message}</p>
      </MessageBox>
    </Container>
  )
}

const Container = styled.div`
  background: rgba(0.4, 0.4, 0.4, 0.8);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const MessageBox = styled.div`
  border-top: 4px green solid;
  background-color: rgba(0.4, 0.4, 0.4, 0.8);
  > p,
  h3 {
    color: white;
    text-align: center;
    padding: 1rem;
  }
`
