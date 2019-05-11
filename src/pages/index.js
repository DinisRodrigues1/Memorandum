import React from "react"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types'
import styled, { css } from "styled-components"
import { FormattedMessage } from 'react-intl'
import SquareImg from '../components/squareImg'
import SocialImageFacebook from '../components/socialImageFacebook'
import SocialImageInstagram from '../components/socialImageInstagram'
import SocialImageYoutube from '../components/socialImageYoutube'
import MailImage from '../components/mailImage'
import Helmet from 'react-helmet'

import Layout from "../components/layout"



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
   border: medium solid #C8F7C5;
   color: #DADFE1;
   background-color: #C8F7C5;
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
      margin 1% 1%;
      padding-top: 0.5%;
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
    height: 35vh;
    background-color: #D4D0AB;
    color: black;
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
        float: left;
        width: 40%;
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
        width: 40%;
        display: inline-block;
        padding: 2%;
        margin-right: -2%;
        height: 30%;
        
        ${media.desktop`
        margin-right: 2.5%;`}

        

        ${media.phone`
          width: 80%;
          height: 25%;
          float: none;
          margin: 40% auto 0 auto;
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

const YTube = styled.a`
      

`

const MailImageStyled = styled.span`
   

`
const TextMail = styled.span`
    vertical-align: text-bottom; 

`

/* Encontrar lógica para video player */ 
const IndexPage = ( { pageContext: { locale } }) => (
<>
    <Layout locale={ locale }>
    <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    </Helmet>
    
    <SEO title="Home" keywords={[`Projeto`, `Universitário`, `Memorandum`, `Universidade de Aveiro`, `Departamento de Comunicação e Arte`, 
    `DECA`, `Novas Tecnologias da Comunicação`, `NTC`, `UC Projeto`, `University of Aveiro`, `Department of Communication and Art`, 
    `University Project`, `University`, `Project`, `Intergeracional`, `Comunicação`, `Communication`, `Intergenerational`]} />
     
    <BodyBottom>
        <BodyDiv>
          <SectionLatestBody>
            <TextSep/>
              <SectionTitle><FormattedMessage id="LastPost"/></SectionTitle>
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
              <SectionTitle><FormattedMessage id="Project"/></SectionTitle>
              <p></p>
              <p>
              <p><b><FormattedMessage id="Tit1"/></b></p>
              <p><strong><FormattedMessage id="Mem"/></strong><FormattedMessage id="Txt1"/></p>
              <p></p>
              <p><b><FormattedMessage id="Tit2"/></b></p>
              <p><strong><FormattedMessage id="Mem2"/></strong> <FormattedMessage id="Txt2"/></p>
              <p><strong><FormattedMessage id="Mem3"/></strong> <FormattedMessage id="Txt3"/><i><FormattedMessage id="Ital"/></i></p>
              </p>
            </SectionAbout>
            </BodyDiv>
          <Footer>
            <FooterPLeft>
           <p>Projeto desenvolvido por: Diana Nicolau, Dinis Rodrigues, Inês Melo e Joaquim Miranda</p> <p>Coordenado por: Maria João Antunes</p>
           <p>Para contactar o projeto: <TextMail>projetomemorandum@gmail<wbr/>.com </TextMail></p>
            </FooterPLeft>
            <FooterPRight>
            <SocialLogos>
              <FBook target="_blank" href="https://www.facebook.com/projetomemorandum/"><SocialImageFacebook/></FBook>
              <IGram target="_blank" href="https://www.instagram.com/projetomemorandum/"><SocialImageInstagram/></IGram>
              <YTube target="_blank" href="https://www.youtube.com/channel/UCvAXx7q7CPpz0n5_I-OQX9w"><SocialImageYoutube/></YTube>
            </SocialLogos>
            </FooterPRight>
            <ClearFix></ClearFix>
           
          </Footer>

      </BodyBottom>
      </Layout>
      
      </>
     
)
 


export default IndexPage
