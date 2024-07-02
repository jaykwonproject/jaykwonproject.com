import './App.css';
import CustomCard from './components/Card';
import NavBar from './components/NavBar';
import React from 'react';

function Resume({ isNavbarCollapsed, setIsNavbarCollapsed }) {
  return (
    <div className="App">
      {/* Header section */}
      <NavBar isCollapsed={isNavbarCollapsed} setIsCollapsed={setIsNavbarCollapsed} />

      {/* Body section */}
      <div className="body">
        <div className="resume-section">
          <h2>Work Experience</h2>
          {/* Add your work experience content here */}
          <CustomCard title="Job Title 1" content="Description of job 1" />
          <CustomCard title="Job Title 2" content="Description of job 2" />
        </div>

        <div className="resume-section">
          <h2>Projects</h2>
          {/* Add your projects content here */}
          <CustomCard title="Project 1" content="Description of project 1" />
          <CustomCard title="Project 2" content="Description of project 2" />
        </div>

        <div className="resume-section">
          <h2>Skills</h2>
          {/* Add your skills content here */}
          <ul>
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
          </ul>
        </div>

        <div className="resume-section">
          <h2>Education</h2>
          {/* Add your education content here */}
          <CustomCard title="Degree 1" content="Description of degree 1" />
          <CustomCard title="Degree 2" content="Description of degree 2" />
        </div>
      </div>
    </div>
  );
}

export default Resume;
