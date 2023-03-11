import React from "react"
import Link from "next/link"
import Image from "next/image"

function Album(props) {
  return (
    <div
      style={{ padding: "10px", textAlign: "center", marginTop: "14px" }}
      className="col-6 col-lg-4"
    >
      <Link href={`/album/${props.path}`}>
        <Image
          className={`cover ${props.noShadow ? "no-shadow " : ""} ${
            props.tall ? "tall" : ""
          }`}
          alt={`${props.title} cover`}
          width={344}
          height={344}
          src={`/images/covers/${props.cover}`}
        />
        <div className="album-text-container">
          <h4 className="artist">{props.artist}</h4>
          <h4 className="title">{props.title}</h4>
        </div>
      </Link>
    </div>
  )
}

export default Album
