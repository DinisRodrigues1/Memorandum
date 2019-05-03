import React from "react"
import { Link } from "gatsby"
import Navigation from "../components/navigation_extra"
import BgImage from "../components/bgImage"
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

const ImagesContainer = styled.section`
    line-height: 0;
    -webkit-column-count: 9;
    -webkit-column-gap: 0px;
    -moz-column-count: 9;
    -moz-column-gap: 0px;
    column-count: 9;
    column-gap: 0;  
`
const ImgContainer = styled.div`
    width: 100% !important;
    height: 100% !important;
    margin-bottom: 0;
`



const ImageGallery = () => (
    <OuterContainer>
        <Navigation />
        <PageTitle><hr/>Galeria</PageTitle>
        <ImagesContainer>
        <ImgContainer><BgImage/></ImgContainer><ImgContainer><BgImage/></ImgContainer><ImgContainer><BgImage/></ImgContainer><ImgContainer><BgImage/></ImgContainer>
        <ImgContainer><BgImage/></ImgContainer><ImgContainer><BgImage/></ImgContainer><ImgContainer><BgImage/></ImgContainer><ImgContainer><BgImage/></ImgContainer>
        <ImgContainer><BgImage/></ImgContainer><ImgContainer><BgImage/></ImgContainer>
        </ImagesContainer>
        <SEO title="Galeria de Imagens" />
    </OuterContainer>
  
)

export default ImageGallery