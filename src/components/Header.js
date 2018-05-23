import React from 'react'
import logo from '../images/logo.png'
import styled from 'styled-components'

class Header extends React.Component {
  resetData = () => {
    console.log('reload')
  }
  render() {
    const { className } = this.props
    return (
      <header className={className}>
        <img src={logo} alt="Logo Bukalapak" />
        {/* <button type="button" onClick={this.resetData}>
          reload
        </button> */}
      </header>
    )
  }
}

const StyledHeader = styled(Header)`
  padding: 12px;
  background-color: #d90646;
  text-align: center;
`
export default StyledHeader
