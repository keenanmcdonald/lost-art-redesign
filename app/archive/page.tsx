import NextLink from "next/link"
import Image from "next/image"

const styles = {
  container: { minHeight: "calc(100vh - 200px)" },
  link: {
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

const BASE_URL = `https://${process.env.VERCEL_URL}` || 'http://localhost:3000'

export default async function Archive() {
  let archive: any = []
  try {
    const response = await fetch(BASE_URL + '/api/archive')
    console.log(response.status)
    const data = await response.json()
    console.log(data)
    archive = data.archive
  } catch(e) {
    console.error(e)
  }

  return (
    <section style={styles.container}>
      <div className="section-title-container">
        <h3>Archive / Links</h3>
      </div>
      <div style={styles.linkSection}>
        {archive.map((item) => {
          if (item.blockType === 'link') {
            return (
              <Link key={item.id} href={item.url}>
                {item.title}
              </Link>
            )  
          }
        })}
      </div>
    </section>
  )
}

function Link({ href, children }) {
  return (
    <NextLink href={href} style={styles.link} rel="noopener noreferrer" target="_blank">
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
