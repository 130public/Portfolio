import React from "react";
import styles from './card-resource.module.scss'


class ResourceCard extends React.Component {

  render(){
    const { post, i } = this.props;
      return (
        
        <figure className={styles.card}>
          <a href={post.source} target="_blank">
          <div className={styles.image}>
              <img src={post.thumbnail.file.url}/>
          </div>
          <figcaption className={styles.caption}>
            <h3 className={styles.heading}>{post.title}</h3>
            {/* <p>{post.description}</p> */}
          </figcaption>
          </a>
        </figure>
      );
  }
}


export default ResourceCard;