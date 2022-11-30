import Link from 'next/link';
import Script from 'next/script';

export const HeaderOne = () => {
  return (
    <>
      <header className="header-main">
        <nav className="header-main__navbar">
          <nav className="nav-one">
            <a href="index.html"><img className="nav-one__img" src="../../image/endo-logo-short.svg" alt="logo" /></a>
            <a href="index.html"><h1 className="title">farma</h1></a>
          </nav>
          <nav className="nav-two">
            <ul className="nav-two__list">
              <li className="li"><a href="productos.html">Productos</a></li>
              <li className="li"><a href="posts.html">Posts</a></li>
              <li className="li"><a href="eventos.html">Eventos</a></li>
            </ul>
          </nav>
          <nav className="nav-three">
            <div className="car"><a href="#" className="fas fa-shopping-cart"></a></div>
            <Link href="/login" className="perfil">
              <img className="nav-three__img" src="../../image/election-egi_emi/img-1.png" alt="perfil" />
            </Link>
          </nav>

          <nav className="nav-four">
            <div className="car" id="menu-btn"><span className="fas fa-bars"></span></div>
            <Link href="/login" className="perfil">
              <img className="nav-three__img" src="../../image/election-egi_emi/img-1.png" alt="perfil" />
            </Link>
          </nav>

          <div className="nav-contain__two_three" id="header-center-right">
            <nav className="nav-three">
              <div className="car"><a href="#" className="fas fa-shopping-cart"></a></div>
              <a className="nav-three__chevron" href="#">Carrito de compras <i className="fas fa-chevron-right"></i></a>
            </nav>
            <nav className="nav-two">
              <ul className="nav-two__list">
                <li className="li"><a href="productos.html">Productos</a> <i className="fas fa-chevron-right"></i></li>
                <li className="li"><a href="posts.html">Posts</a> <i className="fas fa-chevron-right"></i></li>
                <li className="li"><a href="eventos.html">Eventos</a> <i className="fas fa-chevron-right"></i></li>
              </ul>
            </nav>
          </div>
        </nav>
      </header>

      <Script src='./javascript/menu.js' />
    </>
  )
}
