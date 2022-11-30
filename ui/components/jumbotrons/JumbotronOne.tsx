import React from 'react'

export const JumbotronOne = () => {
  return (
    <>
      <section className="info-jumbotrons">
        <h2 className="subtitle">Nuestros productos</h2>
        <div className="info-jumbotrons__box">
          <article className="jumbotronsArticle main">
            <img className="img" src="../../image/election-egi_emi/sangre-1.svg" alt="" />
            <div className="article__content">
              <h3>Título del Producto</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas laudantium eum corporis repellat
                dolorum, minus vero, doloribus id quasi enim cum autem molestias nihil hic modi ipsam harum saepe
                temporibus.</p>
              <div className="content-button">
                <a className="button" href="#">ver mas..</a>
              </div>
            </div>
          </article>
          <div className="sectionMiniJumbos">
            <article className="jumbotronsArticle">
              <img className="img" src="../../image/election-egi_emi/sangre-7.svg" alt="" />
              <div className="article__content">
                <h3>Título del Producto</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas laudantium eum corporis repellat
                  dolorum, minus vero, doloribus id quasi enim cum autem molestias nihil hic modi ipsam harum saepe
                  temporibus.</p>
                <div className="content-button">
                  <a className="button" href="#">ver mas..</a>
                </div>
              </div>
            </article>
            <article className="jumbotronsArticle">
              <img className="img" src="../../image/election-egi_emi/sangre-7.svg" alt="" />
              <div className="article__content">
                <h3>Título del Producto</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas laudantium eum corporis repellat
                  dolorum, minucum autem molestias nihil hic modi ipsam harum saepe temporibus.</p>
                <div className="content-button">
                  <a className="button" href="#">ver mas..</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
