import React, { useState, useEffect, useRef } from "react"
import ReactHtmlParser from "react-html-parser"
import { isMobile } from "react-device-detect"
import Image from "next/image"
import Head from "next/head"
import { albumData } from "../../helpers/data"
import { Tooltip } from "react-tooltip"

export async function getStaticPaths() {
  const paths = albumData.map((album) => ({
    params: {
      id: album.path,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const props = albumData.find((album) => album.path === params.id)
  return { props }
}

export default function AlbumPage({
  purchase,
  description,
  tracklist,
  artist,
  title,
  cover,
  code,
  message,
  quote,
  quote_attribution,
  spotify,
  notes,
  video,
  links,
  disclaimer,
  additionalText,
  descriptionTitle,
}) {
  const [spotifyDimensions, setSpotifyDimensions] = useState({
    width: 300,
    height: 400,
  })
  const descriptionRef = useRef()
  const [showUsbModal, setShowUsbModal] = useState(false)

  useEffect(() => {
    setSpotifyDimensions({
      width: descriptionRef.current.offsetWidth * 0.8,
      height: isMobile
        ? 400
        : descriptionRef.current.offsetHeight > 500
        ? 500
        : descriptionRef.current.offsetHeight,
    })
  }, [description])

  return (
    <main className="album-page">
      <Head>
        <title>{`${artist} - ${title}`}</title>
      </Head>
      <div className="album-page-main row">
        <div className="col-sm-12 col-md-6">
          <Image
            className="album-page-cover"
            alt={`${title} cover`}
            width={500}
            height={500}
            layout="responsive"
            src={`/images/covers/${cover}`}
          />
        </div>
        <div className="title-purchase-container col-sm-12 col-md-6">
          {artist && (
            <h1 className="album-page-artist">{artist.toUpperCase()}</h1>
          )}
          <h2 className="album-page-title">{title}</h2>
          <p className="album-page-code">{code}</p>
          {disclaimer && <p className="album-page-disclaimer">{disclaimer}</p>}
          {additionalText && <p>{additionalText}</p>}
          <div className="album-page-purchase-container">
            <p className="album-page-purchase">Purchase</p>
            {purchase?.map((option, i) => (
              <form
                id={`paypal${i}`}
                target="paypal"
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                key={option.button_id}
                style={{ maxWidth: "400px" }}
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value={option.button_id}
                />
                <button
                  className={`purchase-button ${option.disabled && "disabled"}`}
                  style={{
                    borderColor: "black",
                    borderRadius: "4px",
                    borderStyle: "solid",
                    padding: "6px 12px",
                    margin: "4px 0",
                    minWidth: "160px",
                  }}
                  type="submit"
                  form={`paypal${i}`}
                  disabled={option.disabled}
                >
                  {`${option.format.toUpperCase()} - ${option.price}`}
                  {option.format === "USB MUSIC CARD" && (
                    <div style={{ marginTop: "10px" }}>
                      <p
                        style={{
                          textAlign: "left",
                          marginTop: "10px",
                          fontSize: "14px",
                        }}
                      >
                        A USB flash drive the size of a credit card. Each card
                        holds the album’s 50 tracks in MP3 and WAV formats.
                      </p>
                      <Image
                        alt="credit card-sized graphic of album art"
                        src="/images/outhouse-complete-usb.jpg"
                        height={140}
                        width={216}
                        style={{
                          boxShadow: "-2px 2px 6px 0px rgba(0, 0, 0, 0.4)",
                          marginBottom: "10px",
                        }}
                      />
                    </div>
                  )}
                </button>
              </form>
            ))}
          </div>
          {links && (
            <div className="album-page-links-container">
              {links.map((link) => (
                <a
                  key={link.href}
                  className="album-page-link"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              ))}
            </div>
          )}
          <p className="message">{message}</p>
          {quote ? (
            <div className="quote-container">
              <p className="quote">{quote}</p>
              <p className="quote-attribution">{quote_attribution}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="album-page-description-tracklist-container row">
        <div
          ref={descriptionRef}
          className={`album-page-description-container ${
            spotify || tracklist ? "col-sm-6" : ""
          }`}
        >
          {descriptionTitle && (
            <div style={{ textAlign: "center" }}>
              <h3 className="description-title">{descriptionTitle}</h3>
            </div>
          )}
          {description.map((paragraph, i) => (
            <p key={i} className="album-page-description">
              {paragraph}
            </p>
          ))}
          <div className="notes-container">
            {Array.isArray(notes) ? (
              notes.map((note) => (
                <p key={note} className="note">
                  {note}
                </p>
              ))
            ) : (
              <p className="note">{notes}</p>
            )}
          </div>
        </div>
        {spotify ? (
          <div className="album-page-spotify col-sm-6">
            <iframe
              title="spotify"
              src={`https://open.spotify.com/embed/album/${spotify}`}
              width={spotifyDimensions.width}
              height={spotifyDimensions.height}
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        ) : tracklist ? (
          <div className="album-page-tracklist-container col-sm-6">
            <div className="album-page-tracklist-title-container">
              <h5 className="album-page-tracklist-title">tracklist</h5>
            </div>
            <ol className="album-page-tracklist">
              {tracklist.map((trackName, i) => (
                <li key={i} className="album-page-track">
                  {trackName}
                </li>
              ))}
            </ol>
          </div>
        ) : (
          ""
        )}
      </div>
      {video ? (
        <div className="album-page-video-container">
          {ReactHtmlParser(video)}
        </div>
      ) : (
        ""
      )}
    </main>
  )
}
