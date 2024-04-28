import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faEnvelope,
  faPhone,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import BasicInfoInputCard from './components/basic-info-component';
import SkillsInputCard from './components/skills-component';
import EducationInputCard from './components/education-component';
import './App.css';

function App() {
  const [basicInfo, setBasicInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    summary: ''
  });
  const [skills, setSkills] = useState([]);
  const [originalSkills, setOriginalSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [originalEducation, setOriginalEducation] = useState([]);

  const handleFirstNameChange = (event) => {
    const temp = { ...basicInfo };
    temp.firstName = event.target.value;
    setBasicInfo(temp);
  };

  const handleLastNameChange = (event) => {
    const temp = { ...basicInfo };
    temp.lastName = event.target.value;
    setBasicInfo(temp);
  };

  const handleEmailChange = (event) => {
    const temp = { ...basicInfo };
    temp.email = event.target.value;
    setBasicInfo(temp);
  };

  const handlePhoneChange = (event) => {
    const temp = { ...basicInfo };
    temp.phone = event.target.value;
    setBasicInfo(temp);
  };

  const handleLocationChange = (event) => {
    const temp = { ...basicInfo };
    temp.location = event.target.value;
    setBasicInfo(temp);
  };

  const handleSummaryChange = (event) => {
    const temp = { ...basicInfo };
    temp.summary = event.target.value;
    setBasicInfo(temp);
  };

  const handleAddSkillChange = () => {
    const temp = [...skills];
    setOriginalSkills(temp);
    const newSkill = { id: uuidv4(), skill: '', edit: true };
    setSkills([...temp, newSkill]);
  };

  const handleEditSkillChange = (id, event) => {
    const temp = [...skills];
    if (!event) setOriginalSkills(temp);
    const newTemp = temp.map((item) => {
      if (item.id === id && event) return { ...item, skill: event.target.value };
      if (item.id === id && !event) return { ...item, edit: true };
      return item;
    });
    setSkills(newTemp);
  };

  const handleCancelAddSkillChange = () => {
    setSkills(originalSkills);
  };

  const handleSubmitSkillChange = () => {
    const newTemp = skills.map((item) => {
      if (item.edit) return { ...item, edit: false };
      return item;
    });
    setSkills(newTemp);
  };

  const handleDeleteSkillChange = (id) => {
    const temp = [...skills];
    const newTemp = temp.filter((item) => item.id !== id);
    setSkills(newTemp);
  };

  const handleAddSchoolChange = () => {
    const temp = [...education];
    setOriginalEducation(temp);
    const newEducation = {
      id: uuidv4(),
      school: '',
      program: '',
      location: '',
      startingYear: '',
      endingYear: '',
      extraInfo: [],
      onGoing: false,
      edit: true
    };
    setEducation([...temp, newEducation]);
  };

  const handleSchoolChange = (id, event) => {
    const temp = [...education];
    const newTemp = temp.map((item) => {
      if (item.id === id && event) return { ...item, school: event.target.value };
      return item;
    });
    setEducation(newTemp);
  };

  const handleProgramChange = (id, event) => {
    const temp = [...education];
    const newTemp = temp.map((item) => {
      if (item.id === id && event) return { ...item, program: event.target.value };
      return item;
    });
    setEducation(newTemp);
  };

  const handleSchoolLocationChange = (id, event) => {
    const temp = [...education];
    const newTemp = temp.map((item) => {
      if (item.id === id && event) return { ...item, location: event.target.value };
      return item;
    });
    setEducation(newTemp);
  };

  const handleStartingYearChange = (id, event) => {
    const temp = [...education];
    const newTemp = temp.map((item) => {
      if (item.id === id && event) return { ...item, startingYear: event.target.value };
      return item;
    });
    setEducation(newTemp);
  };

  const handleEndingYearChange = (id, event) => {
    const temp = [...education];
    const newTemp = temp.map((item) => {
      if (item.id === id && event) return { ...item, endingYear: event.target.value };
      return item;
    });
    setEducation(newTemp);
  };

  const handleEducationCurrentStatusChange = (id, onGoing, event) => {
    const temp = [...education];
    const newTemp = temp.map((item) => {
      if (item.id === id && event) return { ...item, onGoing: !onGoing };
      return item;
    });
    setEducation(newTemp);
  };

  return (
    <>
      <header>
        <h1>CV Generator</h1>
      </header>
      <main className="content">
        <section className="input-container">
          <BasicInfoInputCard
            basicInfo={basicInfo}
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}
            handleEmailChange={handleEmailChange}
            handlePhoneChange={handlePhoneChange}
            handleLocationChange={handleLocationChange}
            handleSummaryChange={handleSummaryChange}
          />
          <SkillsInputCard
            handleAddSkillChange={handleAddSkillChange}
            handleEditSkillChange={handleEditSkillChange}
            handleCancelAddSkillChange={handleCancelAddSkillChange}
            handleSubmitSkillChange={handleSubmitSkillChange}
            handleDeleteSkillChange={handleDeleteSkillChange}
            skills={skills}
          />
          <EducationInputCard
            handleAddSchoolChange={handleAddSchoolChange}
            handleSchoolChange={handleSchoolChange}
            handleProgramChange={handleProgramChange}
            handleSchoolLocationChange={handleSchoolLocationChange}
            handleStartingYearChange={handleStartingYearChange}
            handleEndingYearChange={handleEndingYearChange}
            handleEducationCurrentStatusChange={handleEducationCurrentStatusChange}
            education={education}
          />
          <div className="input-card">
            <div className="card-button">
              <h2>Work Experience</h2>
              <FontAwesomeIcon className="fa-icon" icon={faChevronDown} />
            </div>
          </div>
        </section>
        <section className="resume-container">
          <div className="resume">
            <div className="basic-information-display-container">
              <div className="full-name">
                <h1>
                  {basicInfo.firstName} {basicInfo.lastName}
                </h1>
              </div>
              <div className="contact-information">
                <div className="contact-information-group">
                  {basicInfo.email && <FontAwesomeIcon className="fa-icon" icon={faEnvelope} />}
                  <p>{basicInfo.email}</p>
                </div>
                <div className="contact-information-group">
                  {basicInfo.phone && <FontAwesomeIcon className="fa-icon" icon={faPhone} />}
                  <p>{basicInfo.phone}</p>
                </div>
                <div className="contact-information-group">
                  {basicInfo.location && (
                    <FontAwesomeIcon className="fa-icon" icon={faLocationDot} />
                  )}
                  <p>{basicInfo.location}</p>
                </div>
              </div>
            </div>
            <div className="summary-container">
              {basicInfo.summary && <h2>Summary</h2>}
              <div className="summary">{basicInfo.summary}</div>
            </div>
            <div className="skills-container">
              {skills[0] && <h2>Skills</h2>}
              <div className="skills">
                <ul className="skills-list">
                  {skills.map((item) => (
                    <li key={item.id}>{item.skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="education-container">
              <h2>Education</h2>
              <div className="education">
                {education.map((item) => (
                  <div key={item.id} className="education-display-container">
                    <div className="education-heading">
                      <h3>
                        {item.school} {item.school && ','} {item.location}
                      </h3>
                      <p>
                        {item.startingYear} {item.startingYear && '-'}{' '}
                        {item.onGoing ? 'Present' : item.endingYear}
                      </p>
                    </div>
                    <div className="program">
                      <p>{item.program}</p>
                    </div>
                    <ul className="education-extra-info">
                      <li>First Honor</li>
                      <li>Exchange to Japan</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
