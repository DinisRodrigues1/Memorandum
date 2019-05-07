/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import SquareImg from './squareImg'
import SocialImageFacebook from './socialImageFacebook'
import SocialImageInstagram from './socialImageInstagram'
import SocialImageYoutube from './socialImageYoutube'
import MailImage from './mailImage'
import Navigation from "./navigation"
import styled, { css } from "styled-components"
import "./layout.css"
require("smooth-scroll")('a[href*="#"]')

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


const Padding = styled.div`
    padding: 3%;

    ${media.tablet`
      padding: 8%;
    `}
`
const SectionImage = styled(SquareImg)`  
`
const Text = styled.p`
`

const SectionLatestBody = styled.section`
    padding-bottom: 7.5%;

`

const BodyDiv = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top: 10%;
    padding: 1% 1% 0 1%;
    margin-bottom: 6%;
    -moz-box-shadow:    0 0 7px 1px #D4D0AB;
    -webkit-box-shadow: 0 0 7px 1px #D4D0AB;
    box-shadow:         0 0 7px 1px #D4D0AB;
    border: thin solid #f1f1f1;

    ${media.desktop`
      width: 82%;  

    `}

    ${media.tablet`
      width: 85%;

    `}

    ${media.phone`
      width: 95%;
    `}
`
const TextSep = styled.hr`
   margin-left: -1.5%;
   margin-right: -1.5%;
   border: medium solid #DADFE1;
   color: #DADFE1;
   background-color: #DADFE1;
`

const SectionTitle = styled.h2`
    margin-bottom: 5%;`

const SectionLatestText = styled.article`
    display: inline;
    text-align: justify;
    
    & > ${Text} {
      display: inline;
      
    }

`    
const SectionImagePos = styled.div`
      float: left;
      margin 1% 2%;
      border: thick solid #C8F7C5; //border for image --> can be later changed to match theme;

`
const SectionAbout = styled.section`
    padding-top: 7.5%;
    padding-bottom: 11%;

`

const FooterPLeft = styled.p`
      width: 20%;
`

const FooterPRight = styled.p`
      width: 20%;
`

const Footer = styled.footer`
    width: 100%;
    height: 41vh;
    background-color: black;
    color: white;
    bottom: 0;
    position: relative;
    -moz-box-shadow:    0 -2px 4px 1px #D4D0AB;
    -webkit-box-shadow: 0 -2px 4px 1px #D4D0AB;
    box-shadow:         0 -2px 4px 1px #D4D0AB;
    border-top: thin solid #f1f1f1;
    padding-top: 1%;

    ${media.desktop`
      width: 100%;
      height: 27vh;
      background-color: black;
      color: white;
      bottom: 0;
      position: relative;
      padding-top: 5%
    `}
    
    ${media.tablet`
      width: 100%;
      height: 40vh;
      background-color: black;
      color: white;
      bottom: 0;
      position: relative;
      padding: top: 7%;
    `}

    ${media.phone`
      width: 100%;
      height: 60vh;
      background-color: black;
      color: white;
      bottom: 0;
      position: relative;
      padding-top: 10%;`
      }
    

    & > ${FooterPLeft} {
        float: left
        width: 65%;
        display: inline-block;
        margin-bottom: 3%;
        padding: 2%;
        height: 40%;
        margin-left: 10%;

        ${media.phone`
          width: 66%;
          float: none;
          height: 25%;
          margin: 0 auto;
          display: block;
          `}

        
    }
    & > ${FooterPRight} {
        float: right;
        width: 56%;
        display: inline-block;
        padding: 2%;
        margin-right: -16%;
        height: 30%;

        ${media.phone`
          width: 80%;
          height: 25%;
          float: none;
          margin: 0 auto;
          display: block;
          text-align: center;
        `}

  }
` 
const BodyBottom = styled.div`
      font-family: Verdana, sans-serif;
`

const ClearFix = styled.div`
      clear: both; 

`

const SocialLogos = styled.div`
      margin: 3% auto;
      text-align: center;

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
      margin-right: 2%;
`

const IGram = styled.a`
      margin-right: 2%;
  `

const YTube = styled.a`
      

`

const Layout = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <BodyBottom>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Padding></Padding>
        <Navigation />
        <BodyDiv>
          <SectionLatestBody>
            <TextSep/>
              <SectionTitle>Última publicação</SectionTitle>
                <SectionLatestText>
                    <SectionImagePos>
                    <SectionImage />
                    </SectionImagePos>
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam tempor, lectus in imperdiet sollicitudin, ex est mattis 
                    tellus, in fermentum odio neque nec odio. Vestibulum vehicula 
                    rutrum feugiat. Sed hendrerit tempus lacus sed consequat. Aliquam 
                    eu aliquam nunc. Morbi quis venenatis enim, sed ultricies ante. 
                    Etiam quis mi et nisl sagittis lacinia nec nec neque. Morbi et 
                    sollicitudin orci. Cras vitae eleifend ligula. Proin vel turpis 
                    facilisis erat scelerisque condimentum. Ut ut varius nibh. 
                    Proin sodales magna vitae accumsan mollis. Mauris placerat 
                    mattis lectus et efficitur. Pellentesque at ligula eget odio 
                    rhoncus commodo. Mauris vestibulum facilisis massa, a pulvinar 
                    eros varius et. Donec et facilisis ligula.
                    </Text>
                </SectionLatestText>
          </SectionLatestBody>
            <SectionAbout id="about">
            <TextSep/>
              <SectionTitle>O projeto</SectionTitle>
              <p></p>
              <p>
              <p><b>Como nasceu?</b></p>
              <p><strong>Memorandum</strong> nasceu no âmbito do projeto final da licenciatura em Novas 
              Tecnologias da Comunicação, da Universidade de Aveiro.
              Este projeto nasce pelas mãos de Diana Nicolau, Dinis Rodrigues, Inês Melo 
              e Joaquim Miranda sob a proposta e orientação de Maria João Antunes.</p>
              <p></p>
              <p><b>O que é?</b></p>
              <p><strong>Memorandum</strong> é um projeto que visa fortalecer o elo entre gerações passadas e 
              as contemporâneas através da preservação de tradições, vivências e saberes. 
              Este projeto pretende colmatar a perda de conhecimento relativo às vivências 
              dos que nos antecederam, retratando assuntos de diferentes naturezas – sejam 
              eles Histórias, Tradições, Costumes e Profissões. 
              Procuramos ser uma plataforma de partilha intergeracional, com o propósito de, 
              através do registo via fotografia e vídeo, manter vivas tradições e vivências 
              de tempos passados.</p>
              <p><strong>Memorandum</strong> assenta, não só, numa temática pouco explorada atualmente, como 
              também, num formato audiovisual inovador e apelativo, procurando a aproximação ao 
              seu público alvo <i>(Jovens entre os 18 e 24 anos)</i>.</p>
              </p>
            </SectionAbout>
            </BodyDiv>
          <Footer>
            <FooterPLeft>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            </FooterPLeft>
            <FooterPRight>
              <MailImage/>&nbsp; projetomemorandum@gmail.com
            </FooterPRight>
            <ClearFix></ClearFix>
            <SocialLogos>
              <FBook href="https://www.facebook.com/projetomemorandum/"><SocialImageFacebook/></FBook>
              <IGram href="https://www.instagram.com/projetomemorandum/"><SocialImageInstagram/></IGram>
              <YTube href="https://www.youtube.com/channel/UCvAXx7q7CPpz0n5_I-OQX9w"><SocialImageYoutube/></YTube>
            </SocialLogos>
          </Footer>

      </BodyBottom>
    )}
  />
  
)




export default Layout
