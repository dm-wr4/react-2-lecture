import React from 'react'

const Article = (props) => {
  // console.log(props)
  const handleClick = () => {
    const { title, image, author } = props
    props.handleFocusArticle(title, image, author)
  }

  return (
    <div onClick={handleClick} className="article">
      <img className="article-image" src={props.image} alt={props.title} />
      <p className="article-title">{props.title}</p>
      <p className="article-author">By: {props.author}</p>
    </div>
  )
}

export default Article
