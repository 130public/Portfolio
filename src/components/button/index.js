import React from 'react'
import classNames from 'classnames/bind';
import buttonStyles from "./button.module.scss";

let cx = classNames.bind(buttonStyles);

class Button extends React.Component {
  render () {
    let className = cx(buttonStyles.button, this.props.classNames);
    return (
      <button className={className}>{this.props.children}</button>
    );
  }
};

export default Button