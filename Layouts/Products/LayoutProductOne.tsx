import Link from 'next/link'
import { BannerOffOne, FooterOne, FormOne, NavbarOne } from '../../ui/components'

const productsList = [
  {
    id: 0,
    imgProduct: '../../image/election-egi_emi/sangre-1.svg',
    nameProduct: 'Dexametazona',
    tagsProduct: ['adulto-mayor', 'niño', 'jovenes', 'metabolido', 'ginecologico'],
    priceOriginal: 100,
    priceOffer: 43,
    descriptionShortProduct: 'Este producto se encuentra en IMMFARM Exclusivamenete',
    descriptionProduct: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur provident velit aliquid error quia nam inventore tempora quae maxime alias veniam temporibus ea, delectus recusandae in et, quaerat nulla.',
  },
  {
    id: 1,
    imgProduct: '../../image/election-egi_emi/sangre-1.svg',
    nameProduct: 'Amoxicilina',
    tagsProduct: ['adultos', 'niño', 'jovenes', 'metabolido', 'ginecologico'],
    priceOriginal: 100,
    priceOffer: 43,
    descriptionShortProduct: 'Este producto se encuentra en IMMFARM Exclusivamenete',
    descriptionProduct: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur provident velit aliquid error quia nam inventore tempora quae maxime alias veniam temporibus ea, delectus recusandae in et, quaerat nulla.',
  },
  {
    id: 2,
    imgProduct: '../../image/election-egi_emi/sangre-1.svg',
    nameProduct: 'Pastilla sabor ceviche',
    tagsProduct: ['adultos', 'jovenes', 'industrial', 'ginecologico'],
    priceOriginal: 120,
    priceOffer: null,
    descriptionShortProduct: 'Este producto se encuentra en IMMFARM Exclusivamenete',
    descriptionProduct: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur provident velit aliquid error quia nam inventore tempora quae maxime alias veniam temporibus ea, delectus recusandae in et, quaerat nulla.',
  },
  {
    id: 3,
    imgProduct: '../../image/election-egi_emi/sangre-1.svg',
    nameProduct: 'Cocadas para la diabetes',
    tagsProduct: ['adultos', 'embarazo', 'jovenes', 'metabolido', 'ginecologico'],
    priceOriginal: 150,
    priceOffer: 42,
    descriptionShortProduct: 'Este producto se encuentra en IMMFARM Exclusivamenete',
    descriptionProduct: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur provident velit aliquid error quia nam inventore tempora quae maxime alias veniam temporibus ea, delectus recusandae in et, quaerat nulla.',
  },
  {
    id: 4,
    imgProduct: '../../image/election-egi_emi/sangre-1.svg',
    nameProduct: 'Agua deshidratada',
    tagsProduct: ['adultos', 'niño', 'jovenes', 'metabolido'],
    priceOriginal: 19,
    priceOffer: null,
    descriptionShortProduct: 'Este producto se encuentra en IMMFARM Exclusivamenete',
    descriptionProduct: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur provident velit aliquid error quia nam inventore tempora quae maxime alias veniam temporibus ea, delectus recusandae in et, quaerat nulla.',
  },
]

const listRoutes = [
  {
    id: 0,
    path: 'children',
    namePage: 'Niños'
  },
  {
    id: 1,
    path: 'joung',
    namePage: 'Jovenes'
  },
  {
    id: 2,
    path: 'adult',
    namePage: 'Adultos'
  },
  {
    id: 3,
    path: 'longadult',
    namePage: 'Adultos-Mayores',
  },
]

export const LayoutProductOne = () => {
  return (
    <>
      <NavbarOne listRoutes={listRoutes} rootPage='products' />
      <FormOne />

      <div className="section-products">
        <ul className="section-products__list">
          {productsList.map((element) => (
            <li key={element.id} className="li-product">
              <img className="img-product" src={element.imgProduct} alt="img" />
              <h2 className="name-product">{element.nameProduct}</h2>
              <p className="description-product">{element.descriptionShortProduct}</p>
              {element.priceOffer === null ?
                <>
                  <p className="priceOffer-product">$ {element.priceOriginal}</p>
                </>
                :
                <>
                  <p className="priceOrigin-product">$ {element.priceOriginal}</p>
                  <p className="priceOffer-product">$ {element.priceOffer}</p>
                </>
              }
              <div className="li-product__popup">
                <div className="popup-div info"><Link href={`/products/${element.id}`}>Ver info</Link></div>
                <div className="popup-div car"><a href="#">agregar a carrito</a></div>
              </div>
            </li>
          ))
          }
        </ul>
        <div className="section-products__buttons">
          <a href="#">Anterior</a>
          <span>❇</span>
          <a href="#">Siguiente</a>
        </div>
      </div>

      <BannerOffOne
        idOfferEvent={12}
        rootPage="product"
        typeOffer="Oferta especial"
        percentDiscount="Descuento de 30%"
        descriptionOffer='Por el Dia de las Madres'
      />

      <FooterOne />
    </>
  )
}
