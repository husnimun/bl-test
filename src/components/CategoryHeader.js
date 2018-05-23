import React from 'react'
import styled from 'styled-components'
import sprite from '../images/sprite.png'

const CancelIcon = styled.button`
  background-color: transparent;
  border: none;
  width: 20px;
  height: 20px;
  background-image: url(${sprite});
  background-position: 0 -20px;
  background-size: 20px;
  display: block;
  cursor: pointer;
`

class CategoryHeader extends React.Component {
  handleClick = () => {
    this.props.popHistory()
  }
  render() {
    const { className, subCategory } = this.props
    return (
      <div className={className}>
        <h2>
          {subCategory ? `Pilih Subkategori ${subCategory}` : 'Pilih Kategori'}:
        </h2>
        <CancelIcon onClick={this.handleClick} />
      </div>
    )
  }
}

const StyledCategoryHeader = styled(CategoryHeader)`
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f0;
  padding: 8px 16px;
  & > h2 {
    margin: 0;
    font-size: 14px;
  }
`

export default StyledCategoryHeader
