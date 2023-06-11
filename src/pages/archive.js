import NextLink from "next/link"
import Image from "next/image"

const styles = {
  container: { minHeight: "calc(100vh - 200px)" },
  link: {
    display: "block",
    marginBottom: 12,
    display: "flex",
    alignItems: "center",
    color: "black",
    fontSize: 18,
  },
  linkIcon: {
    marginRight: 6,
  },
  linkSection: { marginLeft: 20, marginTop: 20 },
}

export default function Links(props) {
  return (
    <section style={styles.container}>
      <div className="section-title-container">
        <h3>Archive / Links</h3>
      </div>
      <div style={styles.linkSection}>
        <Link href="/the-outhouse-cds.pdf">
          {
            'The Outhouse CDs: "Live at the Austin Outhouse" and "Oval Room" by Lost John Casner'
          }
        </Link>
        <Link href="/recording-blaze-at-the-outhouse.pdf">
          {
            "Recording Blaze at the Outhouse: Live at the Austin Outhouse (... and not there) by Lost John Casner"
          }
        </Link>
      </div>
    </section>
  )
}

export function Link({ href, children }) {
  return (
    <NextLink href={href} style={styles.link}>
      <Image
        src="/images/link-icon.png"
        alt="link icon"
        width={18}
        height={18}
        style={styles.linkIcon}
      />
      {children}
    </NextLink>
  )
}
