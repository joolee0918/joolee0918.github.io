import { useState } from 'react';
import './PublicationsPage.css';

const PublicationsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTalksPage, setCurrentTalksPage] = useState(1);
  const publicationsPerPage = 15;
  const talksPerPage = 10;

  // Function to format author names with bold and symbols
  const formatAuthors = (authorsString) => {
    // Replace "Lee, J.*" with bold version (but not "Lee, J. K." or other initials)
    const formatted = authorsString
      .replace(/Lee, J\.\*(?!\s*[A-Z])/g, '<strong>Lee, J.*</strong>')
      .replace(/Lee, J\.(?!\s*[A-Z])/g, '<strong>Lee, J.</strong>')
      .replace(/Lee, J\*(?!\s*[A-Z])/g, '<strong>Lee, J*</strong>');

    return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
  };
  const publications = [
    {
      year: 2026,
      title: 'Impact of type 2 diabetes on the development of dementia and death in Parkinson\'s disease',
      authors: 'Lee, S. H., Lee, J.*, Kim, M.^, Kim D-W.^, Hwang Y. S., Park K. W., Jo. S., Kang J-H., Cook, R. J., & Chung S. J.',
      journal: 'Parkinsonism & Related Disorders 2026; 144: 108187',
      link: 'https://doi.org/10.1016/j.parkreldis.2026.108187'
    },
     {
      year: 2026,
      title: 'Geographically weighted cause-specific hazard model with application to prostate cancer',
      authors: 'Kim, M.^, Kim, Y-H., Wang, M., Choi, S. Y., & Lee, J.*',
      journal: 'Annals of the American Association of Geographers 2026; 116(1): 235–247',
      link: 'https://doi.org/10.1080/24694452.2025.2551037'
    },
    {
      year: 2025,
      title: 'Long-term nonskeletal complications in patients with thyroid cancer and hypoparathyroidism post total thyroidectomy',
      authors: 'Ku, E. J., Lee, J.*, Yoo, W. S., Bae, J.^, Lee, E. K., & Ahn, H. Y.',
      journal: 'The Journal of Clinical Endocrinology & Metabolism 2025; 110: 3538-3545',
      link: 'https://doi.org/10.1210/clinem/dgaf213'
    },
    {
      year: 2025,
      title: 'Risk factors and outcomes of Graves\' orbitopathy after radioactive iodine therapy',
      authors: 'Ahn, H.Y., Lee, J.*, Kim, M.^, & Lee, J. K.',
      journal: 'Endocrine 2025; 90: 248-255',
      link: 'https://doi.org/10.1007/s12020-025-04350-4'
    },
    {
      year: 2025,
      title: 'Risk of osteoporotic fractures among patients with thyroid cancer: A nationwide population-based cohort study',
      authors: 'Ku, E. J., Yoo, W. S., Hwang, Y. B.^, Jang, S.^, Lee, J., Moon, S., ... & Ahn, H. Y.',
      journal: 'Endocrinology and Metabolism 2025; 40(2): 225',
      link: 'https://doi.org/10.3803/EnM.2024.2101'
    },
    {
      year: 2025,
      title: 'Second primary cancer risk and survival in prostate cancer patients: A nationwide analysis',
      authors: 'Hyun, J.^, Lee, J.*, Nguyen, T. T., & Choi, S. Y.',
      journal: 'Prostate International 2025; 13(3): 148-154',
      link: 'https://doi.org/10.1016/j.prnil.2025.01.004'
    },
    {
      year: 2025,
      title: 'Statin dose trajectories and risk of Graves\' orbitopathy in patients with Graves\' disease using clustering algorithm',
      authors: 'Kang, J.^, Lee, J. K., Ahn, H. Y., & Lee, J.*',
      journal: 'J Health Info Stat 2025; 50(1): 104-112',
      link: 'https://doi.org/10.21032/jhis.2025.50.1.104'
    },
    {
      year: 2025,
      title: 'Standing balance test predicts the Berg Balance Scale score in patients with stroke using principal component analysis',
      authors: 'Cho, J., Ha, S., Lee, J., Kim, M.^, & Kim, H.',
      journal: 'Scientific Reports 2025; 15: 17653',
      link: 'https://doi.org/10.1038/s41598-025-99710-5'
    },
    {
      year: 2025,
      title: 'Osteoporotic Fracture Risk in Hypoparathyroidism Following Total Thyroidectomy: A Retrospective Nationwide Cohort Study',
      authors: 'Ku, E. J., Yoo, W. S., Hwang, Y. B.^, Jang S.^, Lee, J., Moon S., Lee., E. K., & Ahn, H. Y.',
      journal: 'European Journal of Endocrinology 2025; 193(1): 39-47',
      link: 'https://doi.org/10.1093/ejendo/lvaf128'
    },
    {
      year: 2025,
      title: 'Impact of regular cystoscopy on prognosis in non-muscle-invasive bladder cancer: A nationwide study',
      authors: 'Kim, J. S.^, Lee, J.*, Lee, C. U., Nguyen, T. T., & Choi, S. Y.',
      journal: 'Investigative and Clinical Urology 2025; 66(4): 302-310',
      link: 'https://doi.org/10.4111/icu.20240362'
    },
    {
      year: 2024,
      title: 'Mortality in elderly Parkinson\'s disease patients with long-term care needs: A nationwide population-based study in Korea',
      authors: 'Lee, S. H., Kim, M.^, Heo, W. C., Kim, J. G., Lee, J. S., Kang, J. H., & Lee, J.*',
      journal: 'Parkinsonism & Related Disorders 2024; 128: 107150',
      link: 'https://doi.org/10.1016/j.parkreldis.2024.107150'
    },
    {
      year: 2024,
      title: 'Graves\' orbitopathy development in thyroid cancer patients: A 16-year nationwide cohort study in South Korea',
      authors: 'Kim, M., Lee, J.*, Hwang, Y.B.^, Kang, J.^, Ahn, H. Y., & Lee, J. K.',
      journal: 'Eye 2024; 38: 2955–2959',
      link: 'https://doi.org/10.1038/s41433-024-03197-9'
    },
    {
      year: 2024,
      title: 'Stroke walking and balance characteristics via principal component analysis',
      authors: 'Cho, J., Ha, S., Lee, J., Kim, M.^, & Kim, H.',
      journal: 'Scientific Reports 2024; 14: 10465',
      link: 'https://doi.org/10.1038/s41598-024-60943-5'
    },
    {
      year: 2024,
      title: 'Preoperative smoking and robot-assisted radical cystectomy outcomes & complications in multicenter KORARC database',
      authors: 'Choi, J., Lee, J., Hwang, Y.B.^ et al.',
      journal: 'Scientific Reports 2024; 14: 10550',
      link: 'https://doi.org/10.1038/s41598-024-61005-6'
    },
    {
      year: 2024,
      title: 'Weighting estimation in the cause-specific Cox regression with partially missing causes of failure',
      authors: 'Lee, J.*, Ogino, S., & Wang, M.',
      journal: 'Statistics in Medicine 2024; 43(13): 2575-2591',
      link: 'https://doi.org/10.1002/sim.10084'
    },
    {
      year: 2024,
      title: 'Optimal timing for the first cystoscopic follow-up using time-to-treatment initiation analysis of oncologic outcomes in primary non-muscle invasive bladder cancer',
      authors: 'Kim, J. S.^, Lee, J.*, Nguyen, T. T., & Choi, S. Y.',
      journal: 'Scientific Reports 2024; 14: 8440',
      link: 'https://doi.org/10.1038/s41598-024-58809-x'
    },
    {
      year: 2024,
      title: 'Increased risk of diabetes mellitus and hyperlipidemia in patients with differentiated thyroid cancer',
      authors: 'Ahn, H. Y., Lee, J.*, Kang, J.^, & Lee, E. K.',
      journal: 'European Journal of Endocrinology 2024; 190(3): 248-255',
      link: 'https://doi.org/10.1093/ejendo/lvae026'
    },
    {
      year: 2024,
      title: 'Factors to predict recurrence after epidural blood patch in patients with spontaneous intracranial hypotension',
      authors: 'Lee, S. H., Lee, J.*, Kim, D. W.^, Kim, D. H., Ahn, S. J., Choi, M. G., ... & Chung, S. J.',
      journal: 'Headache: The Journal of Head and Face Pai 2024; 64: 380-389',
      link: 'https://doi.org/10.1111/head.14703'
    },
    {
      year: 2023,
      title: 'Sex-specific risk factors associated with graves\' orbitopathy in Korean patients with newly diagnosed graves\' disease',
      authors: 'Lee, J.*, Kang, J.^, Ahn, H. Y., & Lee, J. K.',
      journal: 'Eye 2023; 37(16): 3382-3391',
      link: 'https://doi.org/10.1038/s41433-023-02513-z'
    },
    {
      year: 2023,
      title: 'Uncertainty Evaluation for the Quantification of Urinary Amphetamine and 4-Hydroxyamphetamine Using Liquid Chromatography–Tandem Mass Spectrometry',
      authors: 'Kim, S. Y., Shin, D. W., Hyun, J., Kwon, N. H., Cheong, J. C., Paeng, K. J., Lee, J.*, and Kim, J. Y.',
      journal: 'Molecules 2023; 28(19): 6803',
      link: 'https://doi.org/10.3390/molecules28196803'
    },
    {
      year: 2023,
      title: 'Urinary tract infection after radiation therapy or radical prostatectomy on the prognosis of patients with prostate cancer: a population-based study',
      authors: 'Hyun, J.^, Ha, M. S., Oh, S. Y., Tae, J. H., Chi, B. H., Chang, I. H., ..., Lee, J.*, and Choi, S. Y.',
      journal: 'BMC Cancer 2023; 23(1): 1-11',
      link: 'https://doi.org/10.1186/s12885-023-10869-4'
    },
    {
      year: 2023,
      title: 'Penalized Cox regression analysis from Parkinson\'s disease to freezing of gait using multiple kernels',
      authors: 'Kim, D.W.^, Lee, J.*',
      journal: 'J Health Info Stat 2023; 48(10): 81-88',
      link: 'https://doi.org/10.21032/jhis.2023.48.1.81'
    },
    {
      year: 2023,
      title: 'Bilateral ankle deformities affects gait kinematics in chronic stroke patients',
      authors: 'Kim, H., Cho, J. E., Seo, K. J. and Lee, J.*',
      journal: 'Frontiers in Neurology 2023; 14',
      link: 'https://doi.org/10.3389/fneur.2023.1078064'
    },
    {
      year: 2022,
      title: 'Predictive model for Graves\' ophthalmopathy in patients with new-onset Graves\' disease',
      authors: 'Ahn, H. Y., Lee, J.* and Lee, J. K.',
      journal: 'Thyroid 2022; 32(12): 1559-1567',
      link: 'https://doi.org/10.1089/thy.2022.0280'
    },
    {
      year: 2022,
      title: 'Clinical factors and dopamine transporter availability for the prediction of outcomes after globus pallidus deep brain stimulation in Parkinson\'s disease',
      authors: 'Lee, S. H., Kim, M.^, Lee, J., Kim, J. W., Kim, M. S., Jo, S., ... and Chung, S. J.',
      journal: 'Scientific Reports 2022; 12(1): 1-8',
      link: 'https://doi.org/10.1038/s41598-022-19150-3'
    },
    {
      year: 2022,
      title: 'Factors correlated with therapeutic effects of globus pallidus deep brain stimulation on freezing of gait in advanced Parkinson\'s disease: A pilot study',
      authors: 'Lee, S. H., Lee, J.*, Kim, M. S., Hwang, Y. S., Jo, S., Park, K. W., ... , and Chung, S. J.',
      journal: 'Parkinsonism & Related Disorders 2022; 94: 111-116',
      link: 'https://doi.org/10.1016/j.parkreldis.2021.12.005'
    },
    {
      year: 2022,
      title: 'Risk of metachronous colorectal advanced neoplasia and cancer in patients with 3–4 non-advanced adenomas at index colonoscopy: a systematic review and meta-analysis',
      authors: 'Park, S., Jeon, S. R., Kim, H. G., Jung, Y., Kwak, M. S., Kim, S. Y., ... ,Lee, J.* and Choi, M.',
      journal: 'The American Journal of Gastroenterology 2022; 117(4): 588-602',
      link: 'https://doi.org/10.14309/ajg.0000000000001682'
    },
    {
      year: 2022,
      title: 'Delay in the effect of restricting community mobility on the spread of COVID-19 during the first wave in the United States',
      authors: 'He, S., Lee, J.*, Langworthy, B., Xin, J., James, P., Yang, Y., and Wang, M.',
      journal: 'Open Forum Infectious Diseases 2022; 9(1)',
      link: 'https://doi.org/10.1093/ofid/ofab586'
    },
    {
      year: 2021,
      title: 'Estimation and inference for the population attributable risk in the presence of misclassification',
      authors: 'Wong, B., Lee, J., Spiegelman, D. and Wang, M.',
      journal: 'Biostatistics 2021; 22(4): 805-818',
      link: 'https://doi.org/10.1093/biostatistics/kxz067'
    },
    {
      year: 2021,
      title: 'The illness-death model for family studies',
      authors: 'Lee, J.* and Cook, R. J.',
      journal: 'Biostatistics 2021; 22(3): 482-503',
      link: 'http://10.1093/biostatistics/kxz048'
    },
    {
      year: 2020,
      title: 'Multistate analysis from cross-sectional and auxiliary samples',
      authors: 'Zeng, L., Cook, R. J. and Lee, J.*',
      journal: 'Statistics in Medicine 2020; 39(4): 387-408',
      link: 'https://doi.org/10.1002/sim.8411'
    },
    {
      year: 2019,
      title: 'On estimands arising from misspecified semiparametric rate‐based analysis of recurrent episodic conditions',
      authors: 'Lee, J.* and Cook, R. J.',
      journal: 'Statistics in Medicine 2019; 38(25): 4977-4998',
      link: 'https://doi.org/10.1002/sim.8345'
    },
    {
      year: 2019,
      title: 'Dependence modeling for multi‐type recurrent events via copulas',
      authors: 'Lee, J.* and Cook, R. J.',
      journal: 'Statistics in Medicine 2019; 38(21): 4066-4082',
      link: 'https://doi.org/10.1002/sim.8283'
    }
  ];

  const talks = [
     {
      year: 2026,
      date: 'January 24, 2026',
      title: 'Understanding Target Trial Emulation for clinicians',
      event: 'EPIWINTER 2026',
      type: 'Invited Talk',
      location: 'Seoul, Korea'
    },
    {
      year: 2025,
      date: 'December 20, 2025',
      title: 'Causal inference for survival data in continuous-time under time-varying treatment and confounders',
      event: 'The Korean Statistical Society Winter Conference',
      type: 'Invited Talk',
      location: 'Seoul, Korea'
    },
    {
      year: 2025,
      date: 'December 1, 2025',
      title: 'A comparative study of approaches to mitigate immortal time bias',
      event: 'Sookmyung Women\'s University',
      type: 'Invited Talk',
      location: 'Seoul, Korea'
    },
    {
      year: 2025,
      date: 'October 14, 2025',
      title: 'A comparative study of approaches to mitigate immortal time bias',
      event: 'International Day Of Women in Statistics and Data Science',
      type: 'Conference Presentation',
      location: 'Virtual Conference'
    },
    {
      year: 2025,
      date: 'June 20, 2025',
      title: 'A comparative study of approaches to mitigate immortal time bias',
      event: 'The Korean Statistical Society Summer Conference',
      type: 'Conference Presentation',
      location: 'Gyeongju, Korea'
    },
    {
      year: 2025,
      date: 'April 9, 2025',
      title: 'A penalized functional linear Cox regression model for spatially defined environmental exposure with an estimated buffer distance',
      event: 'MECE Research Meeting',
      type: 'Invited Talk',
      location: 'Virtual Meeting'
    },
    {
      year: 2023,
      date: 'November 10, 2023',
      title: 'Big Data Analysis using NHISS Database',
      event: 'CAU Urologic Governance and Organoid Meeting',
      type: 'Invited Talk',
      location: 'Gwangmyeong-si, Korea'
    },
    {
      year: 2022,
      date: 'June 10, 2022',
      title: 'A penalized functional linear Cox regression model for identifying a buffering distance for environmental exposure assessment',
      event: 'Korea University',
      type: 'Invited Talk',
      location: 'Seoul, Korea'
    },
    {
      year: 2022,
      date: 'May 10, 2022',
      title: 'A penalized functional linear Cox regression model for identifying a buffering distance for environmental exposure assessment',
      event: 'Asan Medical Center',
      type: 'Invited Talk',
      location: 'Seoul, Korea'
    },
    {
      year: 2020,
      date: 'August 24-27, 2020',
      title: 'Estimation of a buffering window in functional linear Cox regression models for spatially-defined environmental exposure',
      event: 'International Society for Environmental Epidemiology',
      type: 'Poster',
      location: 'Virtual Conference'
    },
    {
      year: 2020,
      date: 'March 23, 2020',
      title: 'Estimation of a buffering window in functional linear Cox regression models for spatially-defined environmental exposure',
      event: 'Eastern North American Region International Biometric Society',
      type: 'Poster',
      location: 'Virtual Conference'
    },
    {
      year: 2019,
      date: 'November 5, 2019',
      title: 'Weighting estimators for Cox regression for studying etiological heterogeneity with partially observed multiple markers',
      event: 'Dalla Lana School of Public Health, University of Toronto',
      type: 'Invited Seminar',
      location: 'Toronto, ON, Canada'
    },
    {
      year: 2019,
      date: 'July 29, 2019',
      title: 'Weighting estimators for Cox regression for studying etiological heterogeneity with partially observed multiple markers',
      event: 'Joint Statistical Meeting',
      type: 'Conference Presentation',
      location: 'Denver, CO, U.S.A'
    },
    {
      year: 2018,
      date: 'August 9, 2018',
      title: 'The illness-death model for family studies',
      event: 'Banff International Research Station',
      type: 'Invited Talk',
      location: 'Calgary, AB, Canada'
    },
    {
      year: 2017,
      date: 'July 10, 2017',
      title: 'Bias in rate-based analysis of recurrent exacerbations due to symptom duration',
      event: 'International Society for Clinical Biostatistics',
      type: 'Conference Presentation',
      location: 'Vigo, Spain'
    },
    {
      year: 2017,
      date: 'July 5, 2017',
      title: 'Bias in rate-based analysis of recurrent exacerbations due to symptom duration',
      event: 'Novartis',
      type: 'Invited Talk',
      location: 'Basel, Switzerland'
    },
    {
      year: 2017,
      date: 'June 14, 2017',
      title: 'Multi-type recurrent event analysis',
      event: 'Statistical Society of Canada Conference',
      type: 'Conference Presentation',
      location: 'Winnipeg, MB, Canada'
    }
  ];

  // Calculate pagination for publications
  const totalPages = Math.ceil(publications.length / publicationsPerPage);
  const indexOfLastPub = currentPage * publicationsPerPage;
  const indexOfFirstPub = indexOfLastPub - publicationsPerPage;
  const currentPublications = publications.slice(indexOfFirstPub, indexOfLastPub);

  // Calculate pagination for talks
  const totalTalksPages = Math.ceil(talks.length / talksPerPage);
  const indexOfLastTalk = currentTalksPage * talksPerPage;
  const indexOfFirstTalk = indexOfLastTalk - talksPerPage;
  const currentTalks = talks.slice(indexOfFirstTalk, indexOfLastTalk);

  const groupedPublications = currentPublications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {});

  const groupedTalks = currentTalks.reduce((acc, talk) => {
    if (!acc[talk.year]) {
      acc[talk.year] = [];
    }
    acc[talk.year].push(talk);
    return acc;
  }, {});

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTalksPageChange = (pageNumber) => {
    setCurrentTalksPage(pageNumber);
    window.scrollTo({ top: document.querySelector('.talks-section').offsetTop - 100, behavior: 'smooth' });
  };

  return (
    <section className="publications-page">
      <div className="publications-section">
        <div className="publications-container">
          <div className="section-header">
            <h2>Publications</h2>
            <p className="section-subtitle">
              Peer-reviewed publications and presentations from our research group
            </p>
          </div>

          <div className="publications-content">
            <div className="publications-legend" style={{ marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>
              * denotes first/corresponding authorship | ^ denotes trainee
            </div>
            {Object.keys(groupedPublications)
              .sort((a, b) => b - a)
              .map((year) => (
                <div key={year} className="year-group">
                  <h4 className="year-header">{year}</h4>
                  {groupedPublications[year].map((pub, index) => (
                    <div key={index} className="publication-item">
                      <div className="pub-content">
                        <h5 className="pub-title">
                          <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.title}</a>
                        </h5>
                        <p className="pub-authors">{formatAuthors(pub.authors)}</p>
                        <p className="pub-journal">{pub.journal}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}

            {/* Pagination Controls */}
            <div className="pagination">
              <button
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="talks-section">
        <div className="talks-container">
          <div className="section-header">
            <h2>Talks</h2>
          </div>

          <div className="talks-content">
            {Object.keys(groupedTalks)
              .sort((a, b) => b - a)
              .map((year) => (
                <div key={year} className="year-group">
                  <h4 className="year-header">{year}</h4>
                  {groupedTalks[year].map((talk, index) => (
                    <div key={index} className="talk-item">
                      <h5 className="talk-title">{talk.title}</h5>
                      <p className="talk-event">{talk.event}</p>
                      <div className="talk-meta">
                        <span className="talk-type">{talk.type}</span>
                        <span className="talk-date">{talk.date}</span>
                        <span className="talk-location">{talk.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}

            {/* Pagination Controls for Talks */}
            <div className="pagination">
              <button
                className="pagination-btn"
                onClick={() => handleTalksPageChange(currentTalksPage - 1)}
                disabled={currentTalksPage === 1}
              >
                Previous
              </button>
              {[...Array(totalTalksPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`pagination-btn ${currentTalksPage === index + 1 ? 'active' : ''}`}
                  onClick={() => handleTalksPageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className="pagination-btn"
                onClick={() => handleTalksPageChange(currentTalksPage + 1)}
                disabled={currentTalksPage === totalTalksPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsPage;
