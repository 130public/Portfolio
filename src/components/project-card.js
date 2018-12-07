import React from "react";
import { Link } from "react-router-dom";

class ProjectCard extends React.Component {

  render(){
    const { post} = this.props;
      return (
        <figure className="card">
          <div>
              <img src="http://placehold.it/300x300"/>
          </div>
          <figcaption>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <Link to={`/projects/${post.slug}`}>Read More</Link>
          </figcaption>
        </figure>
      );
  }
}


export default ProjectCard;