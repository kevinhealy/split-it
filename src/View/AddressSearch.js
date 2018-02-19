import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from '../styles/colors'
import EditSvg from '../icons/Edit'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1 0;
  justify-content: center;
`
const PaddingContainer = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
`
const InputContainer = styled.div`
  flex: 4 0;
  height: 100%;
  display: flex;
`
const Input = styled.input`
  width: 100%;
  font-size: 13px;
  border-radius: 5px 0 0 5px;
  height: 100%;
  padding: 0 5px;
  border: 1px solid gray;
`
const LockedInput = styled.div`
  display: flex;
  width: 80vw;
  height: 100%;
  align-items: center;
  color: ${colors.default_text};
  font-size: 13px;
`
const LockedInputText = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  color: grey;
  font-size: 1.2em;
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
  color: ${colors.button_content};
`
const EditButton = styled.div`
  display: flex;
  flex: 1 0;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${colors.button_background};
  border: 1px solid ${colors.button_stroke};
  border-radius: 5px;
`

class AddressSearch extends React.Component {
  static propTypes = {
    isSearching: PropTypes.bool.isRequired,
    searchSuccessful: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      targetAddress: '',
      addressLocked: false,
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.searchSuccessful) this.setState({addressLocked: true})
  }

  handleSearch = () => {
    this.props.handleSearch(this.state.targetAddress)
  }

  render() {
    console.log('state:',this.state)
    return (
      <Container>
        <PaddingContainer>
          <InputContainer>
            {
              this.props.isSearching || this.state.addressLocked ?
                <LockedInput>
                  <LockedInputText>
                    {this.state.targetAddress}
                  </LockedInputText>
                </LockedInput> :
                <Input
                  placeholder="Address of Existing Split It Contract"
                  value={this.state.targetAddress}
                  onChange={e => this.setState({targetAddress: e.target.value})}
                />
            }
          </InputContainer>
          <InputButtonContainer>
            {
              this.state.addressLocked ?
                <EditButton onClick={() => this.setState({addressLocked: false})}>
                  <EditSvg />
                </EditButton> :
                <SearchButton
                  onClick={this.handleSearch}
                >
                  Search
                </SearchButton>
            }
          </InputButtonContainer>
        </PaddingContainer>
      </Container>
    )
  }
}

export default AddressSearch
