import './Publications.css';

const Publications = () => {
  const publications = [
    {
      year: 2026,
      title: 'Impact of type 2 diabetes on the development of dementia and death in Parkinson\'s disease',
      authors: 'Lee, S. H., Lee, J.*, Kim, M.^, et al.',
      journal: 'Parkinsonism & Related Disorders',
      link: 'https://doi.org/10.1016/j.parkreldis.2026.108187',
      image: '/publications/PRD2026.png'
    },
    {
      year: 2026,
      title: 'Geographically weighted cause-specific hazard model with application to prostate cancer',
      authors: 'Kim, M.^, Kim, Y-H., Wang, M., et al.',
      journal: 'Annals of the American Association of Geographers',
      link: 'https://doi.org/10.1080/24694452.2025.2551037',
      image: '/publications/AAAG2026.png'
    },
    {
      year: 2025,
      title: 'Long-term nonskeletal complications in patients with thyroid cancer and hypoparathyroidism post total thyroidectomy',
      authors: 'Ku, E. J., Lee, J.*, Yoo, W. S., Bae, J.^, Lee, E. K., & Ahn, H. Y.',
      journal: 'The Journal of Clinical Endocrinology & Metabolism',
      link: 'https://doi.org/10.1210/clinem/dgaf213',
      image: '/publications/JCEM2025.png'
    },
    {
      year: 2024,
      title: 'Weighting estimation in the cause-specific Cox regression with partially missing causes of failure',
      authors: 'Lee, J.*, Ogino, S., & Wang, M.*',
      journal: 'Statistics in Medicine',
      link: 'https://doi.org/10.1002/sim.10084',
      image: '/publications/SiM2024.png'
    }
  ];

  return (
    <section id="publications" className="publications">
      <div className="publications-container">
        <div className="publications-layout">
          <h2 className="section-title">Selected Publications</h2>

          <div className="publications-list">
            {publications.map((pub, index) => (
              <div key={index} className="publication-item">
                <div className="pub-image-container">
                  <img src={pub.image} alt={pub.title} className="pub-image" />
                </div>
                <div className="pub-content">
                  <h3 className="pub-title">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.title}</a>
                  </h3>
                  <div className="pub-meta">
                    <em className="pub-journal">{pub.journal}</em>
                    <span className="pub-year">{pub.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pub-footer">
          <a href="/publications" className="view-all-btn">View All Publications →</a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
