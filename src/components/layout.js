/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import squareImg from './squareImg'
import Navigation from "./navigation"
import styled from "styled-components"
import "./layout.css"


const Padding = styled.div`
    padding: 3%
`

const SectionLatestBody = styled.section`
    padding-bottom: 10%
    
`
const BodyDiv = styled.div`
    width: 60%;
    margin: auto;
    padding-top: 10%;
    padding-bottom: 6%
`
const AlignImageLeft = styled.div`
    width: 100%;
    height: 20%;
    text-align: left;
    float: left;
    
`

const SectionLatestText = styled.article`
    width: 100%;
    height: 40%;
    text-align: justify;
`  

const FooterPLeft = styled.p`
    
`

const FooterPRight = styled.p`
    
`

const Footer = styled.footer`
    width: 100%;
    height: 40%;
    background-color: black;
    color: white;
    bottom: 0;

    & > ${FooterPLeft} {
        float: left
        width: 46%;
        display: inline-block;
        margin-bottom: 20px;
        padding: 2%;
        height: 30%;
    }
    & > ${FooterPRight} {
        float: right;
        width: 46%;
        display: inline-block;
        margin-bottom: 20px;
        padding: 2%;
        height: 30%;
  }
` 


const Layout = ({ children }) => (
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
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Padding></Padding>
        <Navigation />
        <BodyDiv>
          <SectionLatestBody><h2>Última publicação</h2>
                <AlignImageLeft>
                    <squareImg/>
                </AlignImageLeft>
                    <SectionLatestText>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
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
                      eros varius et. Donec et facilisis ligula.</p>
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
              Realizado no ambito de cenas e mais cenas para cenas cenadas
            </FooterPRight>
          </Footer>
      </div>
    )}
  />
  
)


export default Layout
