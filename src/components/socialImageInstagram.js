import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'


const SocialImageInstagram = () => (
    <StaticQuery 
    query={graphql`
    query {
        instagram: file(relativePath: { eq: "instagram.png" }) {
          childImageSharp {
            fixed(width: 30, height: 30, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
    }
    render={data => <Image fixed={data.instagram.childImageSharp.fixed}/>}
    />
)

export default SocialImageInstagram