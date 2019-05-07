import { Link } from "gatsby"
import React, { Component } from "react"
import styled, { css } from 'styled-components'
import LogoImage from './logoImage'
//PUT IMAGE ON RIGHT OF LANGUAGE SETTINGS USING FLOAT OR POS ABSOLUTE
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

    `}
`

const NavItems = styled.div`


`
const UnList = styled.ul`
    list-style-type: none;
    overflow: hidden; 
    margin: 0;
    padding: 0;

    ${media.phone`
      float: left;
      
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

const Videos = styled(Link)`
    text-decoration: none;
    color: black;
    font-family: Verdana, sans-serif;
    z-index: 1;
    border-bottom: 2px solid #DADFE1;
    padding: 0 1rem 2px 1rem;
    display: inline-block;
    background:
    linear-gradient(
        to bottom, #DADFE1 0%,
        #DADFE1 100%
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

const Historias = styled(Link)`
    text-decoration: none;
    color: black;
    font-family: Verdana, sans-serif;
    z-index: 1;
    margin-left: 15%;
    border-bottom: 2px solid #DADFE1;
    padding: 0 1rem 2px 1rem;
    display: inline-block;
    background:
    linear-gradient(
        to bottom, #DADFE1 0%,
        #DADFE1 100%
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

const Galeria = styled(Link)`
    text-decoration: none;
    color: black;
    font-family: Verdana, sans-serif;
    z-index: 1;
    margin-left: 15%;
    border-bottom: 2px solid #DADFE1;
    padding: 0 1rem 2px 1rem;
    display: inline-block;
    background:
    linear-gradient(
        to bottom, #DADFE1 0%,
        #DADFE1 100%
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
    background-color: #FFFFFF;
    position: absolute;
    z-index: 2;
    padding: 1% 1% 0 1%;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    width: 10em;
    -moz-box-shadow:    1px 1px 7px 1px #D4D0AB;
    -webkit-box-shadow: 1px 1px 7px 1px #D4D0AB;
    box-shadow:         1px 1px 7px 1px #D4D0AB;
    border: thin solid #f1f1f1;
    padding-bottom: 3%;

   
`


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
  }
 
  render() {
    const { showMenu } = this.state
    return (
    <NavDiv>
      <NavItems>
      <UnList>
      <LogoImageStyle  onClick={() => this.setState({ showMenu: !showMenu})}>
      <LogoImage/>
      { showMenu ? true : false }
      </LogoImageStyle>
      { showMenu && (
        <MobileMenu>
      <ListItems><Videos to="/videos/">{"Vídeos"}</Videos></ListItems>
      <ListItems><Historias to="/historias/">{"Histórias"}</Historias></ListItems>
      <ListItems><Galeria to="/galeria/">{"Galeria"}</Galeria></ListItems>
        </MobileMenu>
      )}
      </UnList>
      </NavItems>
    </NavDiv>
    )
  }
}


export default Navigation