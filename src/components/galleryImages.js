import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const GalImages = () => (
<StaticQuery
query={graphql`
  query {
    carImages: allFile(filter: {sourceInstanceName: {eq: "galImages"}}) {
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
render={data => (
  <div>
  {data.carImages.edges.map(({ node }, i) => (
  <Img key={i} fluid={node.childImageSharp.fluid} />
))}
</div>
)}
/>
);

export default GalImages
