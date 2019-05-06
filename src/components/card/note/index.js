import React from "react";

import Link from '../../link'
import styles from '../card.module.scss'


class Card extends React.Component {

  render(){
    const { hit, i } = this.props;
    const uri = `/notes/${hit.slug}`;
     
    let CTA;
    CTA = <Link to={uri}>Read More</Link>
    
    function redirectToSource(){
      console.log(uri);
      window.open(uri,"_self");
    }

    return (
      <figure className={styles.card} onClick={redirectToSource}>
          <figcaption className={styles.caption}>
            <h3 className={styles.heading}>{hit.title}</h3>
            {hit.updatedAt !== undefined && <p className={styles.description}>{hit.updatedAt}</p> }
            {CTA}
          </figcaption>
      </figure>
    );
  }
}
export default Card;