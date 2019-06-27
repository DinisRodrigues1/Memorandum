import React from "react"
import Navigation from "../components/navigation_extra"
import { Helmet } from "react-helmet"
import styled, { css } from "styled-components"
import Images from "../components/galleryImages"
import NavMobile from "../components/nav_extra_mobile"
import { FormattedMessage } from "react-intl"
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
  padding: 3% 0;
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

const PageTitle = styled.h1`
  font-size: 1.8em;
  margin-top: 15%;
  margin-bottom: 10%;
`
const BodyDiv = styled.div`
  margin-top: 10%;
  padding: 1% 1% 0 1%;
  margin-bottom: 6%;
  -moz-box-shadow: 0 0 7px 1px #d4d0ab;
  -webkit-box-shadow: 0 0 7px 1px #d4d0ab;
  box-shadow: 0 0 7px 1px #d4d0ab;
  border: thin solid #f1f1f1;

  ${media.phone`
  margin-top: 30%;
  `}
`

const TextSepSpecial = styled.hr`
  margin-top: -14%;
  margin-left: -1.8%;
  margin-right: -1.8%;
  border: medium solid #dadfe1;
  color: #dadfe1;
  background-color: #dadfe1;
`

const MarginDiv = styled.div`
  padding: 2% 0;
`

const ImageGallery = ({ pageContext: { locale } }) => {
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
    DECA, Novas Tecnologias da Comunicação, NTC, Intergeracional, Comunicação, Tradição, Costumes, Oficios, Página, Galeria,
    Imagens, Galeria de Imagens, Fotos de viagem, Fotos, Viagem"
              />
              <meta
                name="description"
                content="Galeria de fotografias tiradas pelo grupo ao longo da fase de gravações do projeto."
              />
              <html lang="pt" />
              <title>Memorandum | Galeria</title>
              <link
                rel="canonical"
                href="https://memorandum.website/galeria/"
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
    University Project, University, Project, Communication, Intergenerational, Tradition, Custom, Trades, Page, Gallery, Images, Image Gallery,
    Travel Photos, Photos, Travel"
              />
              <meta
                name="description"
                content="Gallery containing photographs taken by the group during the filming stage of the project."
              />
              <html lang="en" />
              <title>Memorandum | Gallery</title>
              <link
                rel="canonical"
                href="https://memorandum.website/en/galeria/"
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
              <FormattedMessage id="Gallery" />
            </PageTitle>
            <>
              <Images locale={locale} />
            </>
            <MarginDiv />
          </BodyDiv>
        </OuterContainer>
      </>
    </Provider>
  )
}

export default ImageGallery
