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
            <a href={`mailto:music@lostartrecords.com`} target="_blank">
              music@lostartrecords.com
            </a>
          </li>
          <li className="phone">512-923-1733</li>
          <li className="address">1102 Live Oak Ridge, Austin, TX, 78746</li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
