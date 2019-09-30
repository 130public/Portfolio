import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faExternalLinkAlt);
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
     
    console.log(hit);

    let CTA;
    if(hit.source !== undefined){
      CTA = <a href={hit.source} aria-label={`External link to ${hit.title}`}>Go to source <FontAwesomeIcon size="xs" icon={faExternalLinkAlt} />
      </a>
    }else if(hit.type == 'note'){
      CTA = <Link to={`/notes/${hit.slug}`} aria-label={`Read more about ${hit.title}`}>Read More</Link>
    }else{
      CTA = <Link to={`/projects/${hit.slug}`} aria-label={`Read more about ${hit.title}`}>Read More</Link>
    }

    function redirectToSource(){
      //console.log(hit.source);
      window.open(hit.source,"_self");
    }
    const Skillslist = props => {
      const {data,count} = props;
      var skillString ="";

      if(data != undefined){
        const sliceCount = (count != undefined) ? count : data.length;
        var ending = ";"
        data.slice(0, sliceCount).map(( {name}, index ) => {

          if(index < sliceCount-1) ending = ", "
          if(index == data.length-1) ending = ""
          if(index == sliceCount-1) ending = "…"
          
          skillString += name+ending;
        })
      }

      return skillString;
    }
    return (
      <figure className={styles.card} onClick={redirectToSource}>
          {hit.thumbnail !== undefined &&
          <div className={styles.image}>
            <img src={hit.thumbnail.fluid.src} title={hit.thumbnail.title} alt={hit.thumbnail.description}/>
          </div>}
          <figcaption className={styles.caption}>
            <h3 className={styles.heading}>{hit.title}</h3>
            {description !== undefined && <p className={styles.description}>{description}</p> }
            {hit.skills !== undefined &&
              <p className={styles.skills}>
                Topics: <Skillslist data={hit.skills} count={3} />
              </p>
            }
            {CTA}
          </figcaption>
      </figure>
    );
  }
}
export default Card;