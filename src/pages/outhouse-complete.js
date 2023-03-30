import Image from "next/image"

export function getStaticProps() {
  return {
    props: { noHeader: true },
  }
}

export default function OuthouseComplete() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "0",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          style={{ zIndex: "-1", filter: "brightness(30%)" }}
          alt="a collage of photos of Blaze"
          src="/images/blaze-at-outhouse.jpg"
          fill
          objectFit="cover"
          objectPosition="center"
        />
        {/* <iframe
          style={{
            borderRadius: "12px",
            bottom: 8,
            left: 10,
            position: "absolute",
          }}
          src="https://open.spotify.com/embed/album/20jfTvbCUwJjOAhPkeIv61?utm_source=generator&theme=0"
          height="80"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe> */}
        <iframe
          style={{
            border: 0,
            width: "200px",
            height: "200px",
            bottom: 8,
            left: 10,
            position: "absolute",
          }}
          src="https://bandcamp.com/EmbeddedPlayer/album=3399252286/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/"
          seamless
          loading="lazy"
        >
          <a href="https://townesvanzandt.bandcamp.com/album/townes-van-zandt">
            Townes Van Zandt by Townes Van Zandt
          </a>
        </iframe>
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          <p
            style={{
              color: "white",
              textAlign: "center",
              padding: "0 12px",
              fontSize: "28px",
              marginTop: "12%",
            }}
          >
            Blaze Foley’s complete legendary 2-night performance at the Austin
            Outhouse is available from Lost Art Records. John Casner’s original
            start-to-finish 1988 recordings, nearly four hours in length, are
            remastered here and presented in their original sequence. The
            Complete Outhouse Sessions include fifty tracks and is available
            from most digital and streaming platforms and on USB flash drive
            from Lost Art.
          </p>
        </div>
      </div>
      <div style={{ height: "100vh" }} />
    </>
  )
}
