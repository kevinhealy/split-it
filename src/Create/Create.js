import React, { Component } from 'react';
import styled from 'styled-components'

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
        f982: {
          address: ''
        },
        f98e2: {
          address: ''
        },
        f9v82: {
          address: ''
        },
        f98w2: {
          address: ''
        },
      },
    }
  }

  addAddress = () => {
    console.log('addAddress')
  }

  saveAddress = (id, newAddr) => {
    const addresses = { ...this.state.addresses }
    addresses[id].address = newAddr
    this.setState({ addresses })
  }

  handleDelete = (id) => {
    if (Object.keys(this.state.addresses).length < 3) return
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
            addAddress={ this.addAddress }
            saveAddress={ this.saveAddress }
            handleDelete={ this.handleDelete }
          />
        </AddressesArea>
      </Container>
    );
  }
}

export default Create;
