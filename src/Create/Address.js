import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 30px;
  width: 100%;
`

class Address extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }
  render() {
    return (
      <Container>
        { this.props.value }
      </Container>
    )
  }
}

export default Address
