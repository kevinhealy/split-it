import React, { Component } from 'react';
import styled from 'styled-components'
import shortid from 'shortid'

import AddressesPane from './AddressesPane'
import colors from '../styles/colors'


const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`
const PaddingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  width: 100%;
  height: 100%;
  display: flex;

`
const TopArea = styled.div`
  display: flex;
  font-size: 1.2em;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`
const AddressesArea = styled.div`
  display: flex;
  color: ${colors.default_text};
`
const PublishButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 75%;
  background-color: ${colors.button_background};
  color: ${colors.button_content};
  border: solid 1px ${colors.button_stroke};
  border-radius: 5px;
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
        <PaddingContainer>
          <TopArea>
            Create a Split It Smart Contract
            <PublishButton>Publish</PublishButton>
          </TopArea>
          <AddressesArea>
            <AddressesPane
              addresses={ this.state.addresses }
              addAddress={ this.handleAddAddress }
              saveAddress={ this.saveAddress }
              handleDelete={ this.handleDelete }
            />
          </AddressesArea>
        </PaddingContainer>
      </Container>
    );
  }
}

export default Create;
