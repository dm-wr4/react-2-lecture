import React, { Component } from 'react'
import Article from './Article'
import CurrentArticle from './CurrentArticle'
import data from '../data.json'

class NewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      currentImage: '',
      currentTitle: '',
      currentAuthor: '',
    }
    this.handleFocusArticle = this.handleFocusArticle.bind(this)
  }

  handleFocusArticle(title, image, author) {
    this.setState({
      currentTitle: title,
      currentAuthor: author,
      currentImage: image,
    })
  }

  render() {
    const articles = data.map((element) => {
      return (
        <Article
          key={element.id}
          exampleProp="This is a prop"
          title={element.title}
          author={element.author}
          image={element.image}
          handleFocusArticle={this.handleFocusArticle}
        />
      )
    })

    return (
      <div className="news-container">
        <CurrentArticle data={this.state} />
        <div className="articles-container">{articles}</div>
      </div>
    )
  }
}

export default NewsContainer
