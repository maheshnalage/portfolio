import React from 'react';

function Experience() { 
  const experiences = [
    {
      company: 'Kognivera IT Solutions Private Limited',
      role: 'SQL Intern',
      duration: 'Sept 2023 - Apr 2024',
      details: [
        'Optimized SQL queries, stored procedures, and scripts under senior developer guidance, improving database performance by 20%.',
        'Conducted data import, cleansing, and analysis to identify inconsistencies.',
        'Resolved 95% of database-related tickets by troubleshooting SQL queries and fixing errors, significantly reducing system downtime.'
      ]
    },
    {
      company: 'Innomatics Research Labs',
      role: 'Data Science Intern',
      duration: 'Sept 2024 - Dec 2024',
      details: [
        'Performed Exploratory Data Analysis (EDA) on real-world datasets, achieving 95% data cleanliness and generating insightful visualizations.',
        'Utilized Python (Pandas, NumPy, Matplotlib) for data preprocessing and extracting actionable insights.',
        'Created interactive dashboards and detailed reports using Power BI and Matplotlib.'
      ]
    }
  ];

  return (
    <div className="experience container">
      <h1>Experience</h1>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-card">
          <h3>{exp.company}</h3>
          <p><strong>{exp.role}</strong></p>
          <span>{exp.duration}</span>
          <ul>
            {exp.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;





