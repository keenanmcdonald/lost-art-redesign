import Image from "next/image"
import Link from "next/link"

export default function AwayBanner() {
  return (
    <div
      className="away-banner"
      style={{ display: "flex", alignItems: "center" }}
    >
      <div>
        <Image
          alt="a drawing by Blaze Foley of a duck driving a car"
          src="/images/duck-drawing.jpeg"
          width={300}
          height={200}
          style={{
            borderRadius: "10px",
            marginRight: "40px",
          }}
        />
        <p style={{ fontSize: "12px", marginTop: "4px" }}>
          &quot;Duck Car (Facing Left)&quot; By Ezalb Yelof (Blaze Foley)
        </p>
      </div>
      <div>
        <p style={{ fontSize: "22px", fontWeight: "bold" }}>
          We&rsquo;re on the road!
        </p>
        <p style={{ fontSize: "18px" }}>
          All Orders are suspended until November 18th when we return. In the
          meantime, check out our catalog on{" "}
          <Link href="https://lostartrecords.bandcamp.com/">Bandcamp</Link> or
          if you want to order a physical album,{" "}
          <Link href="https://endofanear.com">End of an Ear Records</Link> may
          have what you&rsquo;re looking for.
        </p>
      </div>
    </div>
  )
}
