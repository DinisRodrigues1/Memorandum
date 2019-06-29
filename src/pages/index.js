import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { FormattedMessage } from "react-intl"
import SquareImg from "../components/squareImg"
import SocialImageFacebook from "../components/socialImageFacebook"
import SocialImageInstagram from "../components/socialImageInstagram"
import SocialImageYoutube from "../components/socialImageYoutube"
import Helmet from "react-helmet"
import Layout from "../components/layout"

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

const SectionImage = styled(SquareImg)``
const Text = styled.span``

const SectionLatestBody = styled.section`
    padding-bottom: 7.5%;

   

`

const BodyDiv = styled.div`
    display: grid;
    grid-template-rows: 1fr 2fr;
    width: 80%;
    min-width: 70%;
    min-height: 90%;
    margin: 0 auto;
    margin-top: 10%;
    padding: 1% 1% 0 1%;
    margin-bottom: 6%;
    -moz-box-shadow:    0 0 7px 1px #D4D0AB;
    -webkit-box-shadow: 0 0 7px 1px #D4D0AB;
    box-shadow:         0 0 7px 1px #D4D0AB;
    border: thin solid #f1f1f1;
    

    ${media.desktop`
      width: 90%;  

    `}

    ${media.tablet`
      width: 92%;

    `}

    ${media.phone`
      width: 95%;
      margin-top: 20%;
      grid-template-rows: 1fr 3fr;
    `}
`
const TextSep = styled.hr`
  margin-left: -1.5%;
  margin-right: -1.5%;
  border: medium solid #dadfe1;
  color: #dadfe1;
  background-color: #dadfe1;
  margin-top: 2%;
  margin-bottom: 2%;
`

const SectionTitle = styled.h1`
  font-size: 1.8em;
  margin-bottom: 5%;
`

const SectionLatestText = styled.article`
  display: inline;
  text-align: justify;
  float: left;

  & > ${Text} {
    display: inline;
  }
`
const SectionImagePos = styled.div`
      height: 105px;
      float: left;
      margin 0 1%;
      padding: 0;
      border: thick solid #C8F7C5;

`
const SectionAbout = styled.section`
  padding-bottom: 7.5%;

  ${media.phone`
    padding-top: 15.5%;`}
`
const LinkTo = styled(Link)`
  text-decoration: none;
  color: black;
`

const FooterPLeft = styled.p`
  width: 50%;
  margin: 0 auto;
  
  ${media.desktop`
  width: 65%;
  `}

  ${media.tablet`
  width: 75%;
  `}

  ${media.phone`
    width: 80%;
  `}
`

const FooterPRight = styled.p`
  width: 50%;
  margin: 0 auto;
  
  ${media.desktop`
  width: 65%;
  `}

  ${media.tablet`
  width: 75%;
  `}

  ${media.phone`
    width: 80%;
  `}
`

const Footer = styled.footer`
    width: 100%;
    height: 32vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3fr 3fr;
    justify-items: center;
    align-items: center;
    background-color: #D4D0AB;
    color: black;
    background-size: cover;
    
    min-width: 100%;
    min-height: 28vh;
    -moz-box-shadow:    0 -2px 4px 1px #D4D0AB;
    -webkit-box-shadow: 0 -2px 4px 1px #D4D0AB;
    box-shadow:         0 -2px 4px 1px #D4D0AB;
    border-top: thin solid #D4D0AB;
    padding-top: 1%;
    overflow: hidden;
    font-size: 90%;

    ${media.desktop`
      height: 35vh;
      
    `}

    ${media.tablet`
      height: 39vh;
      font-size: 105%;
      
    `}

    ${media.phone`
      height: 60vh; 
      font-size: 106%;
     
    `}

`

const BodyBottom = styled.div`
  font-family: Verdana, sans-serif;
  min-width: 70%;
  min-height: 90%;
`

const SocialLogos = styled.div`
      margin: 1% auto 1% auto;
      text-align: center;
      vertical-align: middle;

      ${media.desktop`
      margin: 7% auto;
    `}
    
    ${media.tablet`
      margin: 10% auto;
    `}

    ${media.phone`
      margin: 18% auto;

    `}
     
`

const FBook = styled.a`
  margin-right: 5%;
`

const IGram = styled.a`
  margin-right: 5%;
`

const YTube = styled.a``

const TextMail = styled.span``
const Space = styled.span`
  margin-bottom: 0.5em;
  display: inline-block;
  ${media.phone`
  margin-bottom: 1em;
  `}
`

const IndexPage = props => {
  const postList = props.data.allMarkdownRemark
  const locale = props.pageContext.locale

  return (
    <>
      <Layout locale={locale}>
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
    DECA, Novas Tecnologias da Comunicação, NTC, Intergeracional, Comunicação, Tradição, Costumes, Oficios, Website, Site, Aveiro, Portugal"
              />
              <meta
                property="og:description"
                name="description"
                content="Website criado no âmbito do projeto Memorandum, cujo objetivo é fomentar a comunicação intergeracional através de entrevistas 
                gravadas e mais tarde disponiblizadas online para, principalmente, as gerações mais novas, como também todos os interessados."
              />
              <html lang="pt" />
              <title>Memorandum | Página principal</title>
              <link rel="canonical" href="https://memorandum.website" />
              <meta property="og:url" content="https://memorandum.website/" />
              <meta
                property="og:title"
                content="Memorandum | Página principal"
              />
              <meta property="og:site_name" content="Memorandum" />
              <meta property="og:locale" content="pt_PT" />
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
    University Project, University, Project, Communication, Intergenerational, Tradition, Custom, Trades, Website, Site, Aveiro, Portugal"
              />
              <meta
                name="description"
                content="Website created for the Memorandum project, with the objective of promoting intergenerational communication through recorded interviews,
                which are later posted online for the younger generations, or any interested in the initiative"
              />
              <html lang="en" />
              <title>Memorandum | Homepage</title>
              <link rel="canonical" href="https://memorandum.website/en/" />
              <meta
                property="og:url"
                content="https://memorandum.website/en/"
              />
              <meta
                property="og:title"
                content="Memorandum | Homepage"
              />
              <meta property="og:site_name" content="Memorandum" />
              <meta property="og:locale" content="en_US" />
            </Helmet>
          </>
        )}
        <BodyBottom>
          <BodyDiv>
            <SectionLatestBody>
              <TextSep />
              <SectionTitle>
                <FormattedMessage id="LastPost" />
              </SectionTitle>
              <SectionLatestText>
                <SectionImagePos>
                  <SectionImage />
                </SectionImagePos>
                {postList.edges[0].node.frontmatter.lang === locale &&
                locale === "pt" ? (
                  <LinkTo to="tenth-story/index.pt">
                    <Text>{postList.edges[0].node.excerpt}</Text>
                  </LinkTo>
                ) : (
                  <LinkTo to="tenth-story/index.en">
                    <Text>{postList.edges[1].node.excerpt}</Text>
                  </LinkTo>
                )}
              </SectionLatestText>
            </SectionLatestBody>
            <SectionAbout id="about">
              <TextSep />
              <SectionTitle>
                <FormattedMessage id="Project" />
              </SectionTitle>
              <p />
              <p>
                <h3>
                  <strong>
                    <FormattedMessage id="Tit1" />
                  </strong>
                </h3>
                <p>
                  <strong>
                    <FormattedMessage id="Mem" />
                  </strong>
                  <FormattedMessage id="Txt1" />
                </p>
                <p />
                <h3>
                  <strong>
                    <FormattedMessage id="Tit2" />
                  </strong>
                </h3>
                <p>
                  <strong>
                    <FormattedMessage id="Mem2" />
                  </strong>{" "}
                  <FormattedMessage id="Txt2" />
                </p>
                <p>
                  <strong>
                    <FormattedMessage id="Mem3" />
                  </strong>{" "}
                  <FormattedMessage id="Txt3" />
                  <em>
                    <FormattedMessage id="Ital" />
                  </em>
                </p>
              </p>
            </SectionAbout>
          </BodyDiv>
          <Footer>
            <FooterPLeft>
              <Space>
                <FormattedMessage id="Dev" />
              </Space>
              <br />
              <Space>
                <FormattedMessage id="Coor" />
              </Space>
              <br />
              <Space>
                <FormattedMessage id="Contact" />
                <TextMail>
                  projetomemorandum
                  <wbr />
                  @gmail.com{" "}
                </TextMail>
              </Space>
            </FooterPLeft>
            <FooterPRight>
              <SocialLogos>
                <FBook
                  aria-label="Visit our Facebook page"
                  target="_blank"
                  rel="noopener"
                  href="https://www.facebook.com/projetomemorandum/"
                >
                  <SocialImageFacebook />
                </FBook>
                <IGram
                  aria-label="Visit our Instagram page"
                  target="_blank"
                  rel="noopener"
                  href="https://www.instagram.com/projetomemorandum/"
                >
                  <SocialImageInstagram />
                </IGram>
                <YTube
                  aria-label="Visit our Youtube page"
                  target="_blank"
                  rel="noopener"
                  href="https://www.youtube.com/channel/UCvAXx7q7CPpz0n5_I-OQX9w"
                >
                  <SocialImageYoutube />
                </YTube>
              </SocialLogos>
            </FooterPRight>
          </Footer>
        </BodyBottom>
      </Layout>
    </>
  )
}

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/tenth-story/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          html
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
