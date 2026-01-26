import './Teaching.css';

const Teaching = () => {
  const courses = [
    {
      code: 'BIOS 601',
      title: 'Introduction to Biostatistics',
      semester: 'Fall 2024',
      level: 'Graduate',
      description: 'Fundamental concepts in biostatistics including probability, hypothesis testing, regression analysis, and study design.'
    },
    {
      code: 'BIOS 702',
      title: 'Statistical Methods in Clinical Trials',
      semester: 'Spring 2024',
      level: 'Graduate',
      description: 'Advanced topics in clinical trial design, adaptive methods, and analysis of longitudinal data in clinical research.'
    },
    {
      code: 'BIOS 790',
      title: 'Machine Learning in Biomedical Research',
      semester: 'Fall 2023',
      level: 'Graduate',
      description: 'Application of machine learning techniques to biomedical data, including deep learning, ensemble methods, and model interpretation.'
    }
  ];

  return (
    <section id="teaching" className="teaching">
      <div className="teaching-container">
        <div className="section-header">
          <h2>Teaching</h2>
          <p className="section-subtitle">
            Courses taught and educational activities
          </p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-header">
                <div>
                  <h3 className="course-title">{course.title}</h3>
                  <div className="course-code">{course.code}</div>
                </div>
                <span className="course-level">{course.level}</span>
              </div>
              <p className="course-description">{course.description}</p>
              <div className="course-semester">{course.semester}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teaching;
