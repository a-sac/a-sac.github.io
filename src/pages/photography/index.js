import React from 'react';
import { useState } from "react";
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Lightbox from 'react-awesome-lightbox';

import Layout from '../../components/layout/Layout'

import * as photographyStyles from './photography.module.css';
import 'react-awesome-lightbox/build/style.css';

const Photography = () => {
  const [cardViewIsActive, setCardViewIsActive] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState('');

  const query = useStaticQuery(graphql`
    {
      allFile(filter: {relativeDirectory: {eq: "photography"}}) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 1500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const openCardView = (e, url) => {    
    e.preventDefault();

    setCardViewIsActive(true);
    setSelectedUrl(url);
  };

  const closeModal = (e) => {
    e.preventDefault();

    setCardViewIsActive(false);
    setSelectedUrl('');
  };

  return (
    <Layout body={ photographyStyles.body }>
      <div className={ photographyStyles.container }>
        { cardViewIsActive ? <Lightbox image={ selectedUrl } title="by Sérgio Costa" onClose={ (e) => closeModal(e) } allowRotate={ false }/> : <></>}
        {
          query.allFile.edges.map((img, index) => {
            return (
              <div key={ index } className={ photographyStyles.cell } onClick={(e) => openCardView(e, img.node.childImageSharp.fluid.src)}>
                <Img fluid={ img.node.childImageSharp.fluid } className={ photographyStyles.img }/>
              </div>
            )
          })
        }
      </div>
    </Layout>
  );
};

export default Photography;
