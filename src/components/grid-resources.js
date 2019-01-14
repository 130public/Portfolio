import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styles from './grid-resources.module.scss'
import ResourceCard from "../components/card-resource";

export default () => (
    <StaticQuery
      query={graphql`
        query ResourcesQuery {
          allContentfulResource {
            edges {
              node {
                title
                description
                source
                thumbnail{
                  file{
                    url
                    fileName
                  }
                  title
                  description
                  
                }
                updatedAt
              }
            }
          }
        }
    `}
      render={data => (
        
        <ul className={styles.grid}>
            {data.allContentfulResource.edges.map(({ node }) => {
              return (
                <li key={node.slug} className={styles.gridItem}>
                  <ResourceCard post={node} />
                </li>
              )
            })}
        </ul>
      )}
    />
  )