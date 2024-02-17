import "./about.css";
import ME from '../../assets/1 copy.jpg';
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FaFileCode } from "react-icons/fa";


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
            <FiUsers className="about__icon" />
              <h5>Client Projects</h5>
              <small>4 Contributions</small>
            </article>
            <article className="about__card">
            <FaFileCode className="about__icon" />
              <h5>Personal Projects</h5>
              <small>15+ Completed Projects</small>
            </article>
          </div>
          <p>
          Dedicated UI Developer with 2 years of hands-on experience. Looking for internships in front-end and I am eager to apply skills in real-world projects and contribute to problems that require enhanced user experiences.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
