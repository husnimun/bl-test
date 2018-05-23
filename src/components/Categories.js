import React from 'react'
import styled from 'styled-components'
import CategoryHeader from './CategoryHeader'
import Category from './Category'
import Header from './Header'

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
    categories: [],
    history: [],
  }

  changeCategories = categoryId => {
    const category = this.state.categories[categoryId]

    if (category.sub) {
      this.setState(
        prevState => ({
          history: [...prevState.history, category],
        }),
        () => {
          const { history } = this.state
          if (history.length > 0) {
            this.setCategories(history[history.length - 1].sub)
          }
        }
      )
    }
  }

  setCategories = category => {
    fetch(`${BASE_API_URL}${category}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ categories: data.categories })
      })
  }

  resetCategories = () => {
    this.setCategories('main.json')
    this.setState({ history: [] })
  }

  popHistory = () => {
    let newHistory = [...this.state.history]
    if (newHistory.length === 0) return

    newHistory.pop()
    this.setState({ history: newHistory }, () => {
      const { history } = this.state
      if (history.length === 0) {
        this.resetCategories()
      } else {
        this.setCategories(history[history.length - 1].sub)
      }
    })
  }

  componentDidMount() {
    this.setCategories('main.json')
  }

  render() {
    const { className } = this.props
    const { categories, history } = this.state

    let currentSub
    if (history.length > 0) {
      currentSub = history[history.length - 1]
    }

    return (
      <div className={className}>
        <Header resetCategories={this.resetCategories} />
        <CategoryHeader
          subCategory={currentSub && currentSub.name}
          popHistory={this.popHistory}
        />
        <CategoryList>
          {categories.length > 0 &&
            categories.map((category, index) => (
              <Category
                key={index}
                categoryId={index}
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
