import React from 'react'
import styled from 'styled-components'

class CategoryHeader extends React.Component {
  render() {
    const { className } = this.props
    return (
      <div className={className}>
        <h2>Pilih kategori</h2>
      </div>
    )
  }
}

const StyledCategoryHeader = styled(CategoryHeader)`
  background-color: #f0f0f0;
  padding: 8px 16px;
  & > h2 {
    margin: 0;
    font-size: 14px;
  }
`

export default StyledCategoryHeader
