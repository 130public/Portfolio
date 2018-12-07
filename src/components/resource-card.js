import React from "react";

class ResourceCard extends React.Component {

  render(){
    const { post, i } = this.props;
      return (
        <figure className="card">
          <div>
          <img src={post.thumbnail.url} alt={post.thumbnail.title}/>
          </div>
          <figcaption>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <a href={post.source} target="_blank">Learn More</a>
          </figcaption>
        </figure>
      );
  }
}


export default ResourceCard;