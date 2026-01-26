import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import PeoplePage from './pages/PeoplePage';
import TeachingPage from './pages/TeachingPage';
import PublicationsPage from './pages/PublicationsPage';
import SoftwarePage from './pages/SoftwarePage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/teaching" element={<TeachingPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/software" element={<SoftwarePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
