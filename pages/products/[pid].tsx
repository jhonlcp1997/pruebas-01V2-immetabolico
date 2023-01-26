import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HeadLayoutOne } from "../../Layouts/Heads/HeadLayoutOne";
import { FooterOne, HeaderOne } from "../../ui/components";

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

type productData = {
  id: number;
  imgProduct: string;
  nameProduct: string;
  tagsProduct: string[];
  priceOriginal: number;
  priceOffer: number;
  descriptionShortProduct: string;
  descriptionProduct: string;
}


export default function pageProduct() {
  const [statePage, setStatePage] = useState(true);
  const [product, setProduct] = useState({
    // id: null,
    // imgProduct: null,
    // nameProduct: null,
    // tagsProduct: null,
    // priceOriginal: null,
    // priceOffer: null,
    // descriptionShortProduct: null,
    // descriptionProduct: null,
  });
  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    if (!pid) return
    findElement();
  }, [pid])

  useEffect(() => {
    if (Object.entries(product).length === 0) return
    setStatePage(false);
  }, [product])

  const findElement = async () => {
    const [value] = await productsList.filter((element) => Number(pid) === element.id);
    setProduct({ ...value });
  }

  return (
    <HeadLayoutOne
      title="IMM Productos para Jovenes"
    >
      <HeaderOne />

      {statePage === true ?
        <h3>CArgando</h3>
        : Object.entries(product).length === 0 ?
          <h2>Vacío</h2>
          :

          <section className="productId">
            <article className="product">
              <div className="product__box1">
                <img className="img-product" src="/image/election-egi_emi/sangre-1.svg" alt="img" />
                <div className="product__box1__content">
                  <h2 className="name-product">
                    Nombre del producto
                    {/* {product.nameProduct} */}
                  </h2>
                  <h4 className="tags-title">tags</h4>
                  <div className="labels">
                    <span>adultos</span>
                    <span>niño</span>
                    <span>jovenes</span>
                    <span>metabolico</span>
                    <span>ginecologico</span>
                    {/* {product.tagsProduct.map((element: string) => (
                      <span key={element}>{element}</span>
                    ))} */}
                  </div>
                  <p className="priceOrigin-product">precio: <span>$ 100</span></p>
                  <p className="priceOffer-product">precio en oferta: <span>$ 43</span></p>
                  <a href="#">Comprar</a>
                </div>
              </div>
              <div className="product__box2">
                <h3 className="subtitle">Descripcion del producto:</h3>
                <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odit quisquam
                  accusantium corrupti quibusdam. Rem quod velit, ducimus voluptatibus maiores minus
                  impedit voluptatum vitae, voluptate veniam totam aperiam neque laudantium!</p>
              </div>
              <div className="product__box3">
                <Link href="/products">Atras</Link>
              </div>
            </article>
          </section>
      }

      <FooterOne />

    </HeadLayoutOne>
  )
}
