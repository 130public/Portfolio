import React from "react"
import { Helmet } from "react-helmet"

const SEOComponent = ({ title, description, image, pathname, article }) => {
      return (
        <>
          <Helmet title={title}>
            <meta name="google-site-verification" content="3w81YSDAbWrCX2FExYAcet7PhY3dgkFiVtjE4bjOXfg" />
            <meta name="description" content={description} />
            {title && <meta property="og:title" content={title} />}
            {description && (
              <meta property="og:description" content={description} />
            )}
            {title && <meta name="twitter:title" content={title} />}
            {description && (
              <meta name="twitter:description" content={description} />
            )}
          </Helmet>
        </>
      )
}

export default SEOComponent

// propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
// }

// defaultProps = {
//   title: null,
//   description: null,
// }

// const query = graphql`
//   query SEO {
//     site {
//       siteMetadata {
//         title
//         description
//         author
//       }
//     }
//   }
// `