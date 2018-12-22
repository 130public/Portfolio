import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import styles from './grid.module.scss'
import ProjectCard from "../templates/project-card";

class Grid extends React.Component {
  render() {
    const {nodes} = this.props;
    return (
      <div>
          <ul className={styles.grid}>
            {/* <pre>{JSON.stringify(nodes,null,2)}</pre> */}
            {nodes.map(({ node }) => {
              return (
                <li key={node.slug} className={styles.gridItem}>
                  <ProjectCard post={node} />
                </li>
              )
            })}
          </ul>
      </div>
    )
  }
}

export default Grid