import React from "react"
import Navigation from "../components/navigation_extra"
import NavMobile from "../components/nav_extra_mobile"
import styled, { css } from "styled-components"
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
  padding: 2% 0;
  font-family: Verdana, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  max-width: 100%;
  overflow-x: hidden;
  width: 80%;
  margin: 0 auto;


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
      padding: 9% 0;`}
`
const OuterVideoContainer = styled.div`
  margin-top: 5%;
  display: grid;
  grid-template: rows: 1fr;
  padding: 1% 1% 0 1%;
  -moz-box-shadow: 0 0 7px 1px #d4d0ab;
  -webkit-box-shadow: 0 0 7px 1px #d4d0ab;
  box-shadow: 0 0 7px 1px #d4d0ab;
  border: thin solid #f1f1f1;
 

  ${media.phone`
  margin-top: 30%;`}
`

const TextSep = styled.hr`
  margin-left: -1.8%;
  margin-right: -1.8%;
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

const VideoContainer = styled.div`
    height: 90vh;
    width: 100%;

    ${media.desktop`
      height: 60vh;
    `}
    
    ${media.tablet`
      height: 55vh;
    `}

    ${media.phone`
      height: 50vh;
    `}
`

const VideoArticle = styled.article`
  
`

const VideoText = styled.p`
  margin-top: -10%;
`

const IFrame = styled.iframe`
  display: block;
`

const Videos = ({ pageContext: { locale } }) => (
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
              content="Projeto, Universitário, Memorandum, Universidade de Aveiro, Departamento de Comunicação e Arte, 
    DECA, Novas Tecnologias da Comunicação, NTC, Intergeracional, Comunicação, Tradição, Costumes, Oficios, Página, Vídeos"
            />
            <meta
              name="description"
              content="Página com vídeos de entrevistas realizadas para o projeto Memorandum."
            />
            <html lang="pt" />
            <title>Memorandum | Vídeos</title>
            <link rel="canonical" href="https://memorandum.website/videos/" />
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
    University Project, University, Project, Communication, Intergenerational, Tradition, Custom, Trades, Page, Videos"
            />
            <meta
              name="description"
              content="Page containing videos of interviews conducted for the Memorandum project."
            />
            <html lang="en" />
            <title>Memorandum | Videos</title>
            <link
              rel="canonical"
              href="https://memorandum.website/en/videos/"
            />
          </Helmet>
        </>
      )}
      <Navigation locale={locale} />
      <NavMobile locale={locale} />
      <OuterVideoContainer>
        <PageTitle>
          <TextSepSpecial />
          <FormattedMessage id="Videos" />
        </PageTitle>

        {locale === "pt" ? (
          <>
            <VideoArticle id="one">
              <VideoContainer>
                <IFrame
                  width="100%"
                  height="75%"
                  src="https://www.youtube.com/embed/h1zK07osRGM"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
                />
              </VideoContainer>
              <VideoText>Dona Maria Adelaide e Sr. Arménio Varela</VideoText>
              <TextSep />
            </VideoArticle>
            <VideoArticle id="three">
              <VideoContainer>
                <IFrame
                  width="100%"
                  height="75%"
                  src="https://www.youtube.com/embed/NSfKbnxvPOg"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
                />
              </VideoContainer>
              <VideoText>Dona Maria de Jesus e Sr. Edgar</VideoText>
              <TextSep />
            </VideoArticle>
            <VideoArticle id="five">
              <VideoContainer>
                <IFrame
                  width="100%"
                  height="75%"
                  src="https://www.youtube.com/embed/izEy4PahAa8"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
                />
              </VideoContainer>
              <VideoText>Dona Fátima e Sr. Zé e Júlia Costa</VideoText>
              <TextSep />
            </VideoArticle>
          </>
        ) : (
          <>
            <VideoArticle>
              <VideoContainer id="two">
                <IFrame
                  width="100%"
                  height="75%"
                  src="https://www.youtube.com/embed/Q6aOwm91SM8"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
                />
              </VideoContainer>
              <VideoText>Mrs. Maria Adelaide and Mr. Arménio Varela</VideoText>
              <TextSep />
            </VideoArticle>
            <VideoArticle id="four">
              <VideoContainer>
                <IFrame
                  width="100%"
                  height="75%"
                  src="https://www.youtube.com/embed/NXs0F1BnvMA"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
                />
              </VideoContainer>
              <VideoText>Mrs. Maria de Jesus e Mr. Edgar</VideoText>
              <TextSep />
            </VideoArticle>
            <VideoArticle id="six">
              <VideoContainer>
                <IFrame
                  width="100%"
                  height="75%"
                  src="https://www.youtube.com/embed/Y1iI53d9hpI"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
                />
              </VideoContainer>
              <VideoText>Mrs. Fátima and Mr. Zé and Mrs. Júlia Costa</VideoText>
              <TextSep />
            </VideoArticle>
          </>
        )}
      </OuterVideoContainer>
    </OuterContainer>
  </Provider>
)

export default Videos
