import './footer.css';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer>
      <a className='footer__logo' href='#'>Venkata Manoj Amara</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/"><FaInstagram/></a>
        <a href="https://twitter.com/?lang=en"><FaXTwitter/></a>
      </div>

    </footer>
  )
}

export default Footer;