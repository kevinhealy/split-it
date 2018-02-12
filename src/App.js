import React, { Component } from 'react';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom'
import getWeb3 from './utils/getWeb3'

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
font-weight: 600;
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

  constructor(props) {
    super(props)

    this.state = {
      web3: null,
    }
  }

  componentWillMount() {
    getWeb3
    .then(results => {
      this.setState({ web3: results.web3 })
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

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
          <Route path="/create" render={() => <Create web3={this.state.web3} />}/>
          <Route path="/view" component={View}/>
        </div>
      </Router>
    );
  }
}

export default App;
