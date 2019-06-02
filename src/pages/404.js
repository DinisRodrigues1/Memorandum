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
  margin: 5% auto;
  padding: 2% 1% 0 2%;
  -moz-box-shadow:    0 0 7px 1px #D4D0AB;
  -webkit-box-shadow: 0 0 7px 1px #D4D0AB;
  box-shadow:         0 0 7px 1px #D4D0AB;
  border: thin solid #f1f1f1;
  width: 80%;
  font-family: Verdana, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  max-width: 100%;
  overflow-x: hidden;
  
  
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
    padding: 9% 0;
    margin-top: 30%;
    `}

`

const TextContainer = styled.div`
  margin: 25vh 0;
`

const GoBack = styled(LinkWrapper)`
  text-decoration: none;
  color: black;
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
              content="width=device-width, initial-scale=1.0, user-scalable=no"
            />
            <meta
              name="keywords"
              content="Projeto, Universitário, Memorandum, Universidade de Aveiro, Departamento de Comunicação e Arte, 
    DECA, Novas Tecnologias da Comunicação, NTC, Intergeracional, Comunicação, Tradição, Costumes, Oficios, Página, 404, não, encontrada,
    Página não encontrada"
            />
            <meta
              name="description"
              content="Página criada para enviar utilizadores para a última página visitada antes da atual em caso de links corrumpidos ou 404s."
            />
            <title>Memorandum | 404 Página não encontrada</title>
            <link rel="canonical" href="https://memorandum.website/404/" />
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
              content="Memorandum, DECA, Novas Tecnologias das Comunicação, NTC, University of Aveiro, Department of Comunication and Art, 
    University Project, University, Project, Communication, Intergenerational, Tradition, Custom, Trades, Page, 404, not, found, Page not found"
            />
            <meta
              name="description"
              content="Page created to send users back to their last visited page in case of corrupted links or 404s.."
            />
            <title>Memorandum | 404 Page not found</title>
            <link rel="canonical" href="https://memorandum.website/en/404/" />
          </Helmet>
        </>
      )}
      <TextContainer>
        <h2>
          <FormattedMessage id="PageNotFound" />
        </h2>
        <GoBack onClick={goBack}>
          <FormattedMessage id="404Help" />
        </GoBack>
      </TextContainer>
    </Outer404Container>
  </Provider>
)

export default NotFoundPage
