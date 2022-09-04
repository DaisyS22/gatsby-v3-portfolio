import React from "react"
import Title from "./Title"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import "../assets/css/skills.css"

import { motion } from "framer-motion"

export const query = graphql`
  {
    allStrapiExperience {
      nodes {
        company
        date
        desc {
          id
          name
        }
        position
      }
    }
  }
`

const Experiences = () => {
  const data = useStaticQuery(query)
  const experiences = data.allStrapiExperience.nodes

  return (
    <div className="app__skills-exp">
      {experiences.map(experience => (
        <motion.div className="app__skills-exp-item" key={experience.date}>
          <div className="app__skills-exp-year">
            <h4 className="bold-text">{experience.date}</h4>
          </div>
          <div className="app__skills-exp-works">
            <div className="app__skills-exp-work">
              <h4 className="bold-text">{experience.position}</h4>
              <p className="p-text">{experience.company}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Experiences
