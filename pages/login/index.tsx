import { useState } from "react"


export default function index() {

  const [value, setValue] = useState(0);

  setInterval(()=>{
    console.log("holis")
  }, 3000)

  return (
    <section className="login" >
      <div className="login__box">
        <div className="login__box__one">
          <div className="article_carrusel open">
            <img className="article_carrusel__img" src="../../image/1.jpg" alt="" />
            <div className="subtitle"><img src="../../image/imm-logo-white-short-v2.svg" alt="" /><div></div><span>farma</span></div>
          </div>
          <div className="article_carrusel">
            <img className="article_carrusel__img" src="../../image/2.jpg" alt="" />
            <div className="subtitle"><img src="../../image/imm-logo-white-short-v2.svg" alt="" /><div></div><span>farma</span></div>
          </div>
          <div className="article_carrusel">
            <img className="article_carrusel__img" src="../../image/3.jpg" alt="" />
            <div className="subtitle"><img src="../../image/imm-logo-white-short-v2.svg" alt="" /><div></div><span>farma</span></div>
          </div>
        </div>

        <div className="main__points">
          <div className="list_points">
            <div className="point open"></div>
            <div className="point"></div>
            <div className="point"></div>
          </div>
        </div>

        <div className="login__box__two">
          <div className="subtitle"><img src="../../image/imm-logo-white-short-v2.svg" alt=""/><div></div><span>farma</span></div>
          <div className="login__box__two__content">
            <div className="div-input__email">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="usuario@correo.com"/>
            </div>
            <div className="div-input__password">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="*******"/>
            </div>
            <div className="div-submit__register">
              <input type="submit" value="Ingresar"/>
                <a href="#">Crear una cuenta...</a>
            </div>
            <p className="separat">ó</p>
            <div className="div-loginOthers">
              <a className="facebook" href="#"><strong>f</strong>acebook</a>
              <a className="google" href="#"><strong>G</strong>oogle</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
