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
const Title = styled(NavLink)`
  display: flex;
  flex: 1.5 0;
  font-weight: 600;
  font-size: 1.6em;
  color: white;
  align-items: center;
  margin-left: 10px;
  text-decoration: none;
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
      web3: {},
      isConnected: false,
    }

    this.connectToNetwork().then(() => console.log('Connected:', this.state))
  }

  connectToNetwork = () => {
    return new Promise((resolve, reject) => {
      const interval = window.setInterval(async () => {
        const results = await getWeb3
        if (!results) return console.error('Error finding web3.')
        const { web3 } = results
        const app = this
        web3.eth.getAccounts((err, accs) => {
          if (!err && accs.length) {
            clearInterval(interval)
            app.setState({
              web3,
              isConnected: true,
              currentAccount: accs[0]
            })
            resolve()
          }
        })
      }, 100)
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Header>
            <Title
              exact
              to="/"
            >
              Split It
            </Title>
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
          <Route path="/create" render={() =>
            <Create
              web3={this.state.web3}
              isConnected={this.state.isConnected}
            />
          }/>
          <Route path="/view" component={View}/>
        </div>
      </Router>
    );
  }
}

export default App;
