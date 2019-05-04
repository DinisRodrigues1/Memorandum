import { Link } from "gatsby"
import React from "react"
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
  
  const Content = styled.div`
    height: 3em;
    width: 3em;
    background: papayawhip;
  
    /* Now we have our methods on media and can use them instead of raw queries */
    ${media.desktop`background: dodgerblue;`}
    ${media.tablet`background: mediumseagreen;`}
    ${media.phone`background: palevioletred;`}
  `;

const NavDiv = styled.div`
    height: 5vh;
    width: 60vw;
    margin: 0 auto;
    text-align: center;
    z-index: 1;
    overflow: hidden
`


const Videos = styled(Link)`
    text-decoration: none;
    color: black;
    font-family: Verdana, sans-serif;
    z-index: 1;
    border-bottom: 2px solid black;
    padding: 0 1rem 0 1rem;
    display: inline-block;
`

const Historias = styled(Link)`
    text-decoration: none;
    color: black;
    font-family: Verdana, sans-serif;
    z-index: 1;
    margin-left: 15%;
    border-bottom: 2px solid black;
    padding: 0 1rem 0 1rem;
    display: inline-block;


`

const Projeto = styled.a`
    text-decoration: none;
    color: black;
    font-family: Verdana, sans-serif;
    z-index: 1;
    margin-left: 15%;
    border-bottom: 2px solid black;
    padding: 0 1rem 0 1rem;
    display: inline-block;

`


const Navigation = () => (
    <NavDiv innerRef={el => el.getBoundingClientRect()}>
      <Videos to="/videos/">{"Vídeos"}</Videos>
      <Historias to="/historias/">{"Histórias"}</Historias>
      <Projeto href="#about">O Projeto</Projeto>
    </NavDiv>
    
)




export default Navigation