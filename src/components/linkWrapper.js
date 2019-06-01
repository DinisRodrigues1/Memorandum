import React from 'react'
import { Link } from 'gatsby' // eslint-disable-next-line
import { injectIntl, intlShape } from 'react-intl'

import locales from '../constants/locales'

const LinkWrapper = ({ to, intl: { locale }, ...props }) => {
  const path = locales[locale].default ? to : `/${locale}${to}`

  return <Link {...props} to={path} />
}

export default injectIntl(LinkWrapper)