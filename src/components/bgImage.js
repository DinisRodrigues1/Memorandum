import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'


const BgImage = () => (
    <StaticQuery 
    query={graphql`
    query {
        placeholderImage: file(relativePath: { eq: "undo_site.png" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
    }
    render={data => <Image fluid={data.placeholderImage.childImageSharp.fluid} className="Img"/>}
    />
)



export default BgImage
