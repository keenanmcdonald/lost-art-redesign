import React from "react"
import Image from "next/image"

export default function AboutBlaze(props) {
  return (
    <section id="about">
      <div className="section-title-container">
        <h3>Lost Art Records: Home of Blaze Foley</h3>
      </div>
      <div className="about-text-body">
        <Image
          style={{ float: "right", margin: "0 20px 20px 20px" }}
          alt="photo of blaze"
          height={394}
          width={300}
          src="/images/blaze-et-hat.jpg"
        />

        <p className="about-paragraph">
          Blaze Foley existed largely in the form of colorful folklore in 1990’s
          Austin. Beyond the remembrances of his small cadre of fellow travelers
          Blaze was hard to find. A reference in a tribute song, a mention in a
          Townes story, but little more. No LPs or CDs could be found in the
          record stores. Certainly nothing playing on the radio.
        </p>
        <p className="about-paragraph">
          To hear Blaze required buying a cassette from his running buddy, Lost
          John Casner who had recorded Blaze’s two-night stand at the Austin
          Outhouse in December 1988. On February 1, 1989, fate would whisk Blaze
          from the world leaving Lost John to finish the Outhouse project alone.
          For years John single-handedly carried Blaze’s legacy by retailing the
          cassette out of his trunk around Austin’s clubs.
        </p>
        <p className="about-paragraph">
          Anyone who has heard the Outhouse recordings would agree they deserved
          to be shared. With absolutely no experience in the record business
          Lost Art’s principals, Tom Tobin and Craig McDonald offered to work
          with John to get the recordings onto CD and more widely distributed.
          Lost Art released the Live at the Austin Outhouse CD in November 1999.
          Twelve of the 22 songs John and Blaze had recorded at the club eleven
          years earlier were included. Lost Art Records was born and Blaze had a
          home label.
        </p>
        <p className="about-paragraph">
          The Outhouse CD helped spark new interest in Blaze. Since releasing
          Live at the Austin Outhouse, Lost Art has curated and released five
          additional Blaze albums. Lost Art’s catalog includes a compilation of
          recordings from Bill Neely, one of Austin’s earliest
          singer-songwriters. Lost Art is the primary distributor of Kevin
          Triplett’s acclaimed documentary film, Duct Tape Messiah, and the sole
          U.S. distributor of the book by Carmen and Kai Nees, Blaze Foley: From
          Misfit To Legend.
        </p>
      </div>
    </section>
  )
}
