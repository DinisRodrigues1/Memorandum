import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const SocialImageFacebook = () => (
  <StaticQuery
    query={graphql`
      query {
        facebook: file(relativePath: { eq: "facebook.png" }) {
          childImageSharp {
            fixed(width: 30, height: 30, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Image fixed={data.facebook.childImageSharp.fixed} />}
  />
)

export default SocialImageFacebook
