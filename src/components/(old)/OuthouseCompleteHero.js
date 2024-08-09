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
      href="/album/outhouse-complete"
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
        <Image
          className="blaze-photo-slim"
          alt="blaze in profile"
          src="/images/outhouse-complete-tall.jpg"
          fill
          style={{ objectFit: "cover", objectPosition: "right" }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            zIndex: 2,
            height: 600,
            width: 360,
            backgroundColor: "rgba(45, 46, 34, 0.8)",
            textAlign: "center",
          }}
        >
          <p
            className="futura"
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 120,
              lineHeight: "100px",
              marginTop: "40px",
            }}
          >
            BLAZE FOLEY
          </p>
          <div
            style={{
              width: "80%",
              backgroundColor: "white",
              height: "2px",
              margin: "30px auto 22px auto",
            }}
          />
          <p
            className="clarendon"
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 28,
              marginBottom: 0,
              lineHeight: "30px",
            }}
          >
            THE COMPLETE
          </p>
          <p
            className="clarendon"
            style={{
              color: "#FAED1F",
              textAlign: "center",
              fontSize: 50,
              marginBottom: 0,
              lineHeight: "50px",
            }}
          >
            OUTHOUSE
          </p>
          <p
            className="clarendon"
            style={{
              color: "#FAED1F",
              textAlign: "center",
              fontSize: 56,
              marginBottom: "50px",
              lineHeight: "50px",
            }}
          >
            SESSIONS
          </p>
          <p
            className="futura"
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 60,
              marginBottom: 0,
              lineHeight: "50px",
            }}
          >
            Available Now
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Hero
