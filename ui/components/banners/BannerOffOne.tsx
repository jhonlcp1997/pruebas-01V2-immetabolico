
interface propsBanner {
  idOfferEvent: number;
  typeOffer: string;
  percentDiscount: string;
  rootPage: string;
  descriptionOffer?: string;
}

export const BannerOffOne = ({
  idOfferEvent,
  typeOffer,
  rootPage,
  percentDiscount,
  descriptionOffer
}: propsBanner) => {

  return (
    <>
      <section className="bannerOffer">
        <div className="content">
          <article className="bannerOffer__box">
            <h3>{typeOffer}</h3>
            <h2>{percentDiscount}</h2>
            {descriptionOffer &&
              <p>{descriptionOffer}</p>
            }
            {rootPage === 'index' ?
              <div className="content-button">
                <a href="#" className="button">Comprar ahora</a>
              </div>
              :
              <div className="content-info">
                <strong className="content-info__eventOffer">{descriptionOffer}</strong>
              </div>
            }

          </article>
        </div>
      </section>
    </>
  )
}
