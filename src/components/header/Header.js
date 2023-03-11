import React from "react"
import Nav from "./Nav"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <Image
          alt="Lost Art Records logo with microphone"
          src="/images/logo-mic.png"
          width={124}
          height={55}
        />
      </Link>
      <div className="nav-container">
        <Nav />
      </div>
    </header>
  )
}
