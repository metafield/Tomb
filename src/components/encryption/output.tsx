import React from 'react'
import styled from 'styled-components'

interface OutputProps {
  text: string
}

export const Output = (props: OutputProps) => {
  return <TextArea placeholder={props.text} disabled={true} />
}

const TextArea = styled.textarea`
  grid-row: 2;
`
