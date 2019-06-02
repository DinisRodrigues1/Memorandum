import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "./lightBox"

const Images = props => {
  const locale = props.locale

  return (
    <StaticQuery
      query={graphql`
        query {
          galImages: allFile(
            filter: { sourceInstanceName: { eq: "galImages" } }
          ) {
            edges {
              node {
                childImageSharp {
                  fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Lightbox locale={locale} galImages={data.galImages.edges} />
      )}
    />
  )
}

export default Images
