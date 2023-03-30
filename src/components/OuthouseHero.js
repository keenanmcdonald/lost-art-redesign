import React from "react"
import Link from "next/link"
import Image from "next/image"

function Hero() {
  return (
    <Link
      component="section"
      className="row outhouse-hero-container"
      href="/album/austinouthouse"
    >
      <div className="col-5 hero-photo-container">
        <Image
          className="blaze-photo"
          alt="blaze in profile"
          src="/images/foley.jpg"
          width={310}
          height={500}
        />
        <Image
          className="blaze-photo-slim"
          alt="blaze in profile"
          src="/images/foley-slim.jpg"
          width={198}
          height={500}
        />
      </div>
      <div className="col-5">
        <div className="hero-text">
          <h1 className="hero-artist">blaze foley</h1>
          <h2 className="hero-title">live at the austin outhouse</h2>
          <h3 className="hero-subtitle">
            available on vinyl for the first time
          </h3>
        </div>
      </div>
    </Link>
  )
}

export default Hero
