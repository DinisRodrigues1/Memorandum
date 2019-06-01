import React from 'react';
import { graphql } from 'gatsby'
import Navigation from "./navigation_extra"
import SEO from './seo'
import styled, { css } from "styled-components"
import NavMobile from './nav_extra_mobile'
import { FormattedMessage } from 'react-intl'
import Provider from './provider'

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
  

const OuterContainer = styled.div`
    padding: 3% 0;
    font-family: Verdana, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    max-width: 100%;
    overflow-x: hidden;
    width: 80%;
    margin: auto;
    
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
    padding: 9% 0;`}
`

const OuterPostContainer = styled.div`
    margin-top: 10%;
    padding: 1% 1% 0 1%; 
    -moz-box-shadow:    0 0 7px 1px #D4D0AB;
    -webkit-box-shadow: 0 0 7px 1px #D4D0AB;
    box-shadow:         0 0 7px 1px #D4D0AB;
    border: thin solid #f1f1f1;
    
    ${media.phone`
    margin-top: 30%;`}
`
const TextSepSpecial = styled.hr`
   margin-top: -14%;
   margin-left: -1.8%;
   margin-right: -1.8%;
   border: medium solid #DADFE1;
   color: #DADFE1;
   background-color: #DADFE1;
`

const PageTitle = styled.h2`
    margin-top: 15%;
    margin-bottom: 10%;
`

function Story(props) {

    const post = props.data.markdownRemark;
    const { title } = post.frontmatter;
    const locale = props.pageContext.locale;

    return (
      <Provider locale={locale}>
        <OuterContainer>
          { locale === 'pt' ? <SEO title="História" /> : <SEO title="Story" />}
            
            <Navigation locale={locale}/>
            <NavMobile />
            <OuterPostContainer>
            <PageTitle><TextSepSpecial/><FormattedMessage id="Stories"/></PageTitle>
                <div>
                    <h2>{title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            </OuterPostContainer>
        </OuterContainer>
      </Provider>
    )
}

export default Story

export const query = graphql`
 query PostQuery($slug: String!) {
     markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       frontmatter {
        title
        description
       }
   }
}`
