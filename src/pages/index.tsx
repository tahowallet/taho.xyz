import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Workspace from "../components/workspace/workspace"

import 'normalize.css'
import '../components/layout.css'
import '../components/layout-theme.scss';

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
    <Workspace></Workspace>
  </Layout>
}

export default IndexPage
