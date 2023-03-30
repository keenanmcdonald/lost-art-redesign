import React from "react"
import OuthouseHero from "../components/OuthouseHero"
import OuthouseCompleteHero from "../components/OuthouseCompleteHero"
import Albums from "../components/Albums"
import Merch from "../components/Merch"
import About from "../components/About"
import Head from "next/head"
import { albumData, merchData } from "../helpers/data"

export default function Homepage(props) {
  return (
    <main>
      <Head>
        <title>Lost Art Records</title>
      </Head>

      <OuthouseCompleteHero />
      <Albums albums={albumData} />
      <Merch merch={merchData} />
    </main>
  )
}
