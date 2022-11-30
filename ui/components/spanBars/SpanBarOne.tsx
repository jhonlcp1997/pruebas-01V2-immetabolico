import React from 'react'

export const SpanBarOne = () => {
  return (
    <>
      <section className="spanBar">
        <div className="article">
          <div className="article__one">
            <h2 className="subtitle">10</h2>
            <div className="content">
              <h4>años</h4>
              <p>en el sector</p>
            </div>
          </div>

          <div className="article__two">
            <div className="article__two__stars">
              <h3>
                <div className="fas fa-star"></div>
                <div className="fas fa-star"></div>
                <div className="fas fa-star"></div>
                <div className="fas fa-star"></div>
                <div className="fas fa-star"></div>
              </h3>
              <p>calidad demostrada</p>
            </div>
            <div className="content-button">
              <a href="#" className="button">
                ver info
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
