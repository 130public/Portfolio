import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Container from '../templates/container'
import Main from '../templates/main'
import styles from './the-end.module.scss'

class Files extends React.Component {

    componentDidUpdate(prevProps) {
        console.log(prevProps);

    }

    render() {
        const{data,location} = this.props;
    

        return (
            <Container>
                <Main padTop='large' height='full' style="fun" offset={true} updatedAt={data.contentfulPage.updatedAt}>
                    <Helmet>
                        <title>Colophon of {data.site.siteMetadata.title}</title>
                        <base target="_blank" href={location.href} />
                        {/* <meta name="description" content={data.contentfulPage.metaDescription} />
                        <meta property="og:type" content="article" /> */}
                    </Helmet>
                    <h1>Colophon</h1>
                    <p>Below you will find the files used to create this portfolio, they are all sources from a GitHub repo and all files are mapped to their respective <a href="">GitHub</a> URL. This site is statically generator and levearges <a href="">Gatsby</a>, <a href="">Contentful</a>, and <a href="">Netlify</a>.</p>
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
                                <td><a target="_blank" href={"https://github.com/jasonjgeiger/portfolio/tree/master/src/"+node.relativePath}>{node.relativePath}</a></td>
                                <td>{node.prettySize}</td>
                                {/* <td>{node.extension}</td> */}
                                {/* <pre>{JSON.stringify(node,null,2)}</pre> */}
                                </tr>
                                
                            ))}
                            </tbody>
                        </table>
                    </div>
                </Main>
            </Container>
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