import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'PhD Student Name 1',
      role: 'PhD Candidate',
      research: 'Statistical Genetics, GWAS',
      email: 'student1@university.edu',
      color: 'gradient1'
    },
    {
      name: 'PhD Student Name 2',
      role: 'PhD Candidate',
      research: 'Clinical Trial Design',
      email: 'student2@university.edu',
      color: 'gradient2'
    },
    {
      name: 'PhD Student Name 3',
      role: 'PhD Candidate',
      research: 'Machine Learning, EHR',
      email: 'student3@university.edu',
      color: 'gradient3'
    },
    {
      name: 'Postdoc Name 1',
      role: 'Postdoctoral Fellow',
      research: 'High-Dimensional Analysis',
      email: 'postdoc1@university.edu',
      color: 'gradient4'
    },
    {
      name: 'MS Student Name 1',
      role: 'MS Student',
      research: 'Genomic Data Analysis',
      email: 'ms1@university.edu',
      color: 'gradient1'
    },
    {
      name: 'MS Student Name 2',
      role: 'MS Student',
      research: 'Survival Analysis',
      email: 'ms2@university.edu',
      color: 'gradient2'
    }
  ];

  return (
    <section id="team" className="team">
      <div className="team-container">
        <div className="section-header">
          <h2>Our Team</h2>
          <p className="section-subtitle">
            Meet the talented researchers in our lab working on cutting-edge biostatistics problems
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className={`avatar ${member.color}`}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-research">{member.research}</p>
              <a href={`mailto:${member.email}`} className="member-email">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email
              </a>
            </div>
          ))}
        </div>

        <div className="join-section">
          <h3>Join Our Lab</h3>
          <p>
            We are always looking for motivated students and postdocs interested in
            biostatistics and computational biology. If you're interested in joining our team,
            please reach out!
          </p>
          <a href="#contact" className="join-btn">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Team;
