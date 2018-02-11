import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Address from './Address'

const Container = styled.div`
  flex: 1 0;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`
const AddButton = styled.div`
  width: 100%;
  background-color: blue;
  height: 50px;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

class AddressesPane extends React.Component {
  static propTypes = {
    addAddress: PropTypes.func.isRequired,
    addresses: PropTypes.object.isRequired,
    saveAddress: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
  }

  renderAddresses = () => {
    const { addresses, saveAddress, handleDelete } = this.props
    return Object.keys(addresses).map(id =>
      <Address
        key={ id }
        id={ id }
        value={ addresses[id].address }
        saveAddress={ saveAddress }
        handleDelete={ handleDelete }
      />
    )
  }

  render() {
    const { addAddress } = this.props
    return (
      <Container>
        { this.renderAddresses() }

        <AddButton
          onClick={ addAddress }
        >
          Add another address
        </AddButton>
      </Container>
    )
  }
}

export default AddressesPane
