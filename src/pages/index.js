import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Link } from 'gatsby'
import styled, { css } from "styled-components"
import { FormattedMessage } from 'react-intl'
import SquareImg from '../components/squareImg'
import SocialImageFacebook from '../components/socialImageFacebook'
import SocialImageInstagram from '../components/socialImageInstagram'
import SocialImageYoutube from '../components/socialImageYoutube'
import Helmet from 'react-helmet'
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


const SectionImage = styled(SquareImg)`  
`
const Text = styled.span`
`

const SectionLatestBody = styled.section`
    padding-bottom: 7.5%;

    ${media.desktop`
    padding-bottom: 18%;
    `}

    ${media.tablet`
    padding-bottom: 20%;
    `}

    ${media.phone`
    padding-bottom: 40%;`}

`

const BodyDiv = styled.div`
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
      width: 82%;  

    `}

    ${media.tablet`
      width: 85%;

    `}

    ${media.phone`
      width: 95%;
      margin-top: 20%;
    `}
`
const TextSep = styled.hr`
   margin-left: -1.5%;
   margin-right: -1.5%;
   border: medium solid #DADFE1;
   color: #DADFE1;
   background-color: #DADFE1;
   margin-top: 2%;
   margin-bottom: 2%;
`

const SectionTitle = styled.h2`
    margin-bottom: 5%;`

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
      border: thick solid #C8F7C5; //border for image --> can be later changed to match theme;

`
const SectionAbout = styled.section`
    padding-top: 7.5%;
    padding-bottom: 11%;

    ${media.phone`
    padding-top: 15.5%;`}

`
const LinkTo = styled(Link)`
text-decoration: none;
    color: black;`

const FooterPLeft = styled.p`
      width: 20%;
      font-size: 90%;
`

const FooterPRight = styled.p`
      width: 20%;
`

const Footer = styled.footer`
    width: 100%;
    height: 28vh;
    background-color: #D4D0AB;
    color: black;
    bottom: 0;
    position: relative;
    min-width: 100%;
    min-height: 28vh;
    -moz-box-shadow:    0 -2px 4px 1px #D4D0AB;
    -webkit-box-shadow: 0 -2px 4px 1px #D4D0AB;
    box-shadow:         0 -2px 4px 1px #D4D0AB;
    border-top: thin solid #D4D0AB;
    padding-top: 1%;
    font-size: 90%;

    ${media.desktop`
      width: 100%;
      height: 24vh;
      min-width: 100%;
      min-height: 24vh;
      font-size: 95%;
      background-color: #D4D0AB;
      color: black;
      bottom: 0;
      position: relative;
      padding-top: 5%
    `}
    
    ${media.tablet`
      width: 100%;
      height: 29vh;
      min-width: 100%;
      min-height: 29vh;
      background-color: #D4D0AB;
      color: black;
      bottom: 0;
      position: relative;
      padding: top: 7%;
    `}

    ${media.phone`
      width: 100%;
      height: 58vh;
      min-width: 100%;
      min-height: 58vh%;
      background-color: #D4D0AB;
      color: black;
      bottom: 0;
      position: relative;
      padding-top: 10%;
      font-size: 110%;`
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
      min-width: 70%;
      min-height: 90%;
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
     

`
const Space = styled.span`
  margin-bottom: 0.5em;
  display: inline-block;
  ${media.phone`
  margin-bottom: 1em;
  `}
`


const IndexPage = (props) => {
  
  const postList = props.data.allMarkdownRemark;
  const locale = props.pageContext.locale;
  
  return (

<>
    <Layout locale={locale}>
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
                    {postList.edges[3].node.frontmatter.lang === locale && locale === "pt" ?
                   <LinkTo to="second_story/index.pt"> 
                   <Text>
                      {postList.edges[3].node.excerpt}                   
                    </Text>
                    </LinkTo>
                     : 
                      <LinkTo to="second_story/index.en">
                       <Text>
                        {postList.edges[2].node.excerpt}
                       </Text>
                       </LinkTo>
                       }
              
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
           <Space><FormattedMessage id="Dev"/></Space><br/> <Space><FormattedMessage id="Coor"/></Space><br/>
           <Space><FormattedMessage id="Contact"/><TextMail>projetomemorandum@gmail<wbr/>.com </TextMail></Space>
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
} 
 

export default IndexPage


export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
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