import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Address from './Address'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`
const AddButton = styled.div`
  width: 100%;
  background-color: blue;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

class AddressesPane extends React.Component {
  static propTypes = {
    addAddress: PropTypes.func.isRequired,
    addresses: PropTypes.array.isRequired,
  }

  renderAddresses = () => {
    return this.props.addresses.map(addr =>
      <Address
        key={addr.id}
        id={addr.id}
        value={addr.value}
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
