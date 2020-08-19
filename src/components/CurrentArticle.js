import React, { Component } from 'react'

class CurrentArticle extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    // console.log(this.props)

    return (
      <div>
        <p>{this.props.data.currentTitle}</p>
        <p>By: {this.props.data.currentAuthor}</p>
      </div>
    )
  }
}

export default CurrentArticle
