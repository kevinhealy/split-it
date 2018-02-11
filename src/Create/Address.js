import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 30px;
  width: 100%;
  border-bottom: 1px solid black;
  align-items: center;
  justify-content: space-between;
`
const Input = styled.input`
  width: 80%;
  height: 80%;
`
const SaveButton = styled.div`
  height: 75%;
  width: 60px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-right: 5px;
`
const LockedInput = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  align-items: center;
  font-size: 12px;
  padding-left: 5px;
`
const LockedButtonsContainer = styled.div`
  flex: 1 1;
  display: flex;
  justify-content: space-around;
  border: 1px solid blue;
`
const EditButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;
  border: 1px solid black;
  border-radius: 5px
`
const DeleteButton = styled.div`
  display: flex;
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
  }

  constructor(props) {
    super(props)
    this.state = {
      editing: true,
      value: this.props.value,
    }
  }

  render() {
    if (this.state.editing) {
      return (
        <Container>
          <Input
            defaultValue={ this.props.value }
            disabled={ !this.state.editing }
          />
          <SaveButton
            onClick={() => this.setState({editing: false})}
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
          <EditButton>
            <i className="material-icons">edit</i>
          </EditButton>
          <DeleteButton>
            <i className="material-icons">delete</i>
          </DeleteButton>
        </LockedButtonsContainer>
      </Container>
    )
  }
}

export default Address
