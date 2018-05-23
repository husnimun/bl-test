import React from 'react'
import logo from '../images/logo.png'
import sprite from '../images/sprite.png'
import styled from 'styled-components'

const ResetIcon = styled.button`
  width: 20px;
  height: 20px;
  background: transparent
  border: none;
  background-image: url(${sprite});
  background-position: 0 0;
  background-size: 20px;
  margin-left: auto;
  flex-grow: 0
  cursor: pointer;
`

const Logo = styled.div`
  flex: 1;
  text-align: center;
`

class Header extends React.Component {
  handleClick = () => {
    this.props.resetCategories()
  }
  render() {
    const { className } = this.props
    return (
      <header className={className}>
        <Logo>
          <img src={logo} alt="Logo Bukalapak" />
        </Logo>
        <ResetIcon onClick={this.handleClick} />
      </header>
    )
  }
}

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: #d90646;
`
export default StyledHeader
