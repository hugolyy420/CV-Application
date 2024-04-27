import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faEnvelope,
  faPhone,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>CV Generator</h1>
      </header>
      <main className="content">
        <section className="input-container">
          <div className="input-card">
            <button className="card-button">
              <h2>Basic Information</h2>
              <FontAwesomeIcon className="chevron" icon={faChevronDown} />
            </button>
            <div className="form-container">
              <form action="">
                <div className="input-group">
                  <label htmlFor="first-name">
                    First Name
                    <input type="text" name="first-name" id="first-name" />
                  </label>
                </div>
                <div className="input-group">
                  <label htmlFor="last-name">
                    Last Name
                    <input type="text" name="last-name" id="last-name" />
                  </label>
                </div>
              </form>
            </div>
          </div>
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
                <h1>Hugo Leung</h1>
              </div>
              <div className="contact-information">
                <div className="contact-information-group">
                  <FontAwesomeIcon className="chevron fa-icon" icon={faEnvelope} />
                  <p>hugolyy@gmail.com</p>
                </div>
                <div className="contact-information-group">
                  <FontAwesomeIcon icon={faPhone} />
                  <p>+852 6995 2551</p>
                </div>
                <div className="contact-information-group">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p>Hong Kong</p>
                </div>
              </div>
            </div>
            <div className="summary-container">
              <h2>Summary</h2>
              <div className="summary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat facilis quas,
                excepturi eligendi ipsum voluptas non! Vel autem provident ipsa ipsum inventore non,
                facilis cum nobis officiis at enim! Dolore?
              </div>
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
