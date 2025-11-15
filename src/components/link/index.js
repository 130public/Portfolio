import React from "react";
import classNames from 'classnames/bind';
import { Link as GatsbyLink } from 'gatsby'
import linkStyles from "./link.module.scss";

let cx = classNames.bind(linkStyles);

export default class Link extends React.Component {
  render(){
    const {hit,to} = this.props;
    let className = cx({
      [linkStyles.link]: !this.props.className,
      [this.props.className]: this.props.className,
      [linkStyles.button]: this.props.type == 'button'
    });
    
    return <>
      { to !== undefined &&
        <GatsbyLink 
        className={className}
        to={to}
        >   
          {this.props.children}
        </GatsbyLink>
      }
      { hit !== undefined &&
        <a 
        className={className}
        href={hit.source} 
        >
          {this.props.children}
        </a>
      }
    </>;
  }
}