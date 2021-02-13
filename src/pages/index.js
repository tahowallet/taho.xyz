import React from "react"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query TitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return <Layout>
    <SEO title={data.site.siteMetadata?.title || `Title`} />
    <div
      style={{
        maxWidth: `800px`,
        marginTop: `5rem`,
        marginBottom: `1.45rem`,
        marginLeft: `auto`,
        marginRight: `auto`
      }}>
      <Image />
    </div>
  </Layout>
}

export default IndexPage
