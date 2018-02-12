import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import DeleteSvg from '../icons/Delete'
import EditSvg from '../icons/Edit'
import colors from '../styles/colors'


const Container = styled.div`
  display: flex;
  height: 65px;
  width: 100%;
  align-items: center;
  background-color: ${
    props => props.isdark ? `${colors.address_bg_dark}` : `${colors.address_bg_light}`
  };
`
const InnerContainer = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  padding: 0 10px;
  display: flex;
  justify-content: space-around;
`
const Input = styled.input`
  flex: 4 0;
  height: 60%;
  font-size: 13px;
  border-radius: 5px 0 0 5px;
  padding: 0 5px;
  border: 1px solid gray;
  ${'' /* border: 1px solid ${colors.default_text}; */}
`
const SaveButton = styled.div`
  display: flex;
  flex: 1 0;
  height: 60%;
  background-color: ${colors.button_background};
  justify-content: center;
  align-items: center;
  border-radius: 0 5px 5px 0;
  border: 1px solid ${colors.button_stroke};
  border-left: none;
  padding: 0 10px;
  color: ${colors.button_content};
`
const LockedInput = styled.div`
  display: flex;
  flex: 6 0;
  height: 80%;
  font-size: 1.2em;
  align-items: center;
  color: ${colors.default_text};
  font-size: 13px;
  padding-left: 5px;
`
const LockedButtonsContainer = styled.div`
  flex: 2 0;
  display: flex;
  height: 75%;
  justify-content: space-between;
  align-items: stretch;
`
const EditButton = styled.div`
  display: flex;
  flex: 1 0;
  align-items: center;
  justify-content: center;
  background-color: ${colors.button_background};
  border: 1px solid ${colors.button_stroke};
  border-radius: 5px;
  margin-right: 5px;
`
const DeleteButton = styled.div`
  display: flex;
  flex: 1 0;
  align-items: center;
  justify-content: center;
  background-color: ${colors.delete_button_background};
  border: 1px solid ${colors.delete_button_stroke};
  border-radius: 5px
`

class Address extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    saveAddress: PropTypes.func.isRequired,
    isDark: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      editing: true,
      value: '',
    }
  }

  handleSave = (value) => {
    const { id, saveAddress } = this.props
    saveAddress(id, this.state.value)
    this.setState({ editing: false })
  }

  render() {
    if (this.state.editing) {
      return (
        <Container isdark={ this.props.isDark }>
          <InnerContainer>
            <Input
              defaultValue={ this.state.value }
              placeholder="Input a valid ethereum address"
              disabled={ !this.state.editing }
              onChange={ e => this.setState({ value: e.target.value })}
            />
            <SaveButton
              onClick={ this.handleSave }
            >
              Save
            </SaveButton>
          </InnerContainer>
        </Container>
      )
    }
    return (
      <Container isdark={ this.props.isDark }>
        <InnerContainer>
          <LockedInput>
            { this.props.value }
          </LockedInput>
          <LockedButtonsContainer>
            <EditButton
              onClick={() => this.setState({editing: true})}
            >
              <EditSvg />
            </EditButton>
            <DeleteButton
              onClick={() => this.props.handleDelete(this.props.id)}
            >
              <DeleteSvg />
            </DeleteButton>
          </LockedButtonsContainer>
        </InnerContainer>
      </Container>
    )
  }
}

export default Address
