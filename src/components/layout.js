import React from "react"
import Header from "./header"
import Navigation from "./navigation"
import NavMobile from "./nav_mobile"
import "./layout.css"
import { IntlProvider, addLocaleData } from "react-intl"
import Helmet from "react-helmet"

// Locale data
import enData from "react-intl/locale-data/en"
import ptData from "react-intl/locale-data/pt"

// Messages
import en from "../components/i18n/en.json"
import pt from "../components/i18n/pt.json"

const messages = { en, pt }

addLocaleData([...enData, ...ptData])





const Layout = ({ locale, children }) => {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
      </Helmet>

      <Header/>
      <NavMobile locale={locale} />
      
      <Navigation locale={locale} />
      

      
      <IntlProvider locale={locale} messages={messages[locale]}>
        <>{children}</>
      </IntlProvider>
    </>
  )
}

export default Layout
