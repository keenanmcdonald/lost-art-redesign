import React from "react"
import "../css/AlbumPage.css"
import Image from "next/image"

export default function MerchProductPage(props) {
  const { purchase, description, title, image, notes, no_shadow } = props

  return (
    <section className="album-page">
      <div className="merch-page-main row">
        <div className="col-sm-12 col-md-6">
          <Image
            className={`merch-page-image ${no_shadow ? "no-shadow" : ""}`}
            alt={`${title}`}
            src={`/images/covers/${image}`}
          />
        </div>
        <div className="title-purchase-container col-sm-12 col-md-6">
          <h1 className="album-page-artist">{title}</h1>
          <h2 className="album-page-title">{purchase.price}</h2>
          <div className="album-page-description-container">
            {description.map((paragraph, i) => (
              <p key={i} className="album-page-description">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="album-page-purchase-container">
            {purchase.type === "dropdown" ? (
              <form
                id={`paypal`}
                target="paypal"
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value={purchase.button_id}
                />
                <input type="hidden" name="on0" value="size" />
                <select className="merch-option-dropdown" name="os0">
                  {purchase.options.map((option, i) => (
                    <option key={i} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
                <div className="purchase-button-container">
                  <button
                    type="submit"
                    form={`paypal`}
                    className={`merch-page-purchase-button`}
                  >
                    Proceed to Purchase
                  </button>
                </div>
              </form>
            ) : (
              <form
                id={`paypal`}
                target="paypal"
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value={purchase.button_id}
                />
                <div className="purchase-button-container">
                  <button
                    type="submit"
                    form={`paypal`}
                    className={`merch-page-purchase-button`}
                  >
                    Proceed to Purchase
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <p className="notes">{notes}</p>
    </section>
  )
}
