import React from "react"
import { FaLinkedin } from "react-icons/fa"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = ({ linkedin }) => {
  const FooterItems = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 90px;
  `
  return (
    <FooterItems>
      <Link to="/page-2/">Go to my blog </Link>
      <span>
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </span>

      <a href={linkedin} target="_blank">
        <FaLinkedin className="social-icon" size="32" />
      </a>
    </FooterItems>
  )
}
export default Footer
