import React from "react"
import styled, { css } from "styled-components"
import { FormattedMessage } from "react-intl"
import Provider from "./provider"
import LinkWrapper from "./linkWrapper"

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

const NavDiv = styled.nav`
    height: 5vh;
    margin: 0 auto;
    text-align: center;
    z-index: 1;
    overflow: hidden;
    margin-top: 2%;

    ${media.desktop`
        
        
    `}

    ${media.tablet`
        
    `}

    ${media.phone`
        height: 0
        display: none;

    `}
`

const NavItems = styled.div``
const UnList = styled.ul`
  list-style-type: none;
  overflow: hidden;
  margin: 0;
  padding: 0;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 6.5em;
  justify-items: center;
 
  ${media.desktop`
    grid-column-gap: 5.5em
    `}

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

const Videos = styled(LinkWrapper)`
  text-decoration: none;
  color: black;
  font-family: Verdana, sans-serif;
  z-index: 1;
  border-bottom: 2px solid #d4d0ab;
  padding: 0 1rem 2px 1rem;
  display: inline-block;
  background: linear-gradient(to bottom, #d4d0ab 0%, #d4d0ab 100%);
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 2px 2px;
  transition: background-size 0.2s;

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
  z-index: 1;
  border-bottom: 2px solid #d4d0ab;
  padding: 0 1rem 2px 1rem;
  display: inline-block;
  background: linear-gradient(to bottom, #d4d0ab 0%, #d4d0ab 100%);
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 2px 2px;
  transition: background-size 0.2s;

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
  z-index: 1;
  border-bottom: 2px solid #d4d0ab;
  padding: 0 1rem 2px 1rem;
  display: inline-block;
  background: linear-gradient(to bottom, #d4d0ab 0%, #d4d0ab 100%);
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 2px 2px;
  transition: background-size 0.2s;

  &:hover {
    background-size: 4px 50px;
  }

  ${media.phone`
      margin: 0;
      margin-top: 1.5em;
      
  `}
`

const Navigation = props => {
  const locale = props.locale

  return (
    <Provider locale={locale}>
      <NavDiv>
        <NavItems>
          <UnList>
            <ListItems>
              <Videos to="/videos/">
                <FormattedMessage id="Videos" />
              </Videos>
            </ListItems>
            <ListItems>
              <Historias to="/historias">
                <FormattedMessage id="Stories" />
              </Historias>
            </ListItems>
            <ListItems>
              <Galeria to="/galeria/">
                <FormattedMessage id="Gallery" />
              </Galeria>
            </ListItems>
          </UnList>
        </NavItems>
      </NavDiv>
    </Provider>
  )
}

export default Navigation
