import React from "react"
import Layout from "../components/layout"
import cv from "../content/cv"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-awesome-styled-grid"

import styled from "styled-components"

import Skills from "../components/skills"
import Timeline from "../components/timeline"

const IndexPage = () => {
  const PageContent = styled(Container)`
    max-width: 100%;
    margin-bottom: 40px;
  `
  const FullWidthRow = styled(Col)`
    min-width: 100%;
  `
  return (
    <Layout>
      <SEO title="Home" />
      <PageContent className="page-content" fluid>
        <h1> {cv.siteTitle}</h1>
        <p>{cv.siteDescription}</p>
        <p>{cv.authorDescription}</p>
        <Row>
          <FullWidthRow xs={3} sm={4}>
            <Skills title="Skills" skills={cv.skills} />
          </FullWidthRow>
        </Row>
        <Timeline />
      </PageContent>
    </Layout>
  )
}

export default IndexPage
