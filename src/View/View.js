import React, { Component } from 'react';
import styled from 'styled-components';

import AddressSearch from './AddressSearch'

const Container = styled.div`
  display: flex;
  flex: 1 0;
  flex-direction: column;
`
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 0;
`
const SearchInputContainer = styled.div`
  border: 1px solid red;
  flex: 1 0;
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
  border: 1px solid blue;
`
class View extends Component {
  render() {
    return (
      <Container>
        <TitleContainer>
          <Title>View Split It Contract</Title>
        </TitleContainer>
        <SearchInputContainer>
          <AddressSearch />
        </SearchInputContainer>
        <ViewArea>

        </ViewArea>
      </Container>
    );
  }
}

export default View;
