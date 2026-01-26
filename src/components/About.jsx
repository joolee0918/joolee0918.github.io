import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <div className="about-image">
            <img
              src="/20191014_115138.jpg"
              alt="Jooyoung Lee"
              className="profile-photo"
            />
          </div>
          <div className="about-intro">
            <p className="description">
              <em>Jooyoung Lee</em> is an Associate Professor in the Department of Applied Statistics at Chung-Ang University.
              She leads a research group focused on developing innovative statistical methods for survival analysis,
              causal inference, and machine learning applications in healthcare. Her work bridges theoretical methodology
              with practical applications in biomedical research through extensive collaborations with medical researchers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
