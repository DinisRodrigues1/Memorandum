import React from "react"
import { Link, graphql } from "gatsby"
import Navigation from "../components/navigation_extra"
import SEO from "../components/seo"
import styled, { css } from "styled-components"

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

const Content = styled.div`
  height: 3em;
  width: 3em;
  background: papayawhip;

  /* Now we have our methods on media and can use them instead of raw queries */
  ${media.desktop`background: dodgerblue;`}
  ${media.tablet`background: mediumseagreen;`}
  ${media.phone`background: palevioletred;`}
`;

const OuterContainer = styled.div`
  font-family: Verdana, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  max-width: 100%;
  overflow-x: hidden;
  padding: 3% 0;
  width: 60%;
  margin: auto;
`

const PageTitle = styled.h2`
  margin-top: 15%;
  margin-bottom: 10%;
`

const PostLink = styled(Link)`
  text-decoration: none;
`

const PostContainer = styled.div`
  
  font-family: Verdana, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  
`
const PostList = styled.div`
  font-family: Verdana, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  color: black;
`

const PostTitle = styled.h1`
  margin-bottom: 5%;
  color: #000;
  text-shadow:
    -1px -1px 0 #fff,  
    1px -1px 0 #fff,
    -1px 1px 0 #fff,
    1px 1px 0 #fff;
`

const PostDate = styled.span`
  display: inline-block; 
  margin-bottom: 3%;`

const Historias = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
  <OuterContainer>
    <SEO title="Histórias" />
    <Navigation />
    <PageTitle><hr/>Histórias</PageTitle>
    <PostContainer>
      {postList.edges.map(({ node }, i) => (
        
        <PostLink to={node.fields.slug} className="link" >
        <PostList>
        <PostTitle>{node.frontmatter.title}</PostTitle>
        <PostDate>{node.frontmatter.date}</PostDate>
        <p>{node.excerpt}</p>
        </PostList>
        </PostLink>
    ))}
    </PostContainer>
    <Link to="/">Go back to the homepage</Link>
  </OuterContainer>
  )
}


export default Historias

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do, YYYY")
            title
          }
        }
      }
    }
  }
`