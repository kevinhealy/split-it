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
import colors from './styles/colors'

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: ${colors.navbar_bg};
  justify-content: space-between;
`
const Title = styled.div`
display: flex;
flex: 1.5 0;
font-size: 1.6em;
color: white;
align-items: center;
margin-left: 10px;
`
const NavButtonContainer = styled.div`
  display: flex;
  flex: 1 0;
`
const NavButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1 0;
  text-decoration: none;
  color: ${colors.navbar_text};
`
const activeStyle = {
  color: colors.navbar_selection_text,
  backgroundColor: colors.navbar_selection_bg,
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
