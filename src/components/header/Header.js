import React from "react"
import Nav from "./Nav"
import Link from "next/link"
import Image from "next/image"
import cxs from "cxs"

export default function Header() {
  return (
    <header
      className={cxs({
        display: "flex",
        padding: "10px 5px",
        alignItems: "center",
      })}
    >
      <Link href="/">
        <Image
          alt="Lost Art Records logo with microphone"
          src="/images/logo-mic.png"
          width={124}
          height={55}
        />
      </Link>
      <div className={cxs({ flexGrow: 2 })}>
        <Nav />
      </div>
    </header>
  )
}
