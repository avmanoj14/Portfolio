import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/manojav1413/" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/avmanoj14" target="blank">
        <FaGithub />
      </a>
      <a href="mailto:amara.v@northeastern.edu" target="blank">
        <IoIosMail />
      </a>
    </div>
  );
};

export default HeaderSocials;
