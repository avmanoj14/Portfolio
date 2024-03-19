import './services.css';
import { HiOutlineCheck } from "react-icons/hi";


const Services = () => {
  return (
    <section id='services'>
      <h5>What I contributed</h5>
      <h2>Work experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>American Cancer Society</h3>
            <h6><i>Senior UI Developer</i></h6>
          </div>

          <ul className="service__list">
            <li>
              <HiOutlineCheck className='service__list-icon'/>
              <p>Redesigned the entire user interface of the American Cancer Society's online presence.</p>
            </li>
            <li>
              <HiOutlineCheck className='service__list-icon'/>
              <p>Implemented the search functionality, significantly improving response time efficiency.</p>
            </li>
            <li>
              <HiOutlineCheck className='service__list-icon'/>
              <p>Improved marketing functionalities which increased the customer experience by 180%.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>United Healthcare</h3>
            <h6><i>Senior UI Developer</i></h6>
          </div>

          <ul className="service__list">
            <li>
              <HiOutlineCheck className='service__list-icon'/>
              <p>Created a website for United Healthcare from scratch.</p>
            </li>
            <li>
              <HiOutlineCheck className='service__list-icon'/>
              <p>Developed a location-based feature that allowed users to select any place on the map to locate the event taking place at
the preferred location which boosted sales for the plans by 120%.
</p>
            </li>
          </ul>
        </article>
        {/* END OF Web development */}
        <article className="service">
          <div className="service__head">
            <h3>Internal Projects</h3>
            <h6><i>UI Developer</i></h6>
          </div>

          <ul className="service__list">
            <li>
              <HiOutlineCheck className='service__list-icon'/>
              <p>Developed a UI Component Library with various components used by UI developers frequently which made the job easier for developers to reuse components</p>
            </li>
            <li>
              <HiOutlineCheck className='service__list-icon'/>
              <p>Innovated a functionality that allowed fellow developers to access compressed fully coded versions of UI components with extensive documentation for ease of use boosting the efficiency of all developers by 200%.
</p>
            </li>
            <li>
              <HiOutlineCheck className='service__list-icon'/>
              <p>Finished in the top 5 in a company-wide hackathon for all the Entry-level developers for developing a Video Streaming
Website.
</p>
            </li>
            <li>
              <HiOutlineCheck className='service__list-icon'/>
              <p>Developed mini projects like E-commerce websites to showcase technical skills
</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </section>
  )
}

export default Services;