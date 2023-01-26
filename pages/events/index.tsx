import { HeadLayoutOne } from "../../Layouts/Heads/HeadLayoutOne";
import { HeaderOne } from "../../ui/components";

const eventsList = [
  {
    id: 0,
    eventPlace: 'Facebook',
    eventDate: '10/01/2024',
    eventTimestamp: '2022-12-02T16:17:14-05:00',
    eventTitle: 'Titulo del evento',
    eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eius tempore atque suscipit reprehenderit repellendus dolores vitae eligendi adipisci corrupti, esse, quasi voluptatem impedit explicabo perspiciatis quod? Ipsa, quos iste.',
    eventStartTime: '9:00pm',
    eventEndTime: '10:00pm',
    eventImg: '/image/guantes.jpg',
  },
  {
    id: 1,
    eventPlace: 'Instragram',
    eventDate: '09/01/2023',
    eventTimestamp: '2022-12-02T16:17:14-05:00',
    eventTitle: 'Titulo del evento',
    eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eius tempore atque suscipit reprehenderit repellendus dolores vitae eligendi adipisci corrupti, esse, quasi voluptatem impedit explicabo perspiciatis quod? Ipsa, quos iste.',
    eventStartTime: '9:00pm',
    eventEndTime: '10:00pm',
    eventImg: '/image/2.jpg',
  },
  {
    id: 2,
    eventPlace: 'Instragram',
    eventDate: '02/12/2022',
    eventTimestamp: '2022-12-02T16:17:14-05:00',
    eventTitle: 'Titulo del evento',
    eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eius tempore atque suscipit reprehenderit repellendus dolores vitae eligendi adipisci corrupti, esse, quasi voluptatem impedit explicabo perspiciatis quod? Ipsa, quos iste.',
    eventStartTime: '9:00pm',
    eventEndTime: '10:00pm',
    eventImg: '/image/election-egi_emi/endo-s6.png',
  },
  {
    id: 3,
    eventPlace: 'Instragram',
    eventDate: '01/12/2022',
    eventTimestamp: '2022-12-02T16:17:14-05:00',
    eventTitle: 'Titulo del evento',
    eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eius tempore atque suscipit reprehenderit repellendus dolores vitae eligendi adipisci corrupti, esse, quasi voluptatem impedit explicabo perspiciatis quod? Ipsa, quos iste.',
    eventStartTime: '9:00pm',
    eventEndTime: '10:00pm',
    eventImg: '/image/5.jpg',
  },
]

export default function index() {
  return (
    <>
      <HeadLayoutOne
        title="IMM Events"
      >

        <HeaderOne />

        <section className="events">
          <div className="events__box">
            <ul className="events__box__list">
              {eventsList.map((element) => {
                const tiempo = new Date();
                let situation ;

                if(tiempo.toLocaleDateString('en-GB') === element.eventDate){
                  situation = 0;
                }else{
                  if(tiempo.toLocaleDateString('en-GB') < element.eventDate){
                    situation = 1
                  } else{
                    situation = 2
                  }
                }

                
                return (
                  <li className="event" key={element.id}>
                    <div className="event__box-one">
                      <h2>En <span>{element.eventPlace}</span></h2>
                      {situation === 0 ?
                          <div className="status live">En vivo</div>
                        :
                        situation === 1 ?
                          <div className="status future">Programado</div>
                        :
                          <div className="status past">Pasado</div>
                      }
                    </div>
                    <a className="directiontEvent" href="#"><img className="event__img" src={element.eventImg} alt="" /> <span>click sobre la imagen para ir...</span></a>
                    <div className="event__box-two">
                      <h2 className="title">{element.eventTitle}</h2>
                      <h3 className="date">{element.eventDate}</h3>
                      <h4 className="title-description">Descripción:</h4>
                      <p>{element.eventDescription}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      </HeadLayoutOne>
    </>
  )
}
