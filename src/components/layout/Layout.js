import * as React from "react"

import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import SEO from '../seo/Seo'

const IndexPage = ({ children }) => {
  return (
    <>
      <SEO title="Home" />
      <Navbar/>
      <div className="content">
        { children }
      </div>
      <Footer/>
    </>
  )
}

export default IndexPage
