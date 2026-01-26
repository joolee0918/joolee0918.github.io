import './ContactPage.css';

const ContactPage = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2>Contact</h2>
          <p className="section-subtitle">
            Get in touch for research collaborations, academic inquiries, or prospective students
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3 className="info-label">Email</h3>
              <a href="mailto:jooylee@cau.ac.kr" className="info-value link">
                jooylee@cau.ac.kr
              </a>
            </div>

            <div className="info-item">
              <h3 className="info-label">Office</h3>
              <p className="info-value">
                Department of Applied Statistics<br />
                College of Business and Economics (Building 310)<br />
                Chung-Ang University<br />
                84 Heukseok-ro, Dongjak-gu, Seoul, Republic of Korea
              </p>
            </div>

            <div className="info-item">
              <h3 className="info-label">Phone</h3>
              <a href="tel:+82-2-820-5610" className="info-value link">
                +82-2-820-5610
              </a>
            </div>

            <div className="info-item">
              <h3 className="info-label">Links</h3>
              <div className="social-links">
                <a href="https://jagged-leopard-94c.notion.site/9a89be47e8f34cc5a38f3afb77ceaafb" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.887-.748-.84l-15.177.887c-.56.047-.747.327-.747.887zm14.336.653c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
                  </svg>
                  Lab Website
                </a>
                <a href="https://scholar.google.com/citations?user=SNDUIVeWKREC&hl=en" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                  </svg>
                  Google Scholar
                </a>
                <a href="https://orcid.org/0000-0002-3246-5246" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 4.078-1.266 4.078-3.722 0-2.25-1.719-3.722-4.078-3.722h-2.297z"/>
                  </svg>
                  ORCID
                </a>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <h3 className="card-title">Prospective Students</h3>
            <p className="card-text">
              I am actively looking for motivated graduate students and postdoctoral fellows interested in survival analysis, causal inference, machine learning in healthcare, clinical trial design, and collaborative medical research.
            </p>
            <p className="card-text">
              If you are interested in joining our research group, please send me an email with your CV, research interests, and relevant background.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
