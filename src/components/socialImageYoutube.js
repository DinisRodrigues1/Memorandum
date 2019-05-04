import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'

const SocialImageYoutube = () => (
    <StaticQuery 
    query={graphql`
    query {
        youtube: file(relativePath: { eq: "youtube.png" }) {
          childImageSharp {
            fixed(width: 35, height: 35, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
    }
    render={data => <Image fixed={data.youtube.childImageSharp.fixed}/>}
    />
)

export default SocialImageYoutube