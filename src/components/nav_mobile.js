import React, { Component } from "react"
import styled, { css } from 'styled-components'
import LogoImage from './logoImage'
import { FormattedMessage } from 'react-intl'
import Provider from './provider'
import LinkWrapper from './linkWrapper'
import Helmet from 'react-helmet'

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
  
  const NavDiv = styled.nav`
  height: 5vh;
  width: 60vw;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
  overflow: hidden;


  ${media.desktop`
      width: 80%;
      
  `}

  ${media.tablet`
      width: 85%;

  `}

  ${media.phone`
      height: 8.5vh;
      position: absolute;
      top: 2%;
      z-index: 2;
      left: 12%;

  `}
`

const UnList = styled.ul`
  list-style-type: none;
  overflow: hidden; 
  margin: 0;
  padding: 0;

  ${media.phone`
    float: right;
    
  `}

`

const ListItems = styled.li`
  display: inline;  
  
  ${media.phone`
  display: block;`}

`

const LogoImageStyle = styled.button`
  display: none;

  ${media.phone`
    display: inline-block;  
    padding-top: 0.25em;
    background: none; 
    border: none;
  `}
`

const Videos = styled(LinkWrapper)`
  text-decoration: none;
  color: black;
  font-family: Verdana, sans-serif;
  z-index: 2;
  border-bottom: 2px solid #D4D0AB;
  padding: 0 1rem 2px 1rem;
  display: inline-block;
  background:
  linear-gradient(
      to bottom, #D4D0AB 0%,
      #D4D0AB 100%
    );
   background-position: 0 100%;
   background-repeat: repeat-x;
   background-size: 2px 2px;
  transition: background-size .2s;

  &:hover {
      background-size: 4px 50px;
  }

  ${media.phone`
    margin: 0;
    margin-top: 1.5em;
`}

  
`

const Historias = styled(LinkWrapper)`
  text-decoration: none;
  color: black;
  font-family: Verdana, sans-serif;
  z-index: 2;
  margin-left: 15%;
  border-bottom: 2px solid #D4D0AB;
  padding: 0 1rem 2px 1rem;
  display: inline-block;
  background:
  linear-gradient(
      to bottom, #D4D0AB 0%,
      #D4D0AB 100%
    );
   background-position: 0 100%;
   background-repeat: repeat-x;
   background-size: 2px 2px;
  transition: background-size .2s;

  &:hover {
      background-size: 4px 50px;
  }

  ${media.phone`
    margin: 0;
    margin-top: 1.5em;
`}
`

const Galeria = styled(LinkWrapper)`
  text-decoration: none;
  color: black;
  font-family: Verdana, sans-serif;
  z-index: 2;
  margin-left: 15%;
  border-bottom: 2px solid #D4D0AB;
  padding: 0 1rem 2px 1rem;
  display: inline-block;
  background:
  linear-gradient(
      to bottom, #D4D0AB 0%,
      #D4D0AB 100%
    );
   background-position: 0 100%;
   background-repeat: repeat-x;
   background-size: 2px 2px;
  transition: background-size .2s;

  &:hover {
      background-size: 4px 50px;
  }

  ${media.phone`
    margin: 0;
    margin-top: 1.5em;
    
`}
`

const MobileMenu = styled.div`
  ${media.phone`
  background-color: #FFFFFF;
  position: fixed;
  backface-visibility: hidden; 
  z-index: 2;
  padding: 1% 1% 0 1%; 
  right: 5%; 
  width: 10em;
  -moz-box-shadow:    1px 1px 7px 1px #777777;
  -webkit-box-shadow: 1px 1px 7px 1px #777777;
  box-shadow:         1px 1px 7px 1px #777777;
  border: thin solid #f1f1f1;
  padding-bottom: 3%;
  `}
 
`


class NavMobile extends Component {
constructor(props) {
  super(props);
  this.state = { showMenu: false };
}

render() {
  const { showMenu } = this.state

  const locale = this.props.locale

  return (
    <Provider locale={locale}>
    <NavDiv>
    <Helmet>
      <meta name="viewport" content="minimum-scale=1"/>
    </Helmet>
        <UnList>
        <LogoImageStyle  onClick={() => {this.setState({ showMenu : !showMenu})}}>
        <LogoImage/>
            { showMenu ? true : false }
        </LogoImageStyle>
        { showMenu && (
        <MobileMenu>   
        <ListItems><Videos to="/videos/"><FormattedMessage id="Videos"/></Videos></ListItems>
        <ListItems><Historias to="/historias/"><FormattedMessage id="Stories"/></Historias></ListItems>
        <ListItems><Galeria to="/galeria/"><FormattedMessage id="Gallery"/></Galeria></ListItems>
        </MobileMenu>
        )}
        </UnList>
    </NavDiv> 
    </Provider>
  )
}
}


export default NavMobile