import React from "react"
import Title from "./Title"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaAngleDoubleRight, FaLongArrowAltRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import "../assets/css/skills.css"
import { motion } from "framer-motion"
import Experiences from "./Experiences"

export const query = graphql`
  {
    allStrapiSkill {
      nodes {
        title
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

const Skills = ({ experiences }) => {
  const data = useStaticQuery(query)
  const skills = data.allStrapiSkill.nodes

  return (
    <section className="section bg-grey">
      <Title title="skills and experience"></Title>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map(skill => {
            const { title, image } = skill

            return (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.title}
              >
                <div className="background-border">
                  <GatsbyImage
                    image={getImage(image.localFile)}
                    className="skills-img hover"
                    alt={title}
                  ></GatsbyImage>
                </div>
                <p className="skill-text bold-text">{skill.title}</p>
              </motion.div>
            )
          })}
        </motion.div>
        <Experiences />

        {/* <motion.div className="app__skills-experience">
          {experiences.map(experience => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-experience-item"
              key={experience.date}
            >
              <div className="app__skills-experience-year">
                <p className="bold-text">{experience.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  )
}

export default Skills
