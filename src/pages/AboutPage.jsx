import { useState } from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = {
    education: [
      {
        degree: 'Ph.D. in Mathematics (Biostatistics)',
        institution: 'University of Waterloo, ON, Canada',
        year: '2019',
        details: 'Advisor: Dr. Richard J. Cook | Thesis: Statistical models and methods for heterogeneous life history processes'
      },
      {
        degree: 'M.Math. in Actuarial Science',
        institution: 'University of Waterloo, ON, Canada',
        year: '2015'
      },
      {
        degree: 'B.S. in Mathematics / Financial Engineering',
        institution: 'Korea University, Seoul, Korea',
        year: '2013'
      }
    ],
    affiliations: [
      {
        position: 'Associate Professor',
        institution: 'Department of Applied Statistics, Chung-Ang University',
        period: '2025 - Present'
      },
      {
        position: 'Assistant Professor',
        institution: 'Department of Applied Statistics, Chung-Ang University',
        period: '2021 - 2025'
      },
      {
        position: 'Postdoctoral Fellow',
        institution: 'Department of Epidemiology and Biostatistics, Harvard T.H. Chan School of Public Health',
        period: '2018 - 2021'
      }
    ],
    professional: [
      {
        role: 'Member',
        organization: 'American Statistical Association (ASA)'
      },
      {
        role: 'Member',
        organization: 'International Biometric Society (IBS)'
      },
      {
        role: 'Member',
        organization: 'Korean Statistical Society (KSS)'
      }
    ]
  };

  const researchAreas = [
    {
      title: 'Survival Analysis',
      description: 'Advanced methods for time-to-event data analysis, including competing risks, multistate models, and joint modeling of longitudinal and survival data.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 20V4M3 20H21" strokeLinecap="round"/>
          <path d="M5 5L5 8L8 8L8 11L11 11L11 14L14 14L14 17L17 17L17 19L20 19" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"/>
        </svg>
      )
    },
    {
      title: 'Causal Inference',
      description: 'Developing methods for causal inference from observational data, including propensity score methods, instrumental variables, and mediation analysis in epidemiological studies.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="7" r="2.5"/>
          <circle cx="7.5" cy="16" r="2.5"/>
          <circle cx="16.5" cy="16" r="2.5"/>
          <path d="M11 9.2L8.5 13.8" strokeWidth="1.5"/>
          <path d="M7.5 12.5L8.5 13.8L9.5 12.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13 9.2L15.5 13.8" strokeWidth="1.5"/>
          <path d="M14.5 12.5L15.5 13.8L16.5 12.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 16H14" strokeWidth="1.5"/>
          <path d="M12.5 15L14 16L12.5 17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Machine Learning in Healthcare',
      description: 'Applying machine learning and deep learning methods to electronic health records, medical imaging, and multi-modal clinical data for predictive modeling and risk assessment.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3L3 7.5L12 12L21 7.5L12 3Z"/>
          <path d="M3 12L12 16.5L21 12"/>
          <path d="M3 16.5L12 21L21 16.5"/>
        </svg>
      )
    },
    {
      title: 'Clinical Trial Design',
      description: 'Creating adaptive and innovative trial designs for precision medicine, including sequential designs, biomarker-driven trials, and platform trials for complex diseases.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="16" rx="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <path d="M7 14h3M7 17h2M14 14h3M14 17h3"/>
          <circle cx="8" cy="6.5" r="0.5" fill="currentColor"/>
          <circle cx="10" cy="6.5" r="0.5" fill="currentColor"/>
          <circle cx="12" cy="6.5" r="0.5" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: 'Spatial Statistics',
      description: 'Developing spatial and spatio-temporal statistical methods for analyzing geographically referenced health data, disease mapping, and environmental epidemiology applications.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="1"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="3" y1="15" x2="21" y2="15"/>
          <line x1="9" y1="3" x2="9" y2="21"/>
          <line x1="15" y1="3" x2="15" y2="21"/>
          <circle cx="6" cy="6" r="1.2" fill="currentColor"/>
          <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
          <circle cx="18" cy="7" r="1" fill="currentColor"/>
          <circle cx="17" cy="17" r="1.2" fill="currentColor"/>
          <circle cx="7" cy="18" r="1" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: 'Collaborative Medical Research',
      description: 'Interdisciplinary statistical collaboration with medical researchers across multiple specialties including neurology, molecular pathological, internal medicine, and ophthalmology to advance clinical research and translational medicine.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3"/>
          <circle cx="6" cy="6" r="2"/>
          <circle cx="18" cy="6" r="2"/>
          <circle cx="6" cy="18" r="2"/>
          <circle cx="18" cy="18" r="2"/>
          <path d="M9.5 10.5L7.5 7.5M14.5 10.5L16.5 7.5"/>
          <path d="M9.5 13.5L7.5 16.5M14.5 13.5L16.5 16.5"/>
        </svg>
      )
    }
  ];

  return (
    <div className="about-page">
      {/* Info Section */}
      <section className="info-section">
        <div className="info-container">
          <div className="info-sidebar">
            <h1 className="page-title">About</h1>
          </div>

          <div className="info-content">
            <div className="accordion-list">
              {/* Education */}
              <div className="accordion-item">
                <button
                  className={`accordion-header ${openSection === 'education' ? 'active' : ''}`}
                  onClick={() => toggleSection('education')}
                >
                  <span className="accordion-title">Education</span>
                  <span className="accordion-icon">+</span>
                </button>
                {openSection === 'education' && (
                  <div className="accordion-content">
                    {sections.education.map((item, index) => (
                      <div key={index} className="content-item">
                        <h3>{item.degree}</h3>
                        <p className="institution">{item.institution}</p>
                        <p className="year">{item.year}</p>
                        {item.details && <p className="details">{item.details}</p>}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Academic affiliations */}
              <div className="accordion-item">
                <button
                  className={`accordion-header ${openSection === 'affiliations' ? 'active' : ''}`}
                  onClick={() => toggleSection('affiliations')}
                >
                  <span className="accordion-title">Academic affiliations</span>
                  <span className="accordion-icon">+</span>
                </button>
                {openSection === 'affiliations' && (
                  <div className="accordion-content">
                    {sections.affiliations.map((item, index) => (
                      <div key={index} className="content-item">
                        <h3>{item.position}</h3>
                        <p className="institution">{item.institution}</p>
                        <p className="year">{item.period}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Professional Affiliations */}
              <div className="accordion-item">
                <button
                  className={`accordion-header ${openSection === 'professional' ? 'active' : ''}`}
                  onClick={() => toggleSection('professional')}
                >
                  <span className="accordion-title">Other Professional Affiliations</span>
                  <span className="accordion-icon">+</span>
                </button>
                {openSection === 'professional' && (
                  <div className="accordion-content">
                    {sections.professional.map((item, index) => (
                      <div key={index} className="content-item">
                        <h3>{item.role}</h3>
                        <p className="institution">{item.organization}</p>
                        <p className="year">{item.period}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="research-section">
        <div className="research-container">
          <div className="section-header">
            <h1 className="page-title">Research Areas</h1>
          </div>

          <div className="research-grid">
            {researchAreas.map((area, index) => (
              <div key={index} className="research-card">
                <div className="research-number">0{index + 1}</div>
                <div className="research-content">
                  <h3 className="research-title">{area.title}</h3>
                  <p className="research-description">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
