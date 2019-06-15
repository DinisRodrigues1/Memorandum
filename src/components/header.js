import { Link } from "gatsby"
import React from "react"
import LogoOverlay from "./logoOverlay"
import BgImage from "./bgImage"
import styled, { css } from "styled-components"
import Helmet from "react-helmet"

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

  return acc
}, {})

const HeadDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 0.3fr);  
    

`
const SpanBlock = styled.span`
    position: absolute;
    top: 1%;
    left: 0.8%;
    z-index: 3;

    ${media.desktop`
      top: 0.6%;
      left: 0.8%;
    `}

    ${media.tablet`
      top: 1.5%;
    `}
    ${media.phone`
      top: 2.5%;
    `}
  `

const LinkStyleOne = styled(Link)`
    color: black;
    text-decoration: none;
    position: absolute:
    z-index: 3;
    top: 1%;
    left: 2000px;
    font-family: Verdana, sans-serif;
    

    ${media.desktop`
      top: 1%;
      margin-left: 1vw;
    `}

    ${media.tablet`
      top: 1.5%
      margin-left: 1.5vw
    `}

    ${media.phone`
      top: 3%;
      margin-left; 2vw;
    `}
`

const TextStyle = styled.span`
    margin-left: 0.5%;
    color: black;
    position: absolute;
    top: 1%;
    left: 2.5%;
    z-index: 3;
    fontFamily: Verdana, sans-serif;
    grid-column-start: 1;
    grid-column-end: 4;

    ${media.desktop`
      top: 0.6%;
      left: 5.5%;
    `}

    ${media.tablet`
      top: 1.5%;
      left: 6%;
    `}
  ${media.phone`
      top: 2.5%;
      left: 8%;
  `}
`

const LinkStyleTwo = styled(Link)` 
    color: black;
    left: 4%;
    text-decoration: none;
    position: absolute;
    z-index: 3;
    top: 1%;
    font-family: Verdana, sans-serif;
  

    ${media.desktop`
      top: 0.6%;
      left: 8.5%;
    `}

    ${media.tablet`
      top: 1.5%;
      left: 9%;
    `}

    ${media.phone`
      top: 2.5%;
      left: 11%;
    `}

`

const Logo = styled(LogoOverlay)``

const BgContainer = styled.div`
    grid-column: 1;
    grid-row: 1 / span 5;
    width: 100%;
    height: 100%;
   
  }
`

const BgImg = styled(BgImage)`

    `

const LogoBlock = styled.div`
grid-column: 1;
grid-row: 3;
width: 50%;
height: auto;
align-self: center;
justify-self: center;
z-index: 2;
    
    


  `

const Header = () => (
  <HeadDiv>
    <Helmet>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no"
      />
    </Helmet>
    <BgContainer>
    <BgImg className="bg"/>
    </BgContainer>
    <LogoBlock>
    <Logo classname="logo"/>
    </LogoBlock>
    <SpanBlock>
      <LinkStyleOne to="/">{"PT"}</LinkStyleOne>
    </SpanBlock>
    <TextStyle>|</TextStyle>
    <span>
      <LinkStyleTwo to="/en/">{"EN"}</LinkStyleTwo>
    </span>
  </HeadDiv>
)

export default Header
