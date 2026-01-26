import './News.css';

const News = () => {
  const newsItems = [
    {
      date: '2026-01-24',
      title: 'Invited Seminar',
      description: 'Jooyoung Lee presented at the EPIWINTER on January 24, 2026 on "Understanding Target Trial Emulation for Clinicians". The talk focused on introducing target trial emulation methods to clinicians for stroke research.',
      category: 'Seminar'
    },
    {
      date: '2026-01-22',
      title: 'New Lab Member',
      description: 'We are delighted to welcome Hyunseo Park, an undergraduate student, to our research lab. Hyunseo will be working on biostatistical methods and data analysis projects.',
      category: 'Lab News'
    },
    {
      date: '2026-01-06',
      title: 'Paper Published in Parkinsonism & Related Disorders',
      description: 'Our research on "Impact of type 2 diabetes on the development of dementia and death in Parkinson\'s disease" has been published in Parkinsonism & Related Disorders. This study examines how type 2 diabetes affects dementia development and mortality in patients with Parkinson\'s disease.',
      category: 'Publication'
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Grant': 'grant',
      'Publication': 'publication',
      'Conference': 'conference',
      'Seminar': 'seminar',
      'Lab News': 'lab-news'
    };
    return colors[category] || 'default';
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="news" className="news">
      <div className="news-container">
        <div className="news-layout">
          <h2 className="news-section-title">News</h2>

          <div className="news-list">
            {newsItems.map((item, index) => (
              <div key={index} className="news-item">
                <div className="news-date">{formatDate(item.date)}</div>
                <div className="news-content">
                  <span className={`news-category ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
