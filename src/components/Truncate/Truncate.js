import * as React from "react"
const Truncate = (props) => {
  const {children, type, length, end="..."} = props;
  const truncatedString = children.slice(0,length);

    if (str_word_count(children 0) > length) {
        const words = str_word_count(children, 2);
        const pos   = array_keys($words);
        const text  = substr(text, 0, pos[length]) . '...';
    }
    return $text;
}



  return truncatedString;
}
export default Truncate;