import React, { Component } from "react"
import styled, { css } from 'styled-components'
import LogoImage from './logoImage'
import { FormattedMessage } from 'react-intl'
import Provider from './provider'
import LinkWrapper from './linkWrapper'

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
  
const NavDiv = styled.div`
    height: 8vh;
    width: 60vw;
    z-index: 2;
    text-align: center;
    margin: 0 auto;
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
        z-index: 3;
        left: 12%;
        margin-bottom: 20em;
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

const Home = styled(LinkWrapper)`
    text-decoration: none;
    color: black;
    font-family: Verdana, sans-serif;
    z-index: 2;
    border-bottom: 2px solid #D4D0AB;
    padding: 0 1.1rem 2px 1.1rem;
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

const Videos = styled(LinkWrapper)`
    text-decoration: none;
    color: black;
    font-family: Verdana, sans-serif;
    z-index: 2;
    margin-left: 15%;
    border-bottom: 2px solid #D4D0AB;
    padding: 0 1.1rem 2px 1.1rem;
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

    ${media.desktop`
        margin-left: 3.5%;
    `}

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
    padding: 0 1.1rem 2px 1.1rem;
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

    ${media.desktop`
        margin-left: 3.5%;
    `}

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
    padding: 0 1.2rem 2px 1.2rem;
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

    ${media.desktop`
        margin-left: 3.5%;
    `}

    ${media.phone`
        margin: 0;
        margin-top: 1.5em;
    `}
`
const MobileMenu = styled.div`
    ${media.phone`
    background-color: #FFFFFF;
    position: fixed;
    z-index: 2;
    padding: 1% 1% 0 1%;
    right: 5%; 
    width: 10em; 
    -moz-box-shadow:    1px 1px 7px 1px #D4D0AB;
    -webkit-box-shadow: 1px 1px 7px 1px #D4D0AB;
    box-shadow:         1px 1px 7px 1px #D4D0AB;
    border: thin solid #f1f1f1;
    padding-bottom: 5%;
    `}
`


class NavMobile extends Component {
    constructor(props) {
        super(props);
        this.state = { showMenu: false};
      }
    
    render() {
     const { showMenu } = this.state
   
     const locale = this.props.locale

     return (
    <Provider locale={locale}>
    <NavDiv>
        <UnList>
        <LogoImageStyle  onClick={() => {this.setState({ showMenu: !showMenu})}}>
        <LogoImage/>
            { showMenu ? true : false }
        </LogoImageStyle>
        { showMenu && (
        <MobileMenu>   
        <ListItems><Home to ="/"><FormattedMessage id="Home"/></Home></ListItems>
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