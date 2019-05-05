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
    z-index: 1;
    text-align: center;
    margin: 0 auto;
    overflow: hidden;
    
    
    ${media.desktop`
        width: 80%;

    `}
`

const Home = styled(Link)`
    text-decoration: none;
    color: black;
    font-family: Verdana, sans-serif;
    z-index: 1;
    border-bottom: 2px solid black;
    padding: 0 1.1rem 0 1.1rem;
    display: inline-block;
`

const Videos = styled(Link)`
    text-decoration: none;
    color: black;
    font-family: Verdana, sans-serif;
    z-index: 1;
    margin-left: 15%;
    border-bottom: 2px solid black;
    padding: 0 1.1rem 0 1.1rem;
    display: inline-block;

    ${media.desktop`
        margin-left: 3.5%;
    `}
`

const Historias = styled(Link)`
    text-decoration: none;
    color: black;
    font-family: Verdana, sans-serif;
    z-index: 1;
    margin-left: 15%;
    border-bottom: 2px solid black;
    padding: 0 1.1rem 0 1.1rem;
    display: inline-block;

    ${media.desktop`
        margin-left: 3.5%;
    `}}
`

const Projeto = styled(Link)`
    text-decoration: none;
    color: black;
    font-family: Verdana, sans-serif;
    z-index: 1;
    margin-left: 15%;
    border-bottom: 2px solid black;
    padding: 0 1.2rem 0 1.2rem;
    display: inline-block;

    ${media.desktop`
        margin-left: 3.5%;
    `}
`

const Sticky = styled.div`
    position: fixed;
    top: 0;
    width: 100%;

`


const Navigation = () => (
    <NavDiv innerRef={el => el.getBoundingClientRect()}>
      <Home to ="/">{"Home"}</Home>
      <Videos to="/videos/">{"Vídeos"}</Videos>
      <Historias to="/historias/">{"Histórias"}</Historias>
      <Projeto to="/#about">{"O Projeto"}</Projeto>
    </NavDiv>
    
)

window.onscroll = () => {
    scrollAnim()
}

let navbar = NavDiv;


let scrollAnim = () => {
    if (window.pageYOffset >= navbar) {
        console.log("here")
        navbar = Sticky
    } else {
        navbar = NavDiv
    }
}


export default Navigation