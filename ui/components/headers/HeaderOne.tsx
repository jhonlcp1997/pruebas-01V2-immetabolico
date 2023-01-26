import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PopupPerfil } from '../popups/PopupPerfil';

const listPaths = [
  {
    linkPath: '/products',
    namePath: 'Productos'
  },
  {
    linkPath: '/blogs',
    namePath: 'Blogs'
  },
  {
    linkPath: '/events',
    namePath: 'Eventos'
  },
]

export const HeaderOne = () => {
  const routers = useRouter();
  const [menuState, setMenuState] = useState('');
  const [isLogedIn, setIsLogedIn] = useState(true);
  const [toggleClickedPerfil, setToggleClickedPerfil] = useState(true)

  const menuClick = () => {
    if (menuState === 'active') return setMenuState('');
    setMenuState('active');
  }

  const onClickPerfil = () => {
    if (toggleClickedPerfil) return setToggleClickedPerfil(false);
    setToggleClickedPerfil(true);
  }

  return (
    <>
      <header className="header-main">
        <nav className="header-main__navbar">

          <nav className="nav-one">
            <Link href="/"><img className="nav-one__img" src="../../image/endo-logo-short.svg" alt="logo" /><h1 className={`title ${routers.asPath === '/' ? 'active' : ''}`}>farma</h1></Link>
          </nav>

          <nav className="nav-two">
            <ul className="nav-two__list">
              {listPaths.map((element) => (
                <li key={element.linkPath} className={`li ${routers.asPath.includes(element.linkPath) ? 'active' : ''}`}><Link href={element.linkPath}>{element.namePath}</Link></li>
              ))}
            </ul>
          </nav>

          <nav className="nav-three">
            {
              isLogedIn ?
                <>
                  <div className="car"><a href="#" className="fas fa-shopping-cart"></a></div>

                  <div className="perfil"
                    onClick={onClickPerfil}
                  >
                    <img className="nav-three__img" src="../../image/election-egi_emi/img-1.png" alt="perfil" />
                  </div>
                </>
                :
                <Link href="/login" className="perfil">
                  <img className="nav-three__img" src="../../image/election-egi_emi/img-1.png" alt="perfil" />
                </Link>
            }
          </nav>

          <nav className="nav-four">
            <div onClick={menuClick} className={`car ${menuState}`} id="menu-btn"><span className="fas fa-bars"></span></div>
            {
              isLogedIn ?
                <>
                  <div className="perfil"
                    onClick={onClickPerfil}
                  >
                    <img className="nav-three__img" src="../../image/election-egi_emi/img-1.png" alt="perfil" />
                  </div>
                </>
                :
                <Link href="/login" className="perfil">
                  <img className="nav-three__img" src="../../image/election-egi_emi/img-1.png" alt="perfil" />
                </Link>
            }
          </nav>

          <div className={`nav-contain__two_three ${menuState}`} id="header-center-right">
            <nav className="nav-three">
              <div className="car"><a href="#" className="fas fa-shopping-cart"></a></div>
              <a className="nav-three__chevron" href="#">Carrito de compras <i className="fas fa-chevron-right"></i></a>
            </nav>
            <nav className="nav-two">
              <ul className="nav-two__list">
                {
                  listPaths.map((element) => (
                    <Link key={element.linkPath}
                      href={element.linkPath}
                      className={`li ${routers.asPath.includes(element.linkPath) ? 'active' : ''}`}
                    >
                      <li >{element.namePath}</li>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  ))
                }
              </ul>
            </nav>
          </div>
        </nav>
      </header>

      <PopupPerfil 
        active={toggleClickedPerfil}
        toggleActive={setToggleClickedPerfil}
      />
    </>
  )
}
