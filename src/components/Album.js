import React from "react"
import Link from "next/link"
import Image from "next/image"

function Album(props) {
  return (
    <div
      style={{ textAlign: "center", marginTop: "14px" }}
      className="album-container col-6 col-lg-4"
    >
      <Link
        href={`/album/${props.path}`}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div
          style={{
            padding: "10px",
            flexGrow: "2",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            className={`cover ${props.noShadow ? "no-shadow " : ""} ${
              props.tall ? "tall" : ""
            }`}
            alt={`${props.title} cover`}
            width={300}
            height={300}
            layout="responsive"
            src={`/images/covers/${props.cover}`}
          />
        </div>
        <div className="album-text-container" style={{ minHeight: "74px" }}>
          <p className="artist">{props.artist}</p>
          <p className="title">{props.title}</p>
        </div>
      </Link>
    </div>
  )
}

export default Album
