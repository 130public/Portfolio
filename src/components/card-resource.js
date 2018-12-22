import React from "react";
import styles from './card-resource.module.scss'


class ResourceCard extends React.Component {

  render(){
    const { post, i } = this.props;
      return (
        
        <figure className={styles.card}>
          <div className={styles.image}>
              <img src={post.thumbnail.file.url}/>
          </div>
          <figcaption className={styles.caption}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <a href={post.source} target="_blank">Learn More</a>
          </figcaption>
        </figure>
      );
  }
}


export default ResourceCard;