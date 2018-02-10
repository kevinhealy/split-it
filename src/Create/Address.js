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
    }
  }

  render() {
    return (
      <Container>
        <Input
          value={ this.props.value }
          disabled={ !this.state.editing }
        />
        {
          this.state.editing ?
            <SaveButton
              onClick={() => this.setState({editing: false})}
            >
              Save
            </SaveButton> : ''
        }
      </Container>
    )
  }
}

export default Address
