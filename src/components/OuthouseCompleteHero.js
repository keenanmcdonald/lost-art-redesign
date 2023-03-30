import React from "react"
import Link from "next/link"
import Image from "next/image"

function Hero() {
  return (
    <Link
      component="section"
      style={{
        height: 600,
      }}
      href="/album/austinouthouse"
    >
      <div
        style={{
          position: "relative",
          height: 600,
          overflow: "hidden",
          borderRadius: "4px",
        }}
      >
        <Image
          className="blaze-photo"
          alt="blaze in profile"
          src="/images/outhouse-complete-wide.jpg"
          fill
          style={{ objectFit: "cover", objectPosition: "right" }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            zIndex: 2,
            height: 600,
            width: 400,
            background: "#2D2E22",
            opacity: "80%",
          }}
        ></div>
      </div>
    </Link>
  )
}

export default Hero
