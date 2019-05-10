
import React from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'

// Locale data
import enData from 'react-intl/locale-data/en'
import ptData from 'react-intl/locale-data/pt'

// Messages
import en from '../components/i18n/en.json'
import pt from '../components/i18n/pt.json'

const messages = { en, pt }

addLocaleData([...enData, ...ptData])

const Provider = ({ locale, children }) => (
  <IntlProvider locale={locale} messages={messages[locale]}>
    {children}
  </IntlProvider>
)
console.log(Provider)
export default Provider