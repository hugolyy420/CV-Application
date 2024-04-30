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
import WorkInputCard from './components/work-experience-component';
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
  const [workExperience, setWorkExperience] = useState([]);
  const [originalWorkExperience, setOriginalWorkExperience] = useState([]);
  const [skillsEdit, setSkillsEdit] = useState(false);
  const [educationEdit, setEducationEdit] = useState(false);
  const [workExperienceEdit, setWorkExperienceEdit] = useState(false);

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

  const handleSubmitEducationChange = () => {
    const newTemp = education.map((item) => {
      if (item.edit) return { ...item, edit: false };
      return item;
    });
    setEducation(newTemp);
  };

  const handleEditEducationChange = (id) => {
    const temp = [...education];
    setOriginalEducation(temp);
    const newTemp = temp.map((item) => {
      if (item.id === id) return { ...item, edit: true };
      return item;
    });
    setEducation(newTemp);
  };

  const handleCancelAddEducationChange = () => {
    setEducation(originalEducation);
  };

  const handleDeleteEducationChange = (id) => {
    const temp = [...education];
    const newTemp = temp.filter((item) => item.id !== id);
    setEducation(newTemp);
  };

  const handleAddEducationExtraInfoChange = (id) => {
    const temp = [...education];
    setOriginalEducation(temp);
    const newEducationExtraInfo = { id: uuidv4(), extraInfo: '', edit: true };
    const newTemp = temp.map((item) => {
      if (item.id === id) {
        const extraInfo = [...item.extraInfo];
        return { ...item, extraInfo: [...extraInfo, newEducationExtraInfo] };
      }
      return item;
    });
    setEducation(newTemp);
  };

  const handleEducationExtraInfoChange = (id, event) => {
    const temp = [...education];
    const newTemp = temp.map((item) => {
      if (item.id === id) {
        const newExtraInfo = item.extraInfo.map((subItem) => {
          if (subItem.edit) return { ...subItem, extraInfo: event.target.value };
          return subItem;
        });
        return { ...item, extraInfo: newExtraInfo };
      }
      return item;
    });
    setEducation(newTemp);
  };

  const handleSubmitEducationExtraInfoChange = () => {
    const temp = [...education];
    const newTemp = temp.map((item) => {
      const newExtraInfo = item.extraInfo.map((subItem) => {
        if (subItem.edit) return { ...subItem, edit: false };
        return subItem;
      });
      return { ...item, extraInfo: newExtraInfo };
    });
    setEducation(newTemp);
  };

  const handleEditEducationExtraInfoChange = (id) => {
    const temp = [...education];
    setOriginalEducation(temp);
    const newTemp = temp.map((item) => {
      const newExtraInfo = item.extraInfo.map((subItem) => {
        if (subItem.id === id) return { ...subItem, edit: true };
        return subItem;
      });
      return { ...item, extraInfo: newExtraInfo };
    });
    setEducation(newTemp);
  };

  const handleDeleteEducationExtraInfoChange = (id) => {
    const temp = [...education];
    const newTemp = temp.map((item) => {
      const newExtraInfo = item.extraInfo.filter((subItem) => subItem.id !== id);
      return { ...item, extraInfo: newExtraInfo };
    });
    setEducation(newTemp);
  };

  const handleAddWorkChange = () => {
    const temp = [...workExperience];
    setOriginalWorkExperience(temp);
    const newWork = {
      id: uuidv4(),
      jobTitle: '',
      company: '',
      location: '',
      startingYear: '',
      endingYear: '',
      jobDuty: [],
      onGoing: false,
      edit: true
    };
    setWorkExperience([...temp, newWork]);
  };

  const handleJobTitleChange = (id, event) => {
    const temp = [...workExperience];
    const newTemp = temp.map((item) => {
      if (item.id === id && event) return { ...item, jobTitle: event.target.value };
      return item;
    });
    setWorkExperience(newTemp);
  };

  const handleCompanyChange = (id, event) => {
    const temp = [...workExperience];
    const newTemp = temp.map((item) => {
      if (item.id === id && event) return { ...item, company: event.target.value };
      return item;
    });
    setWorkExperience(newTemp);
  };

  const handleCompanyLocationChange = (id, event) => {
    const temp = [...workExperience];
    const newTemp = temp.map((item) => {
      if (item.id === id && event) return { ...item, location: event.target.value };
      return item;
    });
    setWorkExperience(newTemp);
  };

  const handleJobStartingYearChange = (id, event) => {
    const temp = [...workExperience];
    const newTemp = temp.map((item) => {
      if (item.id === id && event) return { ...item, startingYear: event.target.value };
      return item;
    });
    setWorkExperience(newTemp);
  };

  const handleJobEndingYearChange = (id, event) => {
    const temp = [...workExperience];
    const newTemp = temp.map((item) => {
      if (item.id === id && event) return { ...item, endingYear: event.target.value };
      return item;
    });
    setWorkExperience(newTemp);
  };

  const handleJobCurrentStatusChange = (id, onGoing, event) => {
    const temp = [...workExperience];
    const newTemp = temp.map((item) => {
      if (item.id === id && event) return { ...item, onGoing: !onGoing };
      return item;
    });
    setWorkExperience(newTemp);
  };

  const handleAddJobDutyChange = (id) => {
    const temp = [...workExperience];
    setOriginalWorkExperience(temp);
    const newJobDuty = { id: uuidv4(), jobDuty: '', edit: true };
    const newTemp = temp.map((item) => {
      if (item.id === id) {
        const jobDuty = [...item.jobDuty];
        return { ...item, jobDuty: [...jobDuty, newJobDuty] };
      }
      return item;
    });
    setWorkExperience(newTemp);
  };

  const handleJobDutyChange = (id, event) => {
    const temp = [...workExperience];
    const newTemp = temp.map((item) => {
      if (item.id === id) {
        const newJobDuty = item.jobDuty.map((subItem) => {
          if (subItem.edit) return { ...subItem, jobDuty: event.target.value };
          return subItem;
        });
        return { ...item, jobDuty: newJobDuty };
      }
      return item;
    });
    setWorkExperience(newTemp);
  };

  const handleSubmitWorkChange = () => {
    const newTemp = workExperience.map((item) => {
      if (item.edit) return { ...item, edit: false };
      return item;
    });
    setWorkExperience(newTemp);
  };

  const handleEditWorkChange = (id) => {
    const temp = [...workExperience];
    setOriginalWorkExperience(temp);
    const newTemp = temp.map((item) => {
      if (item.id === id) return { ...item, edit: true };
      return item;
    });
    setWorkExperience(newTemp);
  };

  const handleCancelAddWorkChange = () => {
    setWorkExperience(originalWorkExperience);
  };

  const handleDeleteWorkChange = (id) => {
    const temp = [...workExperience];
    const newTemp = temp.filter((item) => item.id !== id);
    setWorkExperience(newTemp);
  };

  const handleSubmitJobDutyChange = () => {
    const temp = [...workExperience];
    const newTemp = temp.map((item) => {
      const newJobDuty = item.jobDuty.map((subItem) => {
        if (subItem.edit) return { ...subItem, edit: false };
        return subItem;
      });
      return { ...item, jobDuty: newJobDuty };
    });
    setWorkExperience(newTemp);
  };

  const handleEditJobDutyChange = (id) => {
    const temp = [...workExperience];
    setOriginalWorkExperience(temp);
    const newTemp = temp.map((item) => {
      const newJobDuty = item.jobDuty.map((subItem) => {
        if (subItem.id === id) return { ...subItem, edit: true };
        return subItem;
      });
      return { ...item, jobDuty: newJobDuty };
    });
    setWorkExperience(newTemp);
  };

  const handleDeleteJobDutyChange = (id) => {
    const temp = [...workExperience];
    const newTemp = temp.map((item) => {
      const newJobDuty = item.jobDuty.filter((subItem) => subItem.id !== id);
      return { ...item, jobDuty: newJobDuty };
    });
    setWorkExperience(newTemp);
  };

  const loadExample = () => {
    const exampleBasicInfo = {
      firstName: 'Ken',
      lastName: 'Adams',
      email: 'kenadams@gmail.com',
      phone: '9883 2343',
      location: 'Hong Kong',
      summary:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, blanditiis? Sint quisquam repellat quasi sunt labore delectus totam asperiores! Nesciunt commodi dolore cupiditate dolores nihil? Assumenda debitis consectetur cum illo!'
    };
    const exampleSkills = [
      { id: uuidv4(), skill: 'ReactJs', edit: false },
      { id: uuidv4(), skill: 'NodeJs', edit: false },
      { id: uuidv4(), skill: 'Python', edit: false }
    ];
    const exampleEducation = [
      {
        id: uuidv4(),
        school: 'The University of Hong Kong',
        program: 'Master of Science in Computer Science',
        location: 'Hong Kong',
        startingYear: '2022-09',
        endingYear: '',
        extraInfo: [
          {
            id: uuidv4(),
            extraInfo:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ratione.',
            edit: false
          }
        ],
        onGoing: true,
        edit: false
      },
      {
        id: uuidv4(),
        school: 'The Chinese University of Hong Kong',
        program: 'Computer Science and Engineering',
        location: 'Hong Kong',
        startingYear: '2018-09',
        endingYear: '2022-06',
        extraInfo: [
          {
            id: uuidv4(),
            extraInfo:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ratione.',
            edit: false
          },
          {
            id: uuidv4(),
            extraInfo:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel recusandae ipsa voluptatum esse atque aut non quod quibusdam, voluptatibus autem!',
            edit: false
          }
        ],
        onGoing: false,
        edit: false
      }
    ];
    const exampleWorkExperience = [
      {
        id: uuidv4(),
        jobTitle: 'Project Manager',
        company: 'Google',
        location: 'USA',
        startingYear: '2023-03',
        endingYear: '',
        jobDuty: [
          {
            id: uuidv4(),
            jobDuty:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sequi molestias beatae, magnam consequatur ipsum neque dolorem fugit autem esse voluptatum exercitationem similique consectetur dolore numquam eos? Ab, est voluptas!',
            edit: false
          },
          {
            id: uuidv4(),
            jobDuty:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sequi molestias beatae, magnam consequatur ipsum neque dolorem fugit autem esse voluptatum exercitationem similique consectetur dolore numquam eos? Ab, est voluptas!',
            edit: false
          }
        ],
        onGoing: true,
        edit: false
      }
    ];
    setBasicInfo(exampleBasicInfo);
    setSkills(exampleSkills);
    setEducation(exampleEducation);
    setWorkExperience(exampleWorkExperience);
    setSkillsEdit(false);
    setEducationEdit(false);
    setWorkExperienceEdit(false);
  };

  const clearAll = () => {
    setBasicInfo({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      summary: ''
    });
    setSkills([]);
    setEducation([]);
    setWorkExperience([]);
    setOriginalEducation([]);
    setOriginalSkills([]);
    setOriginalWorkExperience([]);
    setSkillsEdit(false);
    setEducationEdit(false);
    setWorkExperienceEdit(false);
  };

  const printDiv = () => {
    const divContents = document.getElementById('print').innerHTML;
    const a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<body >');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
  };

  return (
    <>
      <header className="not-printable">
        <h1>CV Generator</h1>
      </header>
      <main className="content">
        <section className="input-container not-printable">
          <div className="input-card top-button-container">
            <button type="button" className="card-button load-example-button" onClick={loadExample}>
              <h3>Load Example</h3>
            </button>
            <button type="button" className="card-button clear-all-button" onClick={clearAll}>
              <h3>Clear All</h3>
            </button>
            <button type="button" className="card-button" onClick={window.print}>
              <h3>Print</h3>
            </button>
          </div>
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
            skillsEdit={skillsEdit}
            setSkillsEdit={setSkillsEdit}
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
            handleAddEducationExtraInfoChange={handleAddEducationExtraInfoChange}
            handleEducationExtraInfoChange={handleEducationExtraInfoChange}
            handleSubmitEducationChange={handleSubmitEducationChange}
            handleEditEducationChange={handleEditEducationChange}
            handleCancelAddEducationChange={handleCancelAddEducationChange}
            handleDeleteEducationChange={handleDeleteEducationChange}
            handleSubmitEducationExtraInfoChange={handleSubmitEducationExtraInfoChange}
            handleEditEducationExtraInfoChange={handleEditEducationExtraInfoChange}
            handleDeleteEducationExtraInfoChange={handleDeleteEducationExtraInfoChange}
            education={education}
            educationEdit={educationEdit}
            setEducationEdit={setEducationEdit}
          />
          <WorkInputCard
            workExperience={workExperience}
            handleAddWorkChange={handleAddWorkChange}
            handleJobTitleChange={handleJobTitleChange}
            handleCompanyChange={handleCompanyChange}
            handleCompanyLocationChange={handleCompanyLocationChange}
            handleJobStartingYearChange={handleJobStartingYearChange}
            handleJobEndingYearChange={handleJobEndingYearChange}
            handleJobCurrentStatusChange={handleJobCurrentStatusChange}
            handleAddJobDutyChange={handleAddJobDutyChange}
            handleJobDutyChange={handleJobDutyChange}
            handleSubmitWorkChange={handleSubmitWorkChange}
            handleEditWorkChange={handleEditWorkChange}
            handleCancelAddWorkChange={handleCancelAddWorkChange}
            handleDeleteWorkChange={handleDeleteWorkChange}
            handleEditJobDutyChange={handleEditJobDutyChange}
            handleSubmitJobDutyChange={handleSubmitJobDutyChange}
            handleDeleteJobDutyChange={handleDeleteJobDutyChange}
            workExperienceEdit={workExperienceEdit}
            setWorkExperienceEdit={setWorkExperienceEdit}
          />
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
              {education[0] && <h2>Education</h2>}
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
                      {item.extraInfo.map((subItem) => (
                        <li key={subItem.id}>{subItem.extraInfo}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="education-container">
              {workExperience[0] && <h2>Work Experience</h2>}
              <div className="education">
                {workExperience.map((item) => (
                  <div key={item.id} className="education-display-container">
                    <div className="education-heading">
                      <h3>{item.jobTitle}</h3>
                      <p>
                        {item.startingYear} {item.startingYear && '-'}{' '}
                        {item.onGoing ? 'Present' : item.endingYear}
                      </p>
                    </div>
                    <div className="program">
                      <p>
                        {item.company} {item.company && ','} {item.location}
                      </p>
                    </div>
                    <ul className="education-extra-info">
                      {item.jobDuty.map((subItem) => (
                        <li key={subItem.id}>{subItem.jobDuty}</li>
                      ))}
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
