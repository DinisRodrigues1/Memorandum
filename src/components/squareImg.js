import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'
import styled from 'styled-components'
import { mq, gutter } from "../utils/presets"

const imageDesktop = styled(Image)`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    height: 100vh;

    ${mq.phablet} {
      display: block;
    }
    ${mq.tablet} {
      margin-right: -${gutter.tablet};
    }
    ${mq.desktop} {
      margin-right: -${gutter.desktop};
    }
`

const imageMobile = styled(Image)`
    display: none;
    
    ${mq.phablet} {
      display: none;
    }
`


const SquareImg = ({imageMobile, imageDesktop}) => (
    <StaticQuery 
    query={graphql`
    query {
        placeholderImage: file(relativePath: { eq: "0001.png" }) {
          childImageSharp {
            fixed(width: 95, height: 95, quality: 100) {
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

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  /*& > img {
    objectFit: cover !important; // or whatever
    object-position: 0% 0% !important; // or whatever
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;' // needed for IE9+ polyfill
  }*/


export default SquareImg