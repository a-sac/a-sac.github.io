import * as React from "react"

import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import SEO from '../seo/Seo'

import * as layoutStyles from './layout.module.css';


const IndexPage = (props) => {
  return (
    <>
      <SEO title="Home" />
      <Navbar/>
      <div className={ props.body }>
        <div className={ layoutStyles.content }>
          { props.children }
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default IndexPage
