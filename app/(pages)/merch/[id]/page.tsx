import React from "react"
import Image from "next/image"
import { getPayloadClient } from "../../../../payload/payloadClient"

export async function generateStaticParams() {
    const payload = await getPayloadClient()
    const {docs} = await payload.find({collection: 'merch'})

    return docs.map((doc) => ({
        slug: doc.id,
      }))
  }
  

export default async function Merch({ params }: { params: { id: string } }) {
    const payload = await getPayloadClient()

    const data = await payload.findByID({collection: 'merch', id: params.id})
    console.log(data)
    return (
      <section className="album-page">
          <Image
            className="merch-page-image no-shadow"
            alt={data.name}
            width={500}
            height={500}
            layout="responsive"
            src={data.image?.url}
          />

        {/* <div className="merch-page-main row">
          <div className="col-sm-12 col-md-6">
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
        <p className="notes">{notes}</p> */}
      </section>
    )
}
