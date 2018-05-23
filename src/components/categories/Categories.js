import React from 'react'
import styled from 'styled-components'
import CategoryHeader from './CategoryHeader'
import Category from './Category'

const CategoryList = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  & > div:nth-child(2n) {
    background: #f8f8f8;
  }
`

const BASE_API_URL = 'http://localhost:3001/'

class Categories extends React.Component {
  state = {
    categories: {},
  }

  changeCategories = url => {
    if (!url) return
    fetch(`${BASE_API_URL}${url}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ categories: data.categories })
      })
  }

  initData = () => {
    fetch(`${BASE_API_URL}main.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({ categories: data.categories })
      })
  }

  componentDidMount() {
    this.initData()
  }

  render() {
    const { className } = this.props
    const { categories } = this.state

    return (
      <div className={className}>
        <CategoryHeader />
        <CategoryList>
          {categories.length > 0 &&
            categories.map((category, index) => (
              <Category
                key={index}
                name={category.name}
                count={category.count}
                url={category.url}
                sub={category.sub}
                changeCategories={this.changeCategories}
              />
            ))}
        </CategoryList>
      </div>
    )
  }
}

export default Categories
