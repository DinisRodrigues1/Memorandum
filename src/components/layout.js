/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import Navigation from "./navigation"
import styled from "styled-components"
import "./layout.css"

const Padding = styled.div`
    padding: 14%
`

const SectionLatest = styled.section`
    padding-bottom: 5%
    
`
const BodyDiv = styled.div`
    width: 60%;
    margin: auto;
    padding-top: 10%
`


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Padding></Padding>
        <Navigation />
        <BodyDiv>
          <SectionLatest><h2>Última publicação</h2>
          <iframe src="https://www.youtube.com/watch?v=5MqGHw5wjJI" width="600" height="400"></iframe>
            </SectionLatest>
          <main>{children}
          </main>
        
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </BodyDiv>
      </div>
    )}
  />
  
)



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
