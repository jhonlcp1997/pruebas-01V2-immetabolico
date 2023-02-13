
export const FooterOne = () => {
  return (
    <>
      <footer className="footer">
        <section className="footer__top">
          <div className="box-one">
            <ul className="list-pages">
              <h2 className="subtitle">Páginas</h2>
              <li className="li"><i className="fas fa-chevron-right"></i> <a target="_blank" href="https://imm.pe/">IMM</a></li>
              <li className="li"><i className="fas fa-chevron-right"></i> <a target="_blank" href="https://immetabolico.pe/">IMMetabólico</a></li>
              <li className="li"><i className="fas fa-chevron-right"></i> <a target="_blank" href="https://www.immlatam.com/views/test.html">IMMLatam</a></li>
            </ul>
            <ul className="list-pages">
              <h2 className="subtitle">Contáctenos</h2>
              <li className="li"><i className="fas fa-chevron-right"></i> <i className="fas fa-phone"></i> 223-0700 / 223-0701</li>
              <li className="li"><i className="fas fa-chevron-right"></i> <i className="fab fa-whatsapp"></i> 986 620 392</li>
              <li className="li"><i className="fas fa-chevron-right"></i> <i className="fas fa-envelope"></i> immfarma@imm.com.pe</li>
            </ul>
          </div>
          <div className="box-two">
            <h2 className="subtitle">Síguenos en nuestras redes</h2>
            <ul className="list-pages">
              <li className="li"><a href="#" className="fab fa-facebook-f"></a></li>
              <li className="li"><a href="#" className="fab fa-twitter"></a></li>
              <li className="li"><a href="#" className="fab fa-instagram"></a></li>
              <li className="li"><a href="#" className="fab fa-linkedin"></a></li>
            </ul>
          </div>
        </section>

        <footer className="footer__bottom">
          <h4 className="subtitle">Todos los derechos reservados</h4>
          <h4 className="subtitle">© 2022 Instituto Médico de la Mujer</h4>
        </footer>
      </footer>
    </>
  )
}
