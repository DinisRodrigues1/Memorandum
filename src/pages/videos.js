import React from "react"
import { Link } from "gatsby"
import Navigation from "../components/navigation_extra"
import SEO from "../components/seo"
import styled, { css } from "styled-components"

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }

  `
console.log(acc);
  return acc
}, {})

const Content = styled.div`
  height: 3em;
  width: 3em;
  background: papayawhip;

  /* Now we have our methods on media and can use them instead of raw queries */
  ${media.desktop`background: dodgerblue;`}
  ${media.tablet`background: mediumseagreen;`}
  ${media.phone`background: palevioletred;`}
`;

const OuterContainer = styled.div`
  padding: 3% 0;
  font-family: Verdana, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  max-width: 100%;
  overflow-x: hidden;
  width: 60%;
  margin: auto;
  `

const PageTitle = styled.h2`
    margin-top: 15%;
    margin-bottom: 10%;
`

const VideoContainer = styled.div`
    height: 90vh;
    width: 100%;

`

const VideoArticle = styled.article`
    margin-top: 10%
`

const VideoText = styled.p`
    margin-top: -10%
`

const IFrame = styled.iframe`
    display: block
`

const Videos = () => (
  <OuterContainer>
    <SEO title="Vídeos" />
    <Navigation />
    <PageTitle>Vídeos</PageTitle>
    <VideoArticle>
    <VideoContainer>
    <IFrame width="100%" height="75%"
    src="https://www.youtube.com/embed/tgbNymZ7vqY"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    frameBorder="0"
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowFullScreen
    >
    </IFrame> 
    </VideoContainer>
    <VideoText>Something something this person</VideoText>
    <hr />
    </VideoArticle>

    <VideoArticle>
    <VideoContainer>
    <IFrame width="100%" height="75%"
    src="https://www.youtube.com/embed/tgbNymZ7vqY"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    frameBorder="0"
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowFullScreen
    >
    </IFrame> 
    </VideoContainer>
    <VideoText>Something something this person</VideoText>
    <hr />
    </VideoArticle>
  
    <Link to="/">Go back to the homepage</Link>
  </OuterContainer>
)

export default Videos
