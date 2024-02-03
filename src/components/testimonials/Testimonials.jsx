import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//Here make changes like getting appreciations from project manager and awards during job wow award

const data = [
  {
    avatar: AVTR1,
    name:'Client name',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia obcaecati explicabo consequuntur quisquam, excepturi suscipit unde at facere. Quas voluptates eius adipisci labore maxime officiis placeat molestiae repellendus qui ut.'
  },
  {
    avatar: AVTR2,
    name:'Client name',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia obcaecati explicabo consequuntur quisquam, excepturi suscipit unde at facere. Quas voluptates eius adipisci labore maxime officiis placeat molestiae repellendus qui ut.'
  },
  {
    avatar: AVTR3,
    name:'Client name',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia obcaecati explicabo consequuntur quisquam, excepturi suscipit unde at facere. Quas voluptates eius adipisci labore maxime officiis placeat molestiae repellendus qui ut.'
  },
  {
    avatar: AVTR4,
    name:'Client name',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia obcaecati explicabo consequuntur quisquam, excepturi suscipit unde at facere. Quas voluptates eius adipisci labore maxime officiis placeat molestiae repellendus qui ut.'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container" 
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
       {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
          </SwiperSlide>
          )
        })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials;