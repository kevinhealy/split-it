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
  align-self: center;
  justify-content: center;
  width: 20%;
  height: 60%;
  background-color: ${colors.button_background};
  color: ${colors.button_content};
  border: solid 1px ${colors.button_stroke};
  border-radius: 5px;
  font-size: .9em;
`
const Title = styled.div`
  display: flex;
  font-size: 1.15em;
  font-weight: 600;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  color: ${colors.default_text}
`
const NotConnectedPane = styled.div`
  height: 70px;
  flex: 1 0;
  background-color: yellow;
`

class Create extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props)
    this.state = {
      isConnected: true,
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

  componentWillMount() {
    const { web3 } = this.props
    if (web3) {
      web3.eth.getAccounts((err, accs) => {
        if (!err && accs.length)
          this.setState({ isConnected: true })
        else this.setState({isConnected: false})
        console.log('accs:', accs)
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    const { web3 } = nextProps
    if (web3) {
      web3.eth.getAccounts((err, accs) => {
        if (!err && accs.length)
          this.setState({ isConnected: true })
        else this.setState({isConnected: false})
        console.log('accs:', accs)
      })
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
    console.log('props:', this.props)
    console.log('state:', this.state)
    return (
      <Container>
        <PaddingContainer>
          {
            !this.state.isConnected ? <NotConnectedPane /> : ''
          }
          <TopArea>
            <Title>Create Split It Contract</Title>
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
