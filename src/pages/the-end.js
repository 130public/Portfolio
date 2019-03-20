import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Page from '../components/page'
import Hero from '../components/hero'
import Main from '../components/main'
import styles from './the-end.module.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas);

class Files extends React.Component {

    render() {
        const{data,location} = this.props;
    

        return (
            <Page className="fun">
                <Helmet>
                    <title>Colophon of {data.site.siteMetadata.title}</title>
                    <base target="_blank" href={location.href} />
                    {/* <meta name="description" content={data.contentfulPage.metaDescription} />
                    <meta property="og:type" content="article" /> */}
                </Helmet>
                <Hero title={data.contentfulPage.title} title={data.contentfulPage.title} body={data.contentfulPage.content.body} style="blank" />
                <Main padTop='large' height='full' style="fun" offset={true} updatedAt={data.contentfulPage.updatedAt}>
                    <div className={styles.table}>
                        <table>
                            <thead>
                            <tr>
                                <th>path/file</th>
                                <th>size</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.allFile.edges.map(({ node }, index) => (
                                <tr key={index}>
                                <td><a target="_blank" href={"https://github.com/jasonjgeiger/portfolio/tree/master/src/"+node.relativePath}>{node.relativePath} <FontAwesomeIcon icon="external-link-alt" /></a></td>
                                <td>{node.prettySize}</td>
                                {/* <td>{node.extension}</td> */}
                                {/* <pre>{JSON.stringify(node,null,2)}</pre> */}
                                </tr>
                                
                            ))}
                            </tbody>
                        </table>
                    </div>
                </Main>
            </Page>
        )
    }
}

export default Files

export const filesPageQuery = graphql`
  query filesPageQuery {
    site {
        siteMetadata {
            title
        }
    }
    contentfulPage(slug: { eq: "colophon" }) {
        title,
        slug,
        metaTitle,
        metaDescription,
        content {
            body
        },
        updatedAt(formatString: "Y-MM-D")
    }
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`