import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { FixedScreenWrapper, Image } from "./index.css"
import { useDarkMode } from "../../contexts/DarkModeContext"

const BackgroundDots = ({ className, imageFluidData, darkMode }) => {
  return (
    <FixedScreenWrapper className={className}>
      <Image fluid={imageFluidData} darkMode={darkMode} />
    </FixedScreenWrapper>
  )
}

BackgroundDots.propTypes = {
  className: PropTypes.string,
  darkMode: PropTypes.bool,
  imageFluidData: PropTypes.object.isRequired
}
BackgroundDots.defaultProps = {
  darkMode: false
}


const BackgroundDotsContainer = ({ ...props }) => {
  const { isDarkMode } = useDarkMode()
  const data = useStaticQuery(graphql`
    query {
      bgImg: file(relativePath: { eq: "bg-dots.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundDots
      {...props}
      darkMode={isDarkMode}
      imageFluidData={data.bgImg.childImageSharp.fluid}
    />
  )
}


export default BackgroundDotsContainer
