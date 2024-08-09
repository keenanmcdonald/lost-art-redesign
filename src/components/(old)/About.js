import React from "react"

function About(props) {
  const paragraphs = []

  for (let i = 0; i < props.text.length; i++) {
    paragraphs.push(
      <p key={i} className="about-paragraph">
        {props.text[i]}
      </p>
    )
  }

  return (
    <section id="about">
      <div className="section-title-container">
        <h3>Lost Art Records: Home of Blaze Foley</h3>
      </div>
      <div className="about-text-body">{paragraphs}</div>
    </section>
  )
}

export default About
