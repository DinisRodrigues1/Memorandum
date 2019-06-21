import React, { Component } from "react"
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

const NavDiv = styled.div`
  height: 8vh;
  width: 100vw;
  z-index: 2;
  text-align: center;
  margin: 0 auto;
  overflow: hidden;
  display: none;

  ${media.desktop`
      width: 100%;
      display: block;
      
  `}

  ${media.tablet`
      width: 100%;
      display: block;
  `}

  ${media.phone`
      display: block;
      height: 15vh;
      width: 95vw
      margin: 0 auto;
      top: 2%;
      position: fixed;
      z-index: 2;
      left: 0;
      right: 0;

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
    margin: 0.3em;
    display: block;
    width: 40px;  
    background: none; 
    border: none;
    cursor: pointer;

    &:after, &:before, & > div {
      background-color: black;
      border-color: #fff;
      border-radius: 2px;
      content: '';
      display: block;
      height: 4px;
      margin: 4px 0;
      transition all .2s ease-in-out;

    }

    &:before {
      transform ${props =>
        props.showMenu
          ? "translateY(8px) rotate(135deg)"
          : "translateY(0) rotate(0)"};
    }

    &:after {
      transform: ${props =>
        props.showMenu
          ? "translateY(-8px) rotate(-135deg)"
          : "translateY(0) rotate(0)"};
    }

    & > div {
      transform: ${props => (props.showMenu ? "scale(0)" : "")};
    }
  `}
`

const Videos = styled(LinkWrapper)`
  text-decoration: none;
  color: black;
  font-family: Verdana, sans-serif;
  z-index: 2;
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
  z-index: 2;
  margin-left: 15%;
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
  z-index: 2;
  margin-left: 15%;
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

const MobileMenu = styled.div`
  ${media.phone`
  background-color: #FFFFFF;
  position: fixed;
  z-index: 2;
  padding: 1% 1% 0 1%; 
  right: 0; 
  width: 100vw;
  -moz-box-shadow:    1px 1px 7px 1px #777777;
  -webkit-box-shadow: 1px 1px 7px 1px #777777;
  box-shadow:         1px 1px 7px 1px #777777;
  border: thin solid #f1f1f1;
  padding-bottom: 5%;
  `}
`

class NavMobile extends Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false }
  }

  render() {
    const { showMenu } = this.state
    const locale = this.props.locale

    return (
      <Provider locale={locale}>
        <NavDiv>
          <UnList>
            <LogoImageStyle 
              aria-label="Hamburger Menu"
              showMenu={this.state.showMenu}
              onClick={() => {
                this.setState({ showMenu: !showMenu })
              }}
            >
              <div />
              {showMenu ? true : false}
            </LogoImageStyle>
            {showMenu && (
              <MobileMenu>
                <ListItems>
                  <Videos to="/videos/">
                    <FormattedMessage id="Videos" />
                  </Videos>
                </ListItems>
                <ListItems>
                  <Historias to="/historias/">
                    <FormattedMessage id="Stories" />
                  </Historias>
                </ListItems>
                <ListItems>
                  <Galeria to="/galeria/">
                    <FormattedMessage id="Gallery" />
                  </Galeria>
                </ListItems>
              </MobileMenu>
            )}
          </UnList>
        </NavDiv>
      </Provider>
    )
  }
}

export default NavMobile
