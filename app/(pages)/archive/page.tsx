import NextLink from "next/link"
import Image from "next/image"
import { getPayloadClient } from "../../../payload/payloadClient";


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

export default async function Links() {
    const payload = await getPayloadClient()

    const {docs: links} = await payload.find({collection: 'links'})

    return (
        <section style={styles.container}>
        <div className="section-title-container">
            <h3>Archive / Links</h3>
        </div>
        <div style={styles.linkSection}>
            {links.map((link) => {
                return <Link key={link.id} href={link.href}>{link.title}</Link>
            })}
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
