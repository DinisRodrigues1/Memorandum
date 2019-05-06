import React from 'react'
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const galImages = () => (
<StaticQuery
query={graphql`
  query {
    galImages: allFile(filter: {extension: {regex: "/(jpg)|(NEF)|(JPG/"}, relativeDirectory: {eq: "galleryImages"}}) ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth:2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`}
render={data => <Img galImages={data.galImages.edges} />}
/>
);

export default galImages
