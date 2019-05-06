import React from 'react';
import { Link, graphql } from 'gatsby'
import Navigation from "./navigation_extra"
import SEO from './seo'
import styled, { css } from "styled-components"

const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 576,
  }
  
  // Iterate through the sizes and create a media template
  const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
  
    `
  console.log(acc);
    return acc
  }, {})
  
  const Content = styled.div`
    height: 3em;
    width: 3em;
    background: papayawhip;
  
    /* Now we have our methods on media and can use them instead of raw queries */
    ${media.desktop`background: dodgerblue;`}
    ${media.tablet`background: mediumseagreen;`}
    ${media.phone`background: palevioletred;`}
  `;

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
`
const PageTitle = styled.h2`
    margin-top: 15%;
    margin-bottom: 10%;
`

function Story(props) {

    const post = props.data.markdownRemark;
    const { title } = post.frontmatter;

    return (
        <OuterContainer>
            <SEO title="Galeria de Imagens" />
            <Navigation />
            <OuterPostContainer>
            <PageTitle><hr/>Histórias</PageTitle>
                <div>
                    <h2>{title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            </OuterPostContainer>
        </OuterContainer>
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
