import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'


const MailImage = () => (
    <StaticQuery 
    query={graphql`
    query {
        placeholderImage: file(relativePath: { eq: "email_memo.png" }) {
          childImageSharp {
            fixed(width: 23 height: 16, quality: 100) {
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



export default MailImage