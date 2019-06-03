import React from "react"
import { graphql } from "gatsby"
import Navigation from "./navigation_extra"
import { Helmet } from "react-helmet"
import styled, { css } from "styled-components"
import NavMobile from "./nav_extra_mobile"
import { FormattedMessage } from "react-intl"
import Provider from "./provider"

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
  -moz-box-shadow: 0 0 7px 1px #d4d0ab;
  -webkit-box-shadow: 0 0 7px 1px #d4d0ab;
  box-shadow: 0 0 7px 1px #d4d0ab;
  border: thin solid #f1f1f1;

  ${media.phone`
    margin-top: 30%;`}
`
const TextSepSpecial = styled.hr`
  margin-top: -14%;
  margin-left: -1.8%;
  margin-right: -1.8%;
  border: medium solid #dadfe1;
  color: #dadfe1;
  background-color: #dadfe1;
`

const PageTitle = styled.h1`
  font-size: 1.8em;
  margin-top: 15%;
  margin-bottom: 10%;
`

const FakeH1 = styled.h2`
  font-size: 1.5em;
`

function Story(props) {
  const post = props.data.markdownRemark
  const { title } = post.frontmatter
  const { description } = post.frontmatter
  const locale = props.pageContext.locale

  return (
    <Provider locale={locale}>
      <OuterContainer>
        {locale === "pt" ? (
          <>
            <Helmet>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, user-scalable=no"
              />
              <meta
                name="keywords"
                content={
                  "Projeto, Universitário, Memorandum, Universidade de Aveiro, Departamento de Comunicação e Arte, DECA, Novas Tecnologias da Comunicação, NTC, Intergeracional, Comunicação, Tradição, Costumes, Oficios, Página, História, Entrevista, " +
                  description +
                  ""
                }
              />
              <meta name="description" content={"" + description + ""} />
              <title>Memorandum | {title}</title>
            </Helmet>
          </>
        ) : (
          <>
            <Helmet>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, user-scalable=no"
              />
              <meta
                name="keywords"
                content={
                  "Memorandum, DECA, Novas Tecnologias das Comunicação, NTC, University of Aveiro, Department of Comunication and Art, University Project, University, Project, Communication, Intergenerational, Tradition, Custom, Trades, Story, Interview, " +
                  description +
                  ""
                }
              />
              <meta name="description" content={"" + description + ""} />
              <title>Memorandum | {title}</title>
            </Helmet>
          </>
        )}

        <Navigation locale={locale} />
        <NavMobile />
        <OuterPostContainer>
          <PageTitle>
            <TextSepSpecial />
            <FormattedMessage id="Stories" />
          </PageTitle>
          <div>
            <FakeH1>{title}</FakeH1>
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
  }
`
