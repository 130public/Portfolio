import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styles from './grid-projects.module.scss'
import ProjectCard from "../components/card-project";

export default () => (
    <StaticQuery
      query={graphql`
        query ProjectsQuery {
            allContentfulProject {
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
        }
    `}
      render={data => (
        <ul className={styles.grid}>
            {data.allContentfulProject.edges.map(({ node }) => {
              return (
                <li key={node.slug} className={styles.gridItem}>
                  <ProjectCard post={node} />
                </li>
              )
            })}
        </ul>
      )}
    />
  )