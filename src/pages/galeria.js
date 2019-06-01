import React from "react"
import Navigation from "../components/navigation_extra"
import SEO from "../components/seo"
import styled, { css } from "styled-components"
import Images from '../components/galleryImages'
import NavMobile from '../components/nav_extra_mobile'
import { FormattedMessage } from 'react-intl'
import Provider from '../components/provider'



const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}


const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }

  `

  return acc
}, {})



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
    padding: 9% 0;
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

  ${media.phone`
  margin-top: 30%;
  `}
`


const TextSepSpecial = styled.hr`
   margin-top: -14%;
   margin-left: -1.8%;
   margin-right: -1.8%;
   border: medium solid #DADFE1;
   color: #DADFE1;
   background-color: #DADFE1;
`




const MarginDiv = styled.div`
    padding: 2% 0;
    `

const ImageGallery = ({ pageContext: { locale } }) => { 
    
      return(
        <Provider locale={locale}>
         {locale === 'pt' ?
            <SEO title="Galeria de Imagens" />
            :
            <SEO title="Gallery" />
            }
        <OuterContainer>
            <Navigation locale={locale} />
            <NavMobile locale={locale}/>
            <BodyDiv>
            <PageTitle><TextSepSpecial/><FormattedMessage id="Gallery"/></PageTitle>
            <>
            <Images locale={locale}/>
           </>
           <MarginDiv></MarginDiv>
            </BodyDiv>
        </OuterContainer>
        </Provider>
            );
    }




export default ImageGallery