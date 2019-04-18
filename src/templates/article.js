import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

class ArticleTemplate extends React.Component {
  render() {
    const{data,location} = this.props;
    return (
      <article className="article">
        {data}
      </article>
    );
  }
}

export default ArticleTemplate