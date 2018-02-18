import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const InnerContainer = styled.div`
  display: flex;
  width: 95%;
  border: 1px solid orange;
  height: 100%;
`
const Input = styled.input`
  flex: 5 0;
  height: 60%;
  font-size: 13px;
  border-radius: 5px 0 0 5px;
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
        <InnerContainer>
          <Input />
          <InputButtonContainer>

          </InputButtonContainer>
        </InnerContainer>
      </Container>
    )
  }
}

export default AddressSearch
