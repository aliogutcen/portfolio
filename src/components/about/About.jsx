import "./about.scss";
import Avatar from "../../assets/3d-casual-life-young-man-in-headphones-sitting-with-laptop-and-waving.png";
const About = () => {
  return (
    <div className="aboutme">
      <div>
        <p className="aboutme-p">ABOUT ME</p>
      </div>
      <div className="about-area">
        <div className="about-left"></div>
        <div className="about-right">
          <p>I'm Ali OGUTCEN,born and raised in Turkey.</p>
          <p>
            I work as a Full Stack Developer and have a passion for swimming
          </p>
          <p>Additionally, I have a keen interest in the world of NFTs.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
