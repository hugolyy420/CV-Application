import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faEnvelope,
  faPhone,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import BasicInfoInputCard from './components/basic-info-component';
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

  const toggleFormDisplay = (event) => {
    if (event.target.tagName === 'BUTTON') {
      const form = event.target.nextElementSibling;
      form.classList.toggle('hide');
    } else {
      const form = event.target.parentNode.nextElementSibling;
      form.classList.toggle('hide');
    }
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
            toggleFormDisplay={toggleFormDisplay}
          />
          <div className="input-card">
            <div className="card-button">
              <h2>Skills</h2>
              <FontAwesomeIcon className="chevron" icon={faChevronDown} />
            </div>
          </div>
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
              <h2>Skills</h2>
              <div className="skills">
                <ul className="skills-list">
                  <li>Lorem, ipsum.</li>
                  <li>Lorem, ipsum.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem, ipsum.</li>
                  <li>Lorem, ipsum.</li>
                  <li>Lorem ipsum dolor sit.</li>
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
