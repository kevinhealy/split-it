import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
`
const Input = styled.input`
  flex: 5 0;
  font-size: 13px;
  border-radius: 5px 0 0 5px;
  height: 60%;
  padding: 0 5px;
  border: 1px solid gray;
`
const InputButtonContainer = styled.div`
  display: flex;
  flex: 1 0;
`

class AddressSearch extends React.Component {
  render() {
    return (
      <Container>
        <Input />
        <InputButtonContainer>

        </InputButtonContainer>
      </Container>
    )
  }
}

export default AddressSearch
