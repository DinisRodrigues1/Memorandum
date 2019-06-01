import React from "react"
import Header from "./header"
import Navigation from "./navigation"
import NavMobile from './nav_mobile'
import "./layout.css"
import styled, { css } from "styled-components"
import { IntlProvider, addLocaleData } from 'react-intl'
import Helmet from 'react-helmet'

// Locale data
import enData from 'react-intl/locale-data/en'
import ptData from 'react-intl/locale-data/pt'

// Messages
import en from '../components/i18n/en.json'
import pt from '../components/i18n/pt.json'

const messages = { en, pt }

addLocaleData([...enData, ...ptData])

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

const Padding = styled.div`
    padding: 3%;

    ${media.tablet`
      padding: 8%;
    `}
    ${media.phone`
    padding: 0;`}
`


const Layout = ({ locale, children }) => {

    return (
      <>
       <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    </Helmet>
      {locale === 'pt' ?
      <Header siteTitle={"Memorandum | Página Inicial"} />
      :
      <Header siteTitle={"Memorandum | Home"} />
    }
      <Padding></Padding>
      <Navigation locale={locale}/>
      
      <NavMobile locale={locale}/>
      <IntlProvider locale={locale} messages={messages[locale]}>
      <>{ children }</>
      </IntlProvider>
      
      </>
    )}
  
  

export default Layout