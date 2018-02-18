import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import shortid from 'shortid'

import AddressesPane from './AddressesPane'
import colors from '../styles/colors'
import Splitit from '../utils/splitit'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`
const PaddingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  display: flex;
`
const TopArea = styled.div`
  display: flex;
  width: 95vw;
  font-size: 1.2em;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`
const AddressesArea = styled.div`
  display: flex;
  width: 95vw;
  border-radius: 5px;
  overflow: hidden;
  color: ${colors.default_text};
`
const PublishButton = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 20%;
  height: 60%;
  background-color: ${
    props => props.disabled ?
      colors.button_disabled_bg :
      colors.button_background
  };
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
  color: white;
`
const NotConnectedPane = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
`

class Create extends Component {
  static propTypes = {
    web3: PropTypes.object,
    isConnected: PropTypes.bool.isRequired,
  }
  static defaultProps = {
    web3: {},
  }

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

  handlePublish = () => {
    if (!this.props.isConnected) return
    this.splitit = new Splitit(this.props.web3, this.state.addresses)
    this.splitit.initPublish()
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
          {
            !this.props.isConnected ?
              <NotConnectedPane>
                Not Connected to the Ethereum Network
              </NotConnectedPane> :
              ''
          }
          <TopArea>
            <Title>Create Split It Contract</Title>
            <PublishButton
              disabled={ !this.props.isConnected }
              onClick={ this.handlePublish }
            >
              Publish
            </PublishButton>
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
