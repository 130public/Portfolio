import * as React from "react"
import Layout from "../components/Layout/Layout"
// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const paragraphStyles = {
  marginBottom: 48,
}
const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <title>Home Page</title>
        <h1 style={headingStyles}>
          Congratulations
        </h1>
        <p style={paragraphStyles}>
          Edit to see this page update in real-time.{" "}
        </p>
      </main>
    </Layout>
  )
}

export default IndexPage