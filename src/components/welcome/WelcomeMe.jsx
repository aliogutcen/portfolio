import "./welcome.scss";
import Avatar from "../../assets/3d-casual-life-young-man-in-headphones-sitting-with-laptop-and-waving.png";
import Welcome from "../welcome/WelcomeMe.jsx";
import Github from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";
import About from "../about/About";
import { Link } from "react-scroll";
const WelcomeMe = () => {
  return (
    <div className="welcome">
      <div className="welcome-top">
        <div className="welcome-logo">
          <span>AO</span>
        </div>
        <div className="welcome-menu">
          <ul className="menu">
            <li>About</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="welcome-center">
        <div className="welcome-info">
          <div className="info-left">
            <div className="info-left-top">
              <p className="based">
                full stack java <br /> developer
              </p>
              <p className="about-info">
                Hi I'm Ali , I'm a passionate full stack developer <br /> in
                Java and ReactJS
              </p>
            </div>
          </div>
          <div className="info-right">
            <img src={Avatar} alt="" className="avatar" />
          </div>
        </div>
      </div>
      <div className="welcome-bottom">
        <ul className="welcome-bottom">
          <li className="link-welcome">
            <img src={Github} alt="" className="link-icon" />
            <a href="https://github.com/aliogutcen">Github</a>
          </li>
          <li className="link-welcome">
            <img src={Linkedin} alt="" className="link-icon" />
            <a href="https://www.linkedin.com/in/aliogutcen/">Linkedin</a>
          </li>
        </ul>

        <Link
          to="aboutme"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <span className="scroll-down">Scroll down</span>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeMe;
