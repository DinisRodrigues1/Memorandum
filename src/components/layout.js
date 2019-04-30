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
import Navigation from "./navigation"
import styled, { css } from "styled-components"
import "./layout.css"

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

  return acc
}, {})

const Content = styled.div`
  height: 3em;
  width: 3em;
  background: papayawhip;

  /* Now we have our methods on media and can use them instead of raw queries */
  ${media.desktop`background: dodgerblue;`}
  ${media.tablet`background: mediumseagreen;`}
  ${media.phone`background: palevioletred;`}
`;

const Padding = styled.div`
    padding: 3%;
`
const SectionImage = styled(SquareImg)`  
`
const Text = styled.p`
`

const SectionLatestBody = styled.section`
    padding-bottom: 10%;

`

const BodyDiv = styled.div`
    width: 60%;
    margin: auto;
    padding-top: 10%;
    padding-bottom: 6%
`


const SectionLatestText = styled.article`
    display: inline;
    text-align: justify;
    
    & > ${Text} {
      display: inline;
      
    }

`    
const SectionImagePos = styled.div`
      float: left;
      margin: 1%;

`

const FooterPLeft = styled.p`
      width: 20%;
`

const FooterPRight = styled.p`
      width: 20%;
`

const Footer = styled.footer`
    ${media.desktop`
      width: 100%;
      height: 30%;
      background-color: black;
      color: white;
      bottom: 0;
      position: relative;
    `}
    
    ${media.tablet`
      width: 100%;
      height: 50%;
      background-color: black;
      color: white;
      bottom: 0;
      position: relative;
    `}

    ${media.phone`
      width: 100%;
      height: 40vh;
      background-color: black;
      color: white;
      bottom: 0;
      position: relative;`}
    

    & > ${FooterPLeft} {
        float: left
        width: 46%;
        display: inline-block;
        margin-bottom: 20px;
        padding: 2%;
        height: 30%;
        margin-left: 10%;
    }
    & > ${FooterPRight} {
        float: right;
        width: 46%;
        display: inline-block;
        margin-bottom: 20px;
        padding: 2%;
        margin-right: 10%;
        height: 30%;
  }
` 
const BodyBottom = styled.div`
      bottom: 0;
      font-family: Verdana, sans-serif;
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
          <SectionLatestBody><h2>Última publicação</h2>
                    <Content />
                    <SectionLatestText>
                      <SectionImagePos>
                      <SectionImage />
                      </SectionImagePos>
                      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
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
                      eros varius et. Donec et facilisis ligula.</Text>
                    </SectionLatestText>
            </SectionLatestBody>
            </BodyDiv>
          <Footer>
            <FooterPLeft>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            </FooterPLeft>
            <FooterPRight>
              Realizado no ambito de cenas e mais cenas para cenas cenadas onde cenaram  
            </FooterPRight>
          </Footer>

      </BodyBottom>
    )}
  />
  
)


export default Layout
