import React from "react"
import { Link } from "gatsby"
import Seminaire from "../videos/seminaire.mp4"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { distribute } from "gsap/gsap-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import {StyledBtnRed} from './banner'
import {StyledContainer} from './header'

const Oculaire = () => {
    const data = useStaticQuery(graphql`
    query {
        firstpro: file(relativePath: { eq: "seminaire1.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        secondpro: file(relativePath: { eq: "seminaire2.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        thirdpro: file(relativePath: { eq: "seminaire3.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        forthpro: file(relativePath: { eq: "seminaire4.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`)
    return (
        <div className="prj">
            <StyledContainer>
                <div className="prj-content">
                  <video
                    muted
                    autoPlay
                    loop
                  >
                    <source
                      src={Seminaire}
                      type="video/mp4"
                    />
                  </video>
                  <div className="prj-imgs emchi">
                    <Img fluid={data.firstpro.childImageSharp.fluid} />
                    <Img fluid={data.secondpro.childImageSharp.fluid} />
                    <Img fluid={data.thirdpro.childImageSharp.fluid} />
                    <Img fluid={data.forthpro.childImageSharp.fluid} />
                  </div>
                  <div className="prj-more">
                    <div className="prj-desc">
                        <div className="prj-title">
                         <h1>Naissance Oculaire</h1>
                         <span>2020</span>
                        </div>
                        <p>Animation Video</p>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                        It has survived not only five centuries, but
                        also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised
                        in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently
                        with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.
                    </p>
                  </div>
                </div>
                <StyledBtnRed className="btnbottom">
                  <Link className="linkto" to="/work-page">All Work  <FontAwesomeIcon className="icon" icon="angle-right" /></Link>
                </StyledBtnRed>
            </StyledContainer>
        </div>
    )
}
export default Oculaire
