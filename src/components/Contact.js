import React from "react"
import Image from "next/image"

function Contact(props) {
  return (
    <section id="contact">
      <div className="section-title-container">
        <Image
          width={180}
          height={83}
          className="contact-background-logo"
          alt="lost art logo"
          src="/images/logo-mic.png"
        />
        <ul className="contact-info">
          <li className="email">
            <a href={`mailto:music@lostartrecords.com`}>
              music@lostartrecords.com
            </a>
          </li>
          <li className="address">Austin, TX</li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
