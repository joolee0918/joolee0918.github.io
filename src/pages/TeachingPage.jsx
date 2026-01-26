import './TeachingPage.css';

const TeachingPage = () => {
  const courses = [
    {
      code: '',
      title: 'Survival Analysis',
      semester: 'Spring 2021, Spring 2022, Fall 2024',
      level: 'Graduate',
      description: 'Advanced methods for time-to-event data analysis, including Kaplan-Meier curves, parametric models, and Cox models.'
    },
    {
      code: '',
      title: 'Longitudinal Data Analysis',
      semester: 'Fall 2021, Fall 2022, Spring 2025',
      level: 'Graduate',
      description: 'Statistical methods for analyzing repeated measurements over time including response profiles, covariance modeling, fixed and random effects models, marginal models, and generalized estimating equations.'
    },
    {
      code: '',
      title: 'Advanced Biostatistics',
      semester: 'Fall 2023',
      level: 'Graduate',
      description: 'Study design and statistical methods for clinical trials including protocol development, phase I-III trials, sample size calculation, sequential trials, and survival analysis with case studies using SAS/R.'
    },
    {
      code: '',
      title: 'Biostatistics',
      semester: 'Spring 2023, Fall 2025',
      level: 'Graduate',
      description: 'Core biostatistical methods for public health and medical research, including study design, inference, and causal inference.'
    },
    {
      code: '',
      title: 'Actuarial Statistics',
      semester: 'Spring 2022, Spring 2023, Spring 2025',
      level: 'Undergraduate',
      description: 'Actuarial mathematics for life insurance including survival models, life tables, insurance and annuity payments, premium calculation, and policy values.'
    },
    {
      code: '',
      title: 'Biostatistics',
      semester: 'Fall 2023, Fall 2024, Fall 2025',
      level: 'Undergraduate',
      description: 'Introduction to statistical methods for analyzing health and biological data, including descriptive statistics, inference, basic regression, and introduction to survival analysis.'
    },
    {
      code: '',
      title: 'Introduction to Statistics II',
      semester: 'Fall 2021, Fall 2022',
      level: 'Undergraduate',
      description: 'Continuation of introductory statistics covering inference, regression, ANOVA, and other fundamental statistical methods.'
    },
    {
      code: '',
      title: 'Linear Regression Models',
      semester: 'Spring 2021',
      level: 'Undergraduate',
      description: 'Theory and application of linear regression models including simple and multiple regression, model diagnostics, and variable selection.'
    }
  ];

  const workshops = [
    {
      title: 'Survival Analysis Workshop',
      date: 'January 24, 2024',
      location: 'Hanyang University, Seoul, Korea'
    },
    {
      title: 'Survival Analysis Workshop',
      date: 'March 15, 2023',
      location: 'Hanyang University, Seoul, Korea'
    },
    {
      title: 'Survival Analysis Workshop',
      date: 'January 6, 13, 20, 27, 2023',
      location: 'Seoul Medical Center, Seoul, Korea'
    },
    {
      title: 'Statistical Analysis of Bioassay Data',
      date: 'November 25, 2022',
      location: 'Korea Human Resource Development Institute for Health & Welfare, Chungcheongbuk-do, Korea'
    }
  ];

  return (
    <div className="teaching-page">
      <section className="teaching-section">
        <div className="teaching-container">
          <div className="section-header">
            <h2>Teaching</h2>
            <p className="section-subtitle">
              Courses taught and educational activities
            </p>
          </div>

          <div className="courses-list">
            {courses.map((course, index) => (
              <div key={index} className="course-item">
                <div className="course-header">
                  <div className="course-main">
                    <div className="course-code">{course.code}</div>
                    <h3 className="course-title">{course.title}</h3>
                  </div>
                  <span className="course-level">{course.level}</span>
                </div>
                <p className="course-description">{course.description}</p>
                <p className="course-semester">{course.semester}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="workshops-section">
        <div className="teaching-container">
          <div className="section-header">
            <h2>Workshops</h2>
          </div>

          <div className="courses-list">
            {workshops.map((workshop, index) => (
              <div key={index} className="course-item">
                <div className="course-header">
                  <div className="course-main">
                    <h3 className="course-title">{workshop.title}</h3>
                  </div>
                </div>
                <p className="course-description">{workshop.location}</p>
                <p className="course-semester">{workshop.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeachingPage;
