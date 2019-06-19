import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
import styled, { css } from "styled-components"
import { FormattedMessage } from "react-intl"
import Provider from "./provider"

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

// eslint-disable-next-line
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

const ImagesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
  z-index: 4;
  grid-gap: 0;
  align-items: stretch
  
`
const Imgg = styled(Img)`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  cursor: pointer;
  
`

const PreviewButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  object-fit: fill;
  height: 100%;
`

const DialogStyle = styled(Dialog)`
  font-family: Verdana, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  max-width: 100%;
  overflow-x: hidden;
  margin: auto;
  -moz-box-shadow: 0 0 7px 1px #000000;
  -webkit-box-shadow: 0 0 7px 1px #000000;
  box-shadow: 0 0 7px 1px #000000;
  border: thin solid #f1f1f1;
`

const DialogButton = styled.button`
  text-decoration: none;
  border: none;
  color: black;
  font-family: Verdana, sans-serif;
  z-index: 2;
  border-bottom: 2px solid #d4d0ab;
  padding: 0 1.1rem 0 1.1rem;
  margin: 0.5em 0 0 0;
  display: inline-block;
  background: linear-gradient(to bottom, #d4d0ab 0%, #d4d0ab 100%);
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 2px 2px;
  transition: background-size 0.2s;
  cursor: pointer;

  &:hover {
    background-size: 4px 50px;
  }
`

export default class Lightbox extends Component {
  static propTypes = {
    galImages: PropTypes.array.isRequired, // eslint-disable-line
  }
  constructor(props) {
    super(props)

    this.state = {
      showLightbox: false,
      selectedImage: null,
    }
  }

  render() {
    const locale = this.props.locale
    const { galImages } = this.props
    const { selectedImage, showLightbox } = this.state
    

    return (
      <Provider locale={locale}>
        <>
          <ImagesContainer>
            {galImages.map(image => (
              <PreviewButton
                key={image.node.childImageSharp.fluid.src}
                type="button"
                onClick={() =>
                  this.setState({ showLightbox: true, selectedImage: image })
                }
              >
                <Imgg fluid={image.node.childImageSharp.fluid} />
              </PreviewButton>
            ))}
          </ImagesContainer>
          {showLightbox && (
            <DialogStyle>
              <Img fluid={selectedImage.node.childImageSharp.fluid} />
              <DialogButton
                type="button"
                onClick={() => this.setState({ showLightbox: false })}
              >
                <FormattedMessage id="Close" />
              </DialogButton>
            </DialogStyle>
          )}
        </>
      </Provider>
    )
  }
}
