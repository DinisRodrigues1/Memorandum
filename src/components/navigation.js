import { Link } from "gatsby"
import React from "react"

import styled from 'styled-components'


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

const Projeto = styled(Link)`
    text-decoration: none;
    color: black;
    font-family: Verdana, sans-serif;
    z-index: 1;
    margin-left: 15%;
    border-bottom: 2px solid black;
    padding: 0 1rem 0 1rem;
    display: inline-block;
`

const Sticky = styled.div`
    position: fixed;
    top: 0;
    width: 100%;

`

const Navigation = () => (
    <NavDiv innerRef={el => el.getBoundingClientRect()}>
      <Videos to="/videos/">{"Videos"}</Videos>
      <Historias to="/historias/">{"Histórias"}</Historias>
      <Projeto to="/o-projeto/">{"O Projeto"}</Projeto>
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