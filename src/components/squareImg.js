import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'



const SquareImg = () => (
    <StaticQuery 
    query={graphql`
    query {
        placeholderImage: file(relativePath: { eq: "sr-armenio.jpg" }) {
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


export default SquareImg



