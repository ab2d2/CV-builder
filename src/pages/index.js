import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StaticQuery
      query={graphql`
        query getCV {
          site {
            siteMetadata {
              description
            }
          }
        }
      `}
      render={data => (
        <div>
          <h1> Hi people</h1>
          <p>Welcome to my new site.</p>
          <p>{data.site.siteMetadata.description}</p>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
          <Link to="/page-2/">Go to page 2</Link>
        </div>
      )}
    />
  </Layout>
)

export default IndexPage
