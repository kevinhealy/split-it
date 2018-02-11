import React, { Component } from 'react';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom'

import About from './About/'
import View from './View/'
import Create from './Create/'

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: blue;
  justify-content: space-between;
`
const NavButtonContainer = styled.div`
  display: flex;
`
const NavButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100px;
  text-decoration: none;
  color: black;
`
const Title = styled.div`
  display: flex
  color: white;
  align-items:
`
const activeStyle = {
  backgroundColor: 'red',
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header>
            <Title>Split It</Title>
            <NavButtonContainer>
              <NavButton
                exact
                to="/create"
                activeStyle={ activeStyle }
              >
                Create
              </NavButton>
              <NavButton
                exact
                to="/view"
                activeStyle={ activeStyle }
              >
                Find
              </NavButton>
            </NavButtonContainer>
          </Header>
          <Route exact path="/" component={About}/>
          <Route path="/create" component={Create}/>
          <Route path="/view" component={View}/>
        </div>
      </Router>
    );
  }
}

export default App;
