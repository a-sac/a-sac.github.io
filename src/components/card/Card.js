import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import * as cardStyles from './card.module.css';

const Card = () => {
  const query = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: {eq: "img.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={ cardStyles.container }>
      <div>
        <Img fluid={ query.image.childImageSharp.fluid } className={ cardStyles.img } />
      </div>
      <div className={ cardStyles.about }>
        <h5 className={ cardStyles.h5 }>
          Hi, I'm Sérgio Costa!
        </h5>
        <h6 className={ cardStyles.h6 }>
            Product Manager <a className={ cardStyles.link } href="https://nutrium.com/en" target="_blank">@nutrium</a>. 🚀
            <br/>
            Ready to learn about any topic 🤓.
            <br/>
            Loves 🍻, ☕ and, clearly, emojis.
        </h6>
      </div>
      <div className={ cardStyles.hey }>
        <span role="img" aria-label="nerd">👋</span>
      </div>
    </div>
  );
};

export default Card;
