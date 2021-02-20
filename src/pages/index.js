import * as React from "react"

import Card from '../components/card/Card'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import SEO from '../components/seo/Seo'

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Header/>
      <Card/>
      <Footer/>
    </>
  )
}

export default IndexPage
