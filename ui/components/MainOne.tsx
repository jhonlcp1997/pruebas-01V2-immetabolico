import { useEffect, useState } from 'react';
import { incrementalCarrusel } from '../../utils/intervals';

const articlesCarruselList = [
  {
    id: 0,
    subtitle: 'Subtitle largo corto y medía plazo',
    letterInitial: 'T',
    paragraph: 'orem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, optio alias? Non tenetur odit repellat delectus odio. Hic pariatur officia fugiat! Eos alias, quaerat itaque quae impedit qui ratione incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam commodi labore eligendicorrupti maiores disti',
    classNameArticle: ''
  },
  {
    id: 1,
    subtitle: 'Subtitle plazo',
    letterInitial: 'L',
    paragraph: 'orem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, optio alias? Non tenetur odit repellat delectus odio.Hic pariatur officia fugiat! Eos alias, quaerat itaque quae impedit qui ratione incidunt.corrupti maiores distinctio sint fuga voluptate odit earum, officia quidem nihil ducimus blanditiis incidunt nam perferendis voluptates ratione.',
    classNameArticle: ''
  },
  {
    id: 2,
    subtitle: 'Subtitle semilargo',
    letterInitial: 'S',
    paragraph: 'orem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, optio alias? Non tenetur odit repellatratione.',
    classNameArticle: ''
  },
]

export const MainOne = () => {
  const {timer, setTime} = incrementalCarrusel(articlesCarruselList);

  return (
    <>
      <main className="main">
        <section className="main__carrusel">
          <div className="carrusel">
            {articlesCarruselList.map((element) => (
              <article key={element.id} className={`article_carrusel ${timer === element.id ? 'open' : ''}`}>
                <div className="article_carrusel__content">
                  <h3 className="subtitle">{element.subtitle}</h3>
                  <p className="paragraph"><span>{element.letterInitial}</span>{element.paragraph}</p>
                  <div className="content-button">
                    <a className="button" href="#">ver mas..</a>
                  </div>
                </div>
                <div className="article_carrusel__graphics">
                  <img src="../../image/endo-f3.svg" alt="" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="main__points">
          <div className="list_points">
            {articlesCarruselList.map((element)=>(
              <div onClick={()=>{setTime(element.id)}} key={element.id} className={`point ${element.id === timer ? 'open': ''}`}></div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
