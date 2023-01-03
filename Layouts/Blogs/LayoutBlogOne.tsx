import { FooterOne, FormOne, NavbarOne } from "../../ui/components";

const blogsList = [
  {
    id: 0,
    imgBlog: '/image/servicios/dolor.png',
    date: '20-11-2022',
    dayCreateBlog: 20,
    monthCreateBlog: 'jul',
    authorBlog: 'Jhon Cruz',
    titleBlog: 'titulo del Blog',
    descriptionBlog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ad earum veniam aliquam hic eum totam id magni enim voluptate. Nihil ipsa provident sapiente nulla soluta reiciendis corrupti maiores delectus.",
  },
  {
    id: 1,
    imgBlog: '/image/servicios/sobrepeso.png',
    date: '20-11-2022',
    dayCreateBlog: 21,
    monthCreateBlog: 'feb',
    authorBlog: 'Jhon Cruz',
    titleBlog: 'titulo del Blog',
    descriptionBlog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ad earum veniam aliquam hic eum totam id magni enim voluptate. Nihil ipsa provident sapiente nulla soluta reiciendis corrupti maiores delectus.",
  },
  {
    id: 2,
    imgBlog: '/image/servicios/fatigayanimo.png',
    date: '20-11-2022',
    dayCreateBlog: 31,
    monthCreateBlog: 'dic',
    authorBlog: 'Jhon Cruz',
    titleBlog: 'titulo del Blog',
    descriptionBlog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ad earum veniam aliquam hic eum totam id magni enim voluptate. Nihil ipsa provident sapiente nulla soluta reiciendis corrupti maiores delectus.",
  },
  {
    id: 3,
    imgBlog: '/image/servicios/sobrepeso.png',
    date: '20-11-2022',
    dayCreateBlog: 10,
    monthCreateBlog: 'ene',
    authorBlog: 'Jhon Cruz',
    titleBlog: 'titulo del Blog',
    descriptionBlog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ad earum veniam aliquam hic eum totam id magni enim voluptate. Nihil ipsa provident sapiente nulla soluta reiciendis corrupti maiores delectus.",
  },
  {
    id: 4,
    imgBlog: '/image/servicios/dolor.png',
    date: '20-11-2022',
    dayCreateBlog: 20,
    monthCreateBlog: 'ene',
    authorBlog: 'Jhon Cruz',
    titleBlog: 'titulo del Blog',
    descriptionBlog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ad earum veniam aliquam hic eum totam id magni enim voluptate. Nihil ipsa provident sapiente nulla soluta reiciendis corrupti maiores delectus.",
  },
  {
    id: 5,
    imgBlog: '/image/servicios/fatigayanimo.png',
    date: '20-11-2022',
    dayCreateBlog: 23,
    monthCreateBlog: 'ene',
    authorBlog: 'Jhon Cruz',
    titleBlog: 'titulo del Blog',
    descriptionBlog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ad earum veniam aliquam hic eum totam id magni enim voluptate. Nihil ipsa provident sapiente nulla soluta reiciendis corrupti maiores delectus.",
  },
]

const listRoutes = [
  {
    id:0,
    path: 'popular',
    namePage: 'Populares'
  },
  {
    id:1,
    path: 'newest',
    namePage: 'Más nuevos'
  },
  {
    id:2,
    path: 'oldest',
    namePage: 'Más antiguos'
  },
]

export const LayoutBlogOne = () => {
  return (
    <>
      <NavbarOne listRoutes={listRoutes} rootPage='blogs' />

      <FormOne />

      <section className="blogs">
        <h2 className="subtitle">Nuestros blogs</h2>
        <div className="box-container">
          {blogsList.map((element) => (
            <div className="box" key={element.id}>
              <div className="image">
                <img src={element.imgBlog} alt={element.titleBlog} />
              </div>
              <div className="content">
                <div className="date">
                  <h3>{element.dayCreateBlog}</h3>
                  <span>{element.monthCreateBlog}</span>
                </div>
                <a href="#" className="user"><i className="fas fa-user"></i> por {element.authorBlog}</a>
                <a href="#" className="title">{element.titleBlog}</a>
                <p>{element.descriptionBlog}</p>
                <a href="blog/index.html" className="btn">leer mas...</a>
              </div>
            </div>
          ))}
        </div>
        <div className="section-products__buttons">
          <a href="#">Anterior</a>
          <span>❇</span>
          <a href="#">Siguiente</a>
        </div>
      </section>

      <FooterOne />
    </>
  )
}
