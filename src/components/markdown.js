import React from "react";
import ReactMarkdown from "react-markdown";

export default class Markdown extends React.Component {
  render() {
    return <ReactMarkdown>{this.props.value}</ReactMarkdown>
  }
}