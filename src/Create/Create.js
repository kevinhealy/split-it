import React, { Component } from 'react';
import styled from 'styled-components'
import shortid from 'shortid'

import AddressesPane from './AddressesPane'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const TopArea = styled.div`
  display: flex;
  height: 60px;
`
const AddressesArea = styled.div`
  display: flex;
`

class Create extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addresses: {
        first: {
          address: '',
        },
        second: {
          address: '',
        }
      },
    }
  }

  getAddressCount = () => {
    return Object.keys(this.state.addresses).length
  }

  handleAddAddress = () => {
    if (this.getAddressCount() > 9) return
    const id = shortid.generate()
    const addresses = { ...this.state.addresses }
    addresses[id] = {
      address: ''
    }
    this.setState({ addresses })
  }

  saveAddress = (id, newAddr) => {
    const addresses = { ...this.state.addresses }
    addresses[id].address = newAddr
    this.setState({ addresses })
  }

  handleDelete = (id) => {
    if (this.getAddressCount() < 3) return
    const addresses = { ...this.state.addresses }
    delete addresses[id]
    this.setState({ addresses })
  }

  render() {
    return (
      <Container>
        <TopArea>
          Top Area
        </TopArea>
        <AddressesArea>
          <AddressesPane
            addresses={ this.state.addresses }
            addAddress={ this.handleAddAddress }
            saveAddress={ this.saveAddress }
            handleDelete={ this.handleDelete }
          />
        </AddressesArea>
      </Container>
    );
  }
}

export default Create;
