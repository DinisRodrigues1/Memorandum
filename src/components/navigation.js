import { Link } from "gatsby"
import React, { Component } from "react"
import styled, { css } from 'styled-components'


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
        height: 0
        display: none;

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
      float: right;
      display: none
    `}

`

const ListItems = styled.li`
    display: inline;  
    
    ${media.phone`
    display: block;`}

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




class Navigation extends Component {

  render() {
    return (
    <NavDiv>
      <NavItems>
      <UnList>
      <ListItems><Videos to="/videos/">{"Vídeos"}</Videos></ListItems>
      <ListItems><Historias to="/historias/">{"Histórias"}</Historias></ListItems>
      <ListItems><Galeria to="/galeria/">{"Galeria"}</Galeria></ListItems>
      </UnList>
      </NavItems>
    </NavDiv>
    )
  }
}


export default Navigation