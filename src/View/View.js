import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AddressSearch from './AddressSearch'

const Container = styled.div`
  display: flex;
  flex: 1 0;
  flex-direction: column;
  align-items: center;
`
const PaddingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  flex: 1 0;
  align-items: center;
  justify-content: center;
`
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 0;
  width: 100%;
  border: 1px solid green;
`
const Title = styled.div`
  display: flex;
  font-size: 1.2em;
  font-weight: 600;
  flex-direction: row;
  align-items: center;
  width: 95%;
  justify-content: space-between;
  color: white;
`
const ViewArea = styled.div`
  display: flex;
  flex: 11 0;
  width: 100%;
  border: 1px solid blue;
`
class View extends Component {
  static propTypes = {
    web3: PropTypes.object,
    isConnected: PropTypes.bool.isRequired,
  }
  static defaultProps = {
    web3: {}
  }

  constructor(props) {
    super(props)

    this.state = {
      searchSuccessful: false,
      isSearching: false,
      targetContractAddress: '',
      contractObject: {},
    }
  }

  handleSearch = (targetAddress) => {

  }

  render() {
    return (
      <Container>
        <PaddingContainer>
          <TitleContainer>
            <Title>View Split It Contract</Title>
          </TitleContainer>
          <AddressSearch />
          <ViewArea>

          </ViewArea>
        </PaddingContainer>
      </Container>
    );
  }
}

export default View;
