import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import cv from "../content/cv"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-awesome-styled-grid"

import styled from "styled-components"
import { FaLinkedin } from "react-icons/fa"

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
  const BottomLinks = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 90px 0;
    div {
      margin: 0 20px;
    }
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
        <BottomLinks>
          <Link to="/page-2/">Go to my blog </Link>
          <div>
            {cv.social.linkedin && (
              <a
                className="social-link linkedin"
                href={cv.social.linkedin}
                target="_blank"
              >
                <FaLinkedin className="social-icon" size="32" />
              </a>
            )}
          </div>
        </BottomLinks>
      </PageContent>
    </Layout>
  )
}

export default IndexPage
