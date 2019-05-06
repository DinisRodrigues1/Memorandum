import React from "react"
import Navigation from "../components/navigation_extra"
import SEO from "../components/seo"
import styled, { css } from "styled-components"
import GalImages from '../components/galleryImages'


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
  width: 80%;
  margin: auto;

  ${media.desktop`
    width: 82%;
  `}

  ${media.tablet`
    width: 85%;
  `}

  ${media.phone`
    width: 95%;
  `}
`


const PageTitle = styled.h2`
    margin-top: 15%;
    margin-bottom: 10%;
`
const BodyDiv = styled.div`
  margin-top: 10%;
  padding: 1% 1% 0 1%;
  margin-bottom: 6%;
  -moz-box-shadow:    0 0 7px 1px #D4D0AB;
  -webkit-box-shadow: 0 0 7px 1px #D4D0AB;
  box-shadow:         0 0 7px 1px #D4D0AB;
  border: thin solid #f1f1f1;
`


const TextSepSpecial = styled.hr`
   margin-top: -14%;
   margin-left: -1.8%;
   margin-right: -1.8%;
   border: medium solid #DADFE1;
   color: #DADFE1;
   background-color: #DADFE1;
`


const ImagesContainer = styled.section`
    line-height: 0;
    -webkit-column-count: 6;
    -webkit-column-gap: 0;
    -moz-column-count: 6;
    -moz-column-gap: 0;
    column-count: 6;
    column-gap: 0;  

    ${media.desktop`
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    `}

    ${media.tablet`
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    `}

    ${media.phone`
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
    `}
`
const ImgContainer = styled.div`
    margin: 0 auto;
    width: 10em !important;
    height: 5em !important;
    margin-bottom: 1.2em;
`
const MarginDiv = styled.div`
    padding: 2% 0;
    `


const ImageGallery = () => {    
   
    return (
    <OuterContainer>
        <Navigation />
        <BodyDiv>
        <PageTitle><TextSepSpecial/>Galeria</PageTitle>
        <ImagesContainer>
        <GalImages />
       </ImagesContainer>
       <MarginDiv></MarginDiv>
        </BodyDiv>
        <SEO title="Galeria de Imagens" />
    </OuterContainer>
  
        );
       }


export default ImageGallery

