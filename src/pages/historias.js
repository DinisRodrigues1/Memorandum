import React from "react"
import { Link, graphql } from "gatsby"
import Navigation from "../components/navigation_extra"
import styled, { css } from "styled-components"
import NavMobile from "../components/nav_extra_mobile"
import { FormattedMessage } from "react-intl"
import { Helmet } from "react-helmet"
import Provider from "../components/provider"

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
  font-family: Verdana, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  max-width: 100%;
  overflow-x: hidden;
  padding: 2% 0;
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

const BodyDiv = styled.div`
  margin-top: 5%;
  display: grid;
  grid-template-rows: 1fr;
  padding: 1% 1% 0 1%;
  -moz-box-shadow: 0 0 7px 1px #d4d0ab;
  -webkit-box-shadow: 0 0 7px 1px #d4d0ab;
  box-shadow: 0 0 7px 1px #d4d0ab;
  border: thin solid #f1f1f1;

  ${media.phone`
  margin-top: 30%; `}
`

const TextSepSecond = styled.hr`
  margin-left: -1.8%;
  margin-right: -1.8%;
  margin-top: 3%;
  margin-bottom: 3%;
  border: medium solid #dadfe1;
  color: #dadfe1;
  background-color: #dadfe1;
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
  color: black;
`

const PostLink = styled(Link)`
  text-decoration: none;
`

const PostContainer = styled.div`
  font-family: Verdana, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
`
const PostList = styled.div`
  font-family: Verdana, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  color: black;
`

const PostTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 5%;
  color: #000;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;
`

const PostDate = styled.span`
  display: inline-block;
  margin-bottom: 3%;
`

const Historias = props => {
  const postList = props.data.allMarkdownRemark
  const locale = props.pageContext.locale
  console.log(postList)

  return (
    <Provider locale={locale}>
      <>
        {locale === "pt" ? (
          <>
            <Helmet>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <meta
                name="keywords"
                content="Projeto, Universitário, Memorandum, Universidade de Aveiro, Departamento de Comunicação e Arte, 
    DECA, Novas Tecnologias da Comunicação, NTC, Intergeracional, Comunicação, Tradição, Costumes, Oficios, Página, Histórias, Entrevistas"
              />
              <meta
                name="description"
                content="Página com as diferentes histórias de cada entrevistado pelo projeto."
              />
              <html lang="pt" />
              <title>Memorandum | Histórias</title>
              <link
                rel="canonical"
                href="https://memorandum.website/historias/"
              />
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
                content="Memorandum, DECA, Novas Tecnologias das Comunicação, NTC, University of Aveiro, Department of Comunication and Art, 
    University Project, University, Project, Communication, Intergenerational, Tradition, Custom, Trades, Page, Stories, Interviews"
              />
              <meta
                name="description"
                content="Page containing the stories of each interviewee of the project."
              />
              <html lang="en" />
              <title>Memorandum | Stories</title>
              <link
                rel="canonical"
                href="https://memorandum.website/en/historias/"
              />
            </Helmet>
          </>
        )}
        <OuterContainer>
          <Navigation locale={locale} />
          <NavMobile locale={locale} />
          <BodyDiv>
            <PageTitle>
              <TextSepSpecial />
              <FormattedMessage id="Stories" />
            </PageTitle>
              <>
              {postList.edges.map(({ node }, i) =>
                node.frontmatter.lang === locale ? (
                  <PostContainer>
                  <PostLink to={node.fields.slug} className="link">
                    <PostList>
                      <PostTitle>{node.frontmatter.title}</PostTitle>
                      <PostDate>{node.frontmatter.date}</PostDate>
                      <p>{node.excerpt}</p>
                    </PostList>
                    <TextSepSecond />
                  </PostLink>
                </PostContainer>
                ) : (
                  <></>
                )
              )}
            </>
          </BodyDiv>
        </OuterContainer>
      </>
    </Provider>
  )
}

export default Historias

export const listQuery = graphql`
  query ListsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            title
            lang
          }
        }
      }
    }
  }
`
