import React from "react";
import classNames from 'classnames/bind';
import GatsbyLink from 'gatsby-link'
import linkStyles from "./Link.module.scss";

let cx = classNames.bind(linkStyles);

export default class Link extends React.Component {
  render(){
    let className = cx({
      [linkStyles.link]: !this.props.className,
      [this.props.className]: this.props.className
    });
    return <GatsbyLink className={className} to={this.props.to}>{this.props.children}</GatsbyLink>;
  }
}