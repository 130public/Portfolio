import React from "react";
import Link from '../components/link'
import styles from './card-project.module.scss'

class ProjectCard extends React.Component {

  render(){
    const { post} = this.props;
      return (
        <figure className={styles.card}>
          <div className={styles.image}>
              <img src="http://130public.net/assets/img/work/retxt/retxt-feature.jpg"/>
          </div>
          <figcaption className={styles.caption}>
            <h3 className="type--subtitle1">{post.title}</h3>
            <p className="type--body1">This is a static placeholder description that map not actually represent a realistic description length.{post.description}</p>
            <Link to={`/projects/${post.slug}`}>Read More</Link>
          </figcaption>
        </figure>
      );
  }
}


export default ProjectCard;