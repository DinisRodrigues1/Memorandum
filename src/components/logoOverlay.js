import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'



const LogoOverlay = () => (
    <StaticQuery 
    query={graphql`
    query {
        placeholderImage: file(relativePath: { eq: "Logo_for_website.png" }) {
          childImageSharp {
            fluid(maxWidth: 1006, maxHeight: 410, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
    }
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} className="logo" />}
    />
)


export default LogoOverlay