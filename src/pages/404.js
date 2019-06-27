import React from "react"
import { FormattedMessage } from "react-intl"
import styled, { css } from "styled-components"
import Provider from "../components/provider"
import LinkWrapper from "../components/linkWrapper"
import { Helmet } from "react-helmet"

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

const Outer404Container = styled.div`
  height: 100vh;
  width: auto;
  display: grid;
  grid-template-columns: 3fr;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
`

const TextContainer = styled.div`
  margin: 0 auto; 
  -moz-box-shadow:    0 0 7px 1px #D4D0AB;
  -webkit-box-shadow: 0 0 7px 1px #D4D0AB;
  box-shadow:         0 0 7px 1px #D4D0AB;
  border: thin solid #f1f1f1;
  padding: 2%;
  height: 50vh;
  width: 80%;
  font-family: Verdana, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  max-width: 100%;
  overflow-x: hidden;
  color: black;


${media.desktop`
  width: 90%;
  padding: 5% 1% 0 5%;
  
  `}

${media.tablet`
  width: 92%;
  padding: 7% 1% 0 7%;
  `}

${media.phone`
  width: 95%;
  padding: 9% 1% 0 9%;
  margin: 30% auto 0 auto;
  `}


`

const Title = styled.h1`
  font-size: 1.8em;
  margin: 5%;
`

const GoBack = styled(LinkWrapper)`
  text-decoration: none;
  background-color: #c8f7c5;
  color: black;
  margin: 5%;
`

let goBack = () => {
  window.history.back()
}

const NotFoundPage = ({ pageContext: { locale } }) => (
  <Provider locale={locale}>
    <Outer404Container>
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
    DECA, Novas Tecnologias da Comunicação, NTC, Intergeracional, Comunicação, Tradição, Costumes, Oficios, Página, 404, não, encontrada,
    Página não encontrada"
            />
            <meta
              property="og:description"
              name="description"
              content="Página criada para enviar utilizadores para a última página visitada antes da atual em caso de links corrumpidos ou 404s."
            />
            <html lang="pt" />
            <title>Memorandum | 404 Página não encontrada</title>
            <link rel="canonical" href="https://memorandum.website/404/" />
            <meta property="og:url" content="https://memorandum.website/404/" />
            <meta
              property="og:title"
              content="Memorandum | 404 Página não encontrada"
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
    University Project, University, Project, Communication, Intergenerational, Tradition, Custom, Trades, Page, 404, not, found, Page not found"
            />
            <meta
              property="og:description"
              name="description"
              content="Page created to send users back to their last visited page in case of corrupted links or 404s.."
            />
            <html lang="en" />
            <title>Memorandum | 404 Page not found</title>
            <link rel="canonical" href="https://memorandum.website/en/404/" />
            <meta
              property="og:url"
              content="https://memorandum.website/en/404/"
            />
            <meta
              property="og:title"
              content="Memorandum | 404 Page not found"
            />
            <meta property="og:site_name" content="Memorandum" />
            <meta property="og:locale" content="en_US" />
          </Helmet>
        </>
      )}
      <TextContainer>
        <Title>
          <FormattedMessage id="PageNotFound" />
        </Title>
        <GoBack onClick={goBack}>
          <FormattedMessage id="404Help" />
        </GoBack>
      </TextContainer>
    </Outer404Container>
  </Provider>
)

export default NotFoundPage
