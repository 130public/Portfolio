import React from "react";
import Link from '../link'
import styles from './card.module.scss'


class Card extends React.Component {

  render(){
    const { hit, i } = this.props;
    let description;
    if(typeof hit.description == "string"){
      description = hit.description;
    }else if(typeof hit.description == "object"){
      description = hit.description.description;
    } else{
      description = "";
    }
     

    let CTA;
    if(hit.source !== undefined){
      CTA = <a href={hit.source} target="_blank" title={hit.author}>Source</a>
    }else{
      CTA = <Link to={`/projects/${hit.slug}`}>Read More</Link>
    }
    return (
      <figure className={styles.card}>
          <div className={styles.image}>
            <img src={hit.thumbnail.file.url} title={hit.thumbnail.title} alt={hit.thumbnail.description}/>
          </div>
          <figcaption className={styles.caption}>
            <div className={styles.heading}>
              <h3 className="type--subtitle1">{hit.title}</h3>
            </div>
            <div class={styles.description}>
              <p className="type--body1">{description}</p>
            </div>
            {CTA}
          </figcaption>
      </figure>
    );
  }
}
export default Card;