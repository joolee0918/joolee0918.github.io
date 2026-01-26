import './People.css';

const People = () => {
  const currentMembers = [
    {
      name: 'Janghyeon Bae (배장현)',
      role: 'Ph.D. Candidate',
      education: 'Department of Statistics and Data Science, Chung-Ang University',
      research: 'Survival Analysis, Biostatistics',
      skills: 'R, Python, SAS',
      email: 'pat1838@cau.ac.kr',
      github: 'https://github.com/JangHBae',
      photo: '/photos/bae.jpg'
    },
    {
      name: 'Minseok Kim (김민석)',
      role: 'M.S. Candidate',
      education: 'Department of Statistics and Data Science, Chung-Ang University',
      research: 'Survival Analysis, Biostatistics, Causal Inference',
      skills: 'R, Python, SPSS, SAS',
      email: 'ipad39@cau.ac.kr',
      github: 'https://github.com/softstat',
      photo: '/photos/kim.jpg'
    },
    {
      name: 'Sieun Lee (이시은)',
      role: 'M.S. Candidate',
      education: 'Department of Statistics and Data Science, Chung-Ang University',
      research: 'Survival Analysis, Biostatistics, Machine Learning',
      skills: 'R, Python, SPSS, SAS',
      email: 'tl106@cau.ac.kr',
      github: 'https://github.com/SIENN106',
      photo: '/photos/lee-sieun.jpg'
    },
    {
      name: 'Kyungeun Moon (문경은)',
      role: 'M.S. Candidate',
      education: 'Department of Statistics and Data Science, Chung-Ang University',
      research: 'Survival Analysis, Biostatistics',
      skills: 'Python, SAS',
      email: 'kyungeun319@cau.ac.kr',
      github: 'https://github.com/KYUNGEUN-319',
      photo: '/photos/moon.jpg'
    },
    {
      name: 'Cheonghyeok Oh (오청혁)',
      role: 'M.S. Candidate',
      education: 'Department of Statistics and Data Science, Chung-Ang University',
      research: 'Survival Analysis, Biostatistics, Spatial Analysis',
      skills: 'R, Python, SAS',
      email: 'moollifeo@cau.ac.kr',
      github: 'https://github.com/CheongHyeok',
      photo: '/photos/oh.jpg'
    },
    {
      name: 'Yoojin Lee (이유진)',
      role: 'M.S. Candidate',
      education: 'Department of Statistics and Data Science, Chung-Ang University',
      research: 'Survival Analysis, Biostatistics',
      skills: 'R, Python, SAS',
      email: 'lyoojin0215@cau.ac.kr',
      github: 'https://github.com/YOOJIN215',
      photo: '/photos/lee-yoojin.jpg'
    },
    {
      name: 'Jisoo Lee (이지수)',
      role: 'M.S. Candidate',
      education: 'Department of Statistics and Data Science, Chung-Ang University',
      research: 'Survival Analysis',
      skills: 'R, Python',
      email: 'jisoo37@cau.ac.kr',
      github: 'https://github.com/jisoo3737',
      photo: '/photos/lee-jisoo.jpg'
    }
  ];

  const alumni = [
    {
      name: 'Mina Kim (김민아)',
      role: 'Ph.D. (Feb 2025)',
      current: 'Korea Invention Promotion Association',
      email: 'kmakma@cau.ac.kr',
      contact: 'https://github.com/MINA-KIMKK'
    },
    {
      name: 'Subin Jang (장수빈)',
      role: 'M.S. (Feb 2025)',
      current: '',
      email: 'sb12234@cau.ac.kr',
      contact: 'https://github.com/z64b1n'
    },
    {
      name: 'SoYeon Kwon (권소연)',
      role: 'M.S. (Feb 2025)',
      current: '',
      email: 'ksoy120074@cau.ac.kr',
      contact: 'https://github.com/ksy0111'
    },
    {
      name: 'Jihye Hyun (현지혜)',
      role: 'M.S. (Feb 2024)',
      current: 'Ph.D. Student, University of Texas at San Antonio',
      email: 'zeze111111@cau.ac.kr',
      contact: 'https://github.com/JiHyebyZezE'
    },
    {
      name: 'Jeong-Soo Kim (김정수)',
      role: 'M.S. (Feb 2024)',
      current: 'DreamCIS Inc.',
      email: 'kjake2014@icloud.com',
      contact: 'https://github.com/JSK2022'
    },
    {
      name: 'Yu-Been Hwang (황유빈)',
      role: 'M.S. (Feb 2024)',
      current: 'LSK Global Pharma Services Co., Ltd.',
      email: 'kin0700@cau.ac.kr',
      contact: 'https://github.com/ubintz'
    },
    {
      name: 'Jinmo Kang (강진모)',
      role: 'M.S. (Aug 2023)',
      current: 'LG Uplus Corp.',
      email: 'gyaler09@gmail.com',
      contact: 'https://linkedin.com/in/gyaler'
    },
    {
      name: 'Da-Woon Kim (김다운)',
      role: 'M.S. (Feb 2023)',
      current: 'Seoul National University Hospital',
      email: 'wisehead@cau.ac.kr',
      contact: 'https://github.com/Daw-ny'
    }
  ];

  return (
    <section id="people" className="people">
      <div className="people-container">
        <div className="section-header">
          <h2>People</h2>
          <p className="section-subtitle">
            Our research group is dedicated to advancing statistical methodology in survival analysis, causal inference, and biostatistics with applications in healthcare and medical research.
          </p>
        </div>

        <div className="people-content">
          <div className="members-section">
            <h3 className="subsection-title">Current Members</h3>
            <div className="members-grid">
              {currentMembers.map((member, index) => (
                <div key={index} className="member-card">
                  <div className="member-avatar">
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} className="member-photo" />
                    ) : (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    )}
                  </div>
                  <div className="member-info">
                    <h4 className="member-name">{member.name}</h4>
                    <p className="member-role">{member.role}</p>
                    <p className="member-education">{member.education}</p>
                    <p className="member-research"><strong>Research Interest:</strong> {member.research}</p>
                    <div className="member-links">
                      <a href={`mailto:${member.email}`} className="member-email">{member.email}</a>
                      {member.github && (
                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="member-github">
                          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '16px', height: '16px', marginRight: '4px' }}>
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {alumni.length > 0 && (
            <div className="alumni-section">
              <h3 className="subsection-title">Alumni</h3>
              <div className="alumni-list">
                {alumni.map((alum, index) => (
                  <div key={index} className="alumni-item">
                    <div className="alumni-info">
                      <h4 className="alumni-name">{alum.name}</h4>
                      <p className="alumni-role">{alum.role}</p>
                    </div>
                    <p className="alumni-current">{alum.current}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default People;
