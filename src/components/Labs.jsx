import './Labs.css';

const Labs = () => {
  const researchAreas = [
    {
      title: 'Statistical Genetics',
      icon: '🧬',
      description: 'Developing novel statistical methods for GWAS, rare variant analysis, and polygenic risk scores to understand the genetic basis of complex diseases.',
      topics: ['GWAS', 'Variant Analysis', 'Risk Prediction']
    },
    {
      title: 'Clinical Trials',
      icon: '🏥',
      description: 'Design and analysis of adaptive clinical trials, basket trials, and precision medicine trials with a focus on oncology and rare diseases.',
      topics: ['Adaptive Designs', 'Precision Medicine', 'Sequential Analysis']
    },
    {
      title: 'Machine Learning in Healthcare',
      icon: '🤖',
      description: 'Application of machine learning and deep learning methods to electronic health records, medical imaging, and multi-omics data.',
      topics: ['Deep Learning', 'EHR Analysis', 'Multi-omics Integration']
    }
  ];

  return (
    <section id="labs" className="labs">
      <div className="labs-container">
        <div className="section-header">
          <h2>Research Areas</h2>
          <p className="section-subtitle">
            Our lab focuses on developing cutting-edge statistical methods and computational tools
            to address challenges in modern biomedical research.
          </p>
        </div>

        <div className="research-grid">
          {researchAreas.map((area, index) => (
            <div key={index} className="research-card">
              <h3>{area.title}</h3>
              <p className="card-description">{area.description}</p>
              <div className="topics">
                {area.topics.map((topic, idx) => (
                  <span key={idx} className="topic-tag">{topic}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Labs;
