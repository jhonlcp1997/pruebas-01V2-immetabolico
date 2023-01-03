import Link from "next/link";
import { useRouter } from "next/router";

interface propsNavbarOne {
  listRoutes: Array<object>;
  rootPage: string;
}

export const NavbarOne = ({listRoutes, rootPage}: propsNavbarOne) => {

  const routers = useRouter();
  
  return (
    <section className="productNabvar">
      <nav className="productNabvar__nav">
        {listRoutes.map((element: any)=>(
          <Link 
            key={element.id}
            className={(routers.asPath === `/${rootPage}/${element.path}`)? 'active' : ''} 
            href={`/${rootPage}/${element.path}`}>
              {element.namePage}
            </Link>
        ))}
        {/* <a className="active" href="#">Niños</a>
        <a href="#">Jovenes</a>
        <a href="#">Adultos</a>
        <a href="#">Adulto-mayor</a> */}
      </nav>
    </section>
  )
}
