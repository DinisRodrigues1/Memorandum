import React from "react"
import { graphql } from "gatsby"
import Navigation from "./navigation_extra"
import { Helmet } from "react-helmet"
import styled, { css } from "styled-components"
import NavMobile from "./nav_extra_mobile"
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
    padding: 2% 0;
    font-family: Verdana, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    max-width: 100%;
    overflow-x: hidden;
    width: 80%;
    margin: auto;
    
    ${media.desktop`
    width: 90%;
    padding: 5% 0;
    `}

    ${media.tablet`
    width: 92%;
    padding: 7% 0;
    `}

    ${media.phone`
    width: 95%;
    padding: 9% 0;
    `}
`

const OuterPostContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  margin-top: 5%;
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

const PageTitle = styled.h2`
  margin-top: 15%;
  font-size: 1.5em;
  color: black;
`
const Text = styled.div`
  color: black;
`


const Story = props => {
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
                content="width=device-width, initial-scale=1.0"
              />
              <meta
                name="keywords"
                content={
                  "Projeto, Universitário, Memorandum, Universidade de Aveiro, Departamento de Comunicação e Arte, DECA, Novas Tecnologias da Comunicação, NTC, Intergeracional, Comunicação, Tradição, Costumes, Oficios, Página, História, Entrevista, " +
                  description +
                  ""
                }
              />
              <html lang="pt" />
              <meta name="description" content={"" + description + ""} />
              <title>Memorandum | {title}</title>
            </Helmet>
          </>
        ) : (
          <>
            <Helmet>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <meta
                name="keywords"
                content={
                  "Memorandum, DECA, Novas Tecnologias das Comunicação, NTC, University of Aveiro, Department of Comunication and Art, University Project, University, Project, Communication, Intergenerational, Tradition, Custom, Trades, Story, Interview, " +
                  description +
                  ""
                }
              />
              <html lang="en" />
              <meta name="description" content={"" + description + ""} />
              <title>Memorandum | {title}</title>
            </Helmet>
          </>
        )}

        <Navigation locale={locale} />
        <NavMobile locale={locale} />
        <OuterPostContainer>
          <PageTitle>
            <TextSepSpecial />
            {title}
          </PageTitle>
          <Text>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Text>
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
