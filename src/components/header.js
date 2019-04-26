import { Link } from "gatsby"
import React from "react"
import LogoOverlay from "./logoOverlay"
import BgImage from "./BgImage"
import styled from 'styled-components'


const HeadDiv = styled.div`
  height: 100vh;
  width: 100vw;
`  

const LinkStyleOne = styled(Link)`
    color: black;
    text-decoration: none;
    position: absolute:
    z-index: 1;
    top: 1%;
    left: 2000px;
    font-family: Verdana, sans-serif;
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
    grid-column: 1 / 1
`

const TextStyle = styled.span`
    margin-left: 0.5%;
    color: black;
    position: absolute;
    top: 1%;
    left: 2.5%;
    z-index: 1;
    fontFamily: Verdana, sans-serif;
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
    grid-column: 1 / 1
`

const LinkStyleTwo = styled(Link)` 
    color: black;
    left: 4%;
    text-decoration: none;
    position: absolute;
    z-index: 1;
    top: 1%;
    font-family: Verdana, sans-serif;
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;

`

const Logo = styled(LogoOverlay)`
    position: relative;
    top: 0;
    left: 0;
    width: 10%;
    z-index: 1;
    height: 10vh;
    
`

const BgImg = styled(BgImage)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    height: 100vh;
    
  `
const SpanBlock = styled.span`
    position: absolute;
    top: 1%;
    left: 0.8%;
  `
const LogoBlock = styled.div`
    position: relative;
    top: -82%;
    z-index: 1;
    height: 292px;
    width: 812px;
    margin: 0 auto;
  `


const Header = () => (
    <HeadDiv>
      <BgImg/>
      <LogoBlock>
      <Logo/>
      </LogoBlock>
      <SpanBlock>
        <LinkStyleOne
          to="/" 
        >{"PT"}
          </LinkStyleOne>
      </SpanBlock>
      <TextStyle
      >|</TextStyle>
      <span>
        <LinkStyleTwo
          to="/"
        >{"EN"}
          </LinkStyleTwo>
      </span>
    </HeadDiv>
)

export default Header
