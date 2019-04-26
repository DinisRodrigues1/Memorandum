import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

/* Encontrar lógica para video player */ 
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Projeto`, `Universitário`, `Memorandum`, `Universidade de Aveiro`, `Departamento de Comunicação e Arte`, 
    `DECA`, `Novas Tecnologias da Comunicação`, `NTC`, `UC Projeto`]} />
    <h1>Hi people</h1> 
    <p>Welcome to your new Gatsby site.</p>
    <p>Changing.</p>
    <Link to="/videos/">Go to page 2</Link>
  </Layout>
)


export default IndexPage
