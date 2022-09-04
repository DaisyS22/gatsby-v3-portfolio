import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaLongArrowAltRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiEducation(sort: { fields: date, order: DESC }) {
      nodes {
        level
        date
        desc {
          id
          name
        }
        school
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiEducation: { nodes: educations },
  } = data
  const [value, setValue] = React.useState(0)
  const { school, level, date, desc } = educations[value]
  return (
    <section className="section jobs">
      <Title title="Educational Background"></Title>
      <div className="jobs-center">
        {}
        <div className="btn-container">
          {educations.map((item, index) => {
            return (
              <button
                key={index}
                className={index === value ? "job-btn active-btn" : "job-btn"}
                onClick={() => setValue(index)}
              >
                {item.level}
              </button>
            )
          })}
        </div>

        <article className="job-info">
          <h3>{school}</h3>
          <h4>{level}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
