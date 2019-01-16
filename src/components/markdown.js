import React from "react";
import marked from 'marked';

export default class Markdown extends React.Component {
  getMarkdownText() {
    var rawMarkup = marked(this.props.value, {sanitize: true});
    return { __html: rawMarkup };
  }
  render() {
    return <span dangerouslySetInnerHTML={this.getMarkdownText()} />
  }
}