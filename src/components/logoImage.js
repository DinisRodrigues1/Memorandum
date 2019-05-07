import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'

const LogoImage = () => (
    <StaticQuery 
    query={graphql`
    query {
        placeholderImage: file(relativePath: { eq: "menu-alt-512.png" }) {
          childImageSharp {
            fixed(width: 30, height: 32, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
    }
    render={data => <Image fixed={data.placeholderImage.childImageSharp.fixed} className="Img"/>}
    />
  )

export default LogoImage