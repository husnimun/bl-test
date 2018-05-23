import React from 'react'
import styled from 'styled-components'
import sprite from '../../images/sprite.png'

const CategoryName = styled.a`
  font-size: 14px;
  color: #9c9c9c;
  margin: 0;
  text-decoration: none;
  flex: 1;
  &:hover {
    cursor: pointer;
  }
`

const CategoryCount = styled.p`
  color: #9c9c9c;
  margin: 0;
  font-size: 14px;
`

const CategoryIcon = styled.div`
  height: 20px;
  width: 20px;
  background-image: url(${sprite});
  background-position: 0 -40px;
  background-size: 20px;
`

class Category extends React.Component {
  handleClick = () => {
    this.props.changeCategories(this.props.sub)
  }

  render() {
    const { className, name, url, count, sub } = this.props
    return (
      <div className={className}>
        <CategoryIcon />
        <CategoryName onClick={this.handleClick}>{name}</CategoryName>
        <CategoryCount>{count}</CategoryCount>
      </div>
    )
  }
}

const StyledCategory = styled(Category)`
  padding: 8px 16px;
  display: flex;
  justify-content: space-around;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 2px;
`

export default StyledCategory
