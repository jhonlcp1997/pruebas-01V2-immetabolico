import React from 'react'

export const ViewBlogs = () => {
  return (
    <>
      <section className="blogs">
        <h2 className="subtitle">Nuestros blogs</h2>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src="../../image/servicios/dolor.png" alt="" />
            </div>
            <div className="content">
              <div className="date">
                <h3>21</h3>
                <span>ene</span>
              </div>
              <a href="#" className="user"><i className="fas fa-user"></i> por Jhon cruz</a>
              <a href="#" className="title">titulo del blog</a>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod iste harum qui eos officia fugiat
                quaerat vel eius, cumque minima perferendis beatae illo facilis recusandae inventore dolorem
                deserunt blanditiis perspiciatis!</p>
              <a href="#" className="btn">leer mas...</a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="../../image/servicios/sobrepeso.png" alt="" />
            </div>
            <div className="content">
              <div className="date">
                <h3>19</h3>
                <span>feb</span>
              </div>
              <a href="#" className="user"><i className="fas fa-user"></i> por Jhon cruz</a>
              <a href="#" className="title">titulo del blog</a>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod iste harum qui eos officia fugiat
                quaerat vel eius, cumque minima perferendis beatae illo facilis recusandae inventore dolorem
                deserunt blanditiis perspiciatis!</p>
              <a href="#" className="btn">leer mas...</a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="../../image/servicios/fatigayanimo.png" alt="" />
            </div>
            <div className="content">
              <div className="date">
                <h3>25</h3>
                <span>mar</span>
              </div>
              <a href="#" className="user"><i className="fas fa-user"></i> por Jhon cruz</a>
              <a href="#" className="title">titulo del blog</a>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod iste harum qui eos officia fugiat
                quaerat vel eius, cumque minima perferendis beatae illo facilis recusandae inventore dolorem
                deserunt blanditiis perspiciatis!</p>
              <a href="#" className="btn">leer mas...</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
