import React from "react"
import SEO from "../components/seo"
import { FormattedMessage } from 'react-intl'
import styled, { css } from 'styled-components'
import Provider from '../components/provider'
import LinkWrapper from '../components/linkWrapper'

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

const Outer404Container = styled.div`
  margin: 5% auto;
  padding: 2% 1% 0 2%;
  -moz-box-shadow:    0 0 7px 1px #D4D0AB;
  -webkit-box-shadow: 0 0 7px 1px #D4D0AB;
  box-shadow:         0 0 7px 1px #D4D0AB;
  border: thin solid #f1f1f1;
  width: 80%;
  font-family: Verdana, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  max-width: 100%;
  overflow-x: hidden;
  
  
  ${media.desktop`
    width: 82%;
    padding: 5% 0;
    `}

  ${media.tablet`
    width: 85%;
    padding: 7% 0;
    `}

  ${media.phone`
    width: 95%;
    padding: 9% 0;
    margin-top: 30%;
    `}

`

const TextContainer = styled.div`
  margin: 25vh 0;  
`

const GoBack = styled(LinkWrapper)`
  text-decoration: none;
  color: black;
`

let goBack = () => {
  window.history.back()
}

const NotFoundPage = ({ pageContext: { locale }}) => (
  <Provider locale={locale}>
  <Outer404Container>
    {locale === 'pt' ?
    <SEO title="404: Página não encontrada" />
    :
    <SEO title="404: Page not found"/>
    }
    <TextContainer>
    <h2><FormattedMessage id="PageNotFound"/></h2>
    <GoBack onClick={goBack}><FormattedMessage id="404Help"/></GoBack>
    </TextContainer>
  </Outer404Container>
  </Provider>
)



export default NotFoundPage
