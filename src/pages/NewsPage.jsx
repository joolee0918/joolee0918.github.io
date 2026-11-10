import { newsItems as allNews } from '../data/news';
import './NewsPage.css';

const NewsPage = () => {
  const newsItems = allNews;

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
    const [year, month, day] = dateString.split('-').map(Number);
    if (!day) {
      // Month-only date ('YYYY-MM'): show month and year
      return new Date(year, month - 1, 1).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    }
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(year, month - 1, day).toLocaleDateString('en-US', options);
  };

  return (
    <section className="news-page">
      <div className="news-container">
        <div className="section-header">
          <h2>News</h2>
          <p className="section-subtitle">
            Latest announcements, publications, awards, and events from our research group
          </p>
        </div>

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
    </section>
  );
};

export default NewsPage;
