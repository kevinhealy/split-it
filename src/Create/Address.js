import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  border-bottom: 1px solid black;
  align-items: center;
  justify-content: space-around;
`
const Input = styled.input`
  flex: 7 0;
  height: 70%;
  margin-right: 7px;
  margin-left: 7px;
  padding-left: 5px;
  font-size: 13px;
  border-radius: 5px;
  border: 1px solid black;
`
const SaveButton = styled.div`
  flex: 1 0;
  height: 75%;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-right: 10px;
`
const LockedInput = styled.div`
  display: flex;
  flex: 7 0;
  height: 80%;
  align-items: center;
  font-size: 13px;
  padding-left: 5px;
`
const LockedButtonsContainer = styled.div`
  flex: 1 0;
  display: flex;
  height: 75%;
  justify-content: space-between;
  align-items: stretch;
  margin-right: 5px;
`
const EditButton = styled.div`
  display: flex;
  flex: 1 0;
  align-items: center;
  justify-content: center;
  background-color: yellow;
  border: 1px solid black;
  border-radius: 5px;
  margin-right: 5px;
`
const DeleteButton = styled.div`
  display: flex;
  flex: 1 0;
  align-items: center;
  justify-content: center;
  background-color: red;
  border: 1px solid black;
  border-radius: 5px
`

class Address extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    saveAddress: PropTypes.func.isRequired,
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
        <Container>
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
        </Container>
      )
    }
    return (
      <Container>
        <LockedInput>
          { this.props.value }
        </LockedInput>
        <LockedButtonsContainer>
          <EditButton
            onClick={() => this.setState({editing: true})}
          >
            <i className="material-icons">edit</i>
          </EditButton>
          <DeleteButton
            onClick={() => this.props.handleDelete(this.props.id)}
          >
            <i className="material-icons">delete</i>
          </DeleteButton>
        </LockedButtonsContainer>
      </Container>
    )
  }
}

export default Address
