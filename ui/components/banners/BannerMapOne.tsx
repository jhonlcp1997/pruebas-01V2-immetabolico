import React from 'react'

export const BannerMapOne = () => {
  return (
    <>
      <section className="bannerMap">
        <div className="bannerMap__content">
          <div className="content">
            <div className="content__one">
              <header>
                <h2 className='title'>Dirección</h2>
              </header>
              <article>
                <p>Av. Javier Prado Este 1476, San Isidro,</p>
                <p>Lima-Perú <span className="fas fa-map-pin"></span></p>
              </article>
            </div>
            <div className="content__two">
              <header>
                <h2 className='title'>Horarios</h2>
              </header>
              <article>
                <p>Lunes a viernes</p>
                <p><span className="fas fa-clock"></span> 7:00 a.m. a 6:00 p.m.</p>
                <p>Sabados</p>
                <p><span className="fas fa-clock"></span> 2:00 p.m.</p>
              </article>
            </div>
          </div>
          <div className='map'>
            <iframe
              className="iframe"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5517.305824615852!2d-77.01261965382189!3d-12.0899326924939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1simm!5e0!3m2!1ses-419!2spe!4v1668522478993!5m2!1ses-419!2spe"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}
