import './portfolio.css';
import IMG1 from '../../assets/hangman.jpg';
import IMG2 from '../../assets/mealfinder.jpg';
import IMG3 from '../../assets/exchange.jpg';
import IMG4 from '../../assets/movie.jpg';
import IMG5 from '../../assets/video.jpg';
import IMG6 from '../../assets/form.gif';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Hangman Game',
    github: 'https://github.com/avmanoj14/Hangman-Game',
    demo: 'https://avmanoj14.github.io/Hangman-Game/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Meal Finder',
    github: 'https://github.com/avmanoj14/Meal-Finder',
    demo: 'https://avmanoj14.github.io/Meal-Finder/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Exchange Rate Calculator',
    github: 'https://github.com/avmanoj14/Exchange-Rate-Calculator',
    demo: 'https://avmanoj14.github.io/Exchange-Rate-Calculator/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Movie Seat Booking',
    github: 'https://github.com/avmanoj14/Movie-seat-booking',
    demo: 'https://avmanoj14.github.io/Movie-seat-booking/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Video Streaming Website',
    github: 'https://github.com/avmanoj14/TAVideo-',
    demo: 'https://avmanoj14.github.io/TAVideo-/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Form Validator',
    github: 'https://github.com/avmanoj14/Form-Validator',
    demo: 'https://avmanoj14.github.io/Form-Validator/'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
              <h3>{title}</h3>
             <div className="portfolio__item-cta">
             <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
             </div>
          </article>
          )
        })
       }
      </div>
    </section>
    )
}

export default Portfolio;