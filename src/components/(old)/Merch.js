import React from "react"
import Album from "./Album"

export default function Merch({ merch }) {
  return (
    <section id="merch">
      <div className="section-title-container">
        <h3>Merch</h3>
      </div>
      <div className="albums row no-gutters">
        {merch &&
          merch.map((product, i) => (
            <Album
              baseRoute={"/merch"}
              noShadow={product.no_shadow}
              key={i}
              cover={product.image}
              {...product}
            />
          ))}
      </div>
    </section>
  )
}
