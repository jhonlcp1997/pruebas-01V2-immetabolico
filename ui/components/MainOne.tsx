import Script from 'next/script'
import React from 'react'

export const MainOne = () => {
  return (
    <>
      <main className="main">
        <section className="main__carrusel">
          <div className="carrusel">
            <article className="article_carrusel open">
              <div className="article_carrusel__content">
                <h3 className="subtitle">Subtitle largo corto y medía plazo</h3>
                <p className="paragraph"><span>T</span>orem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, optio
                  alias? Non tenetur odit repellat delectus odio. Hic pariatur officia fugiat! Eos alias, quaerat itaque
                  quae impedit qui
                  ratione incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam commodi labore eligendi
                  corrupti maiores disti</p>
                <div className="content-button">
                  <a className="button" href="#">ver mas..</a>
                </div>
              </div>
              <div className="article_carrusel__graphics">
                <img src="../../image/endo-f3.svg" alt="" />
              </div>
            </article>
            <article className="article_carrusel">
              <div className="article_carrusel__content">
                <h3 className="subtitle">Subtitle plazo</h3>
                <p className="paragraph">
                  <span>L</span>orem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, optio alias? Non tenetur
                  odit repellat delectus odio. Hic pariatur officia fugiat! Eos alias, quaerat itaque quae impedit qui
                  ratione incidunt.corrupti maiores distinctio sint fuga voluptate odit earum, officia quidem nihil ducimus
                  blanditiis incidunt
                  nam perferendis voluptates ratione.
                </p>
                <div className="content-button">
                  <a className="button" href="#">ver mas..</a>
                </div>
              </div>
              <div className="article_carrusel__graphics">
                <img src="./image/endo-f3.svg" alt="" />
              </div>
            </article>
            <article className="article_carrusel">
              <div className="article_carrusel__content">
                <h3 className="subtitle">Subtitle semilargo</h3>
                <p className="paragraph"><span>S</span>orem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, optio
                  alias? Non
                  tenetur odit repellatratione.</p>
                <div className="content-button">
                  <a className="button" href="#">ver mas..</a>
                </div>
              </div>
              <div className="article_carrusel__graphics">
                <img src="../../image/endo-f3.svg" alt="" />
              </div>
            </article>
          </div>
        </section>

        <div className="main__points">
          <div className="list_points">
            <div className="point open"></div>
            <div className="point"></div>
            <div className="point"></div>
          </div>
        </div>
      </main>
      <Script src="./javascript/carrusel.js" />
    </>
  )
}
