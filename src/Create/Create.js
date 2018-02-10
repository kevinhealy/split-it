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
      addresses: [
        {
          id: '3fws34gwe',
          value: '42cg3tb345c52yv4t42 g3523'
        },
        {
          id: 'dfdgfdgdfg',
          value: '42cg3tb345c52yv4t42g3523'
        },
      ],
    }
  }

  addAddress = () => {
    console.log('addAddress')
  }

  render() {
    return (
      <Container>
        <TopArea>
          Top Area
        </TopArea>
        <AddressesArea>
          <AddressesPane
            addAddress={ this.addAddress }
            addresses={ this.state.addresses }
          />
        </AddressesArea>
      </Container>
    );
  }
}

export default Create;
