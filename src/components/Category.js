import React from 'react'
import styled from 'styled-components'
import sprite from '../images/sprite.png'

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
  background-position: ${props =>
    props.hasSubCategory ? '0 -40px' : '0 -60px'};
  background-size: 20px;
`

class Category extends React.Component {
  handleClick = () => {
    this.props.changeCategories(this.props.categoryId)
  }

  render() {
    const { className, name, url, count, sub, categoryId } = this.props
    return (
      <div className={className}>
        <CategoryIcon hasSubCategory={sub !== null} />
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
