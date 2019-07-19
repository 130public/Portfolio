import React from "react";
import marked from 'marked';

export default class Markdown extends React.Component {
  getMarkdownText() {
    var value = this.props.value;
    marked.setOptions({sanitize: true});
    var rawMarkup = (value !== undefined) ? marked(this.props.value) : "";
    return { __html: rawMarkup };
  }
  render() {
    return <span dangerouslySetInnerHTML={this.getMarkdownText()} />
  }
}