import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'
import styled from 'styled-components'
import { mq, gutter } from "../utils/presets"



const BgImage = () => (
    <StaticQuery 
    query={graphql`
    query {
        placeholderImage: file(relativePath: { eq: "background_header.png" }) {
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
