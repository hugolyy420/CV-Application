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
          <div className="input-card">
            <div className="card-button">
              <h2>Education</h2>
              <FontAwesomeIcon className="chevron" icon={faChevronDown} />
            </div>
          </div>
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
              <div className="education"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
