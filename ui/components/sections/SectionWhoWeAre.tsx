
export const SectionWhoWeAre = () => {
  return (
    <section className="whoWeAre">
      <div className="whoWheAre__content">

        <div className="contentVideo">
          <video autoPlay loop  muted>
            <source src='./videos/video4.mp4' type="video/mp4" />
            vuestro navegador no soporta este video
          </video>
        </div>

        <article className="contentParagraph">
          <h2 className="title">Quiénes Somos</h2>
          <p className="paragraph">El Instituto Médico Metabólico es un centro especializado en reconocer las alteraciones del metabolismo, de la nutrición y del entorno; para volver a equilibrarlo, de modo que las personas con molestias crónicas y recurrentes recuperen el bienestar de modo sostenido.</p>
          <a href="../../pdf/Tgineco.pdf" target='_blank'>Descargar formato</a>
        </article>
      </div>
    </section>
  )
}
