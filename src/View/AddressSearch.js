import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from '../styles/colors'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1 0;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
`
const PaddingContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
`
const Input = styled.input`
  flex: 4 0;
  font-size: 13px;
  border-radius: 5px 0 0 5px;
  height: 100%;
  padding: 0 5px;
  border: 1px solid gray;
`
const InputButtonContainer = styled.div`
  display: flex;
  flex: 1 0;
  height: 100%;
`
const SearchButton = styled.div`
  display: flex;
  flex: 1 0;
  height: 100%;
  background-color: ${colors.button_background};
  justify-content: center;
  align-items: center;
  border-radius: 0 5px 5px 0;
  border: 1px solid ${colors.button_stroke};
  border-left: none;
  position: relative;
  bottom: 1px;
  color: ${colors.button_content};
`

class AddressSearch extends React.Component {
  static propTypes = {
    isSearching: PropTypes.bool.isRequired,
    searchSuccessful: PropTypes.bool.isRequired,
    currentAddress: PropTypes.string,
  }
  static defaultProps = {
    currentAddress: '',
  }

  render() {
    return (
      <Container>
        <PaddingContainer>
          <Input
            placeholder="Address of Existing Split It Contract"
          />
          <InputButtonContainer>
            <SearchButton>
              Search
            </SearchButton>
          </InputButtonContainer>
        </PaddingContainer>
      </Container>
    )
  }
}

export default AddressSearch
