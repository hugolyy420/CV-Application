import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import WorkBanner from './work-banner';
import '../styles/input-card-style.css';

function WorkInputCard({
  workExperience,
  handleAddWorkChange,
  handleJobTitleChange,
  handleCompanyChange,
  handleCompanyLocationChange,
  handleJobStartingYearChange,
  handleJobEndingYearChange,
  handleJobCurrentStatusChange,
  handleAddJobDutyChange,
  handleJobDutyChange,
  handleSubmitWorkChange,
  handleEditWorkChange,
  handleCancelAddWorkChange,
  handleDeleteWorkChange,
  handleSubmitJobDutyChange,
  handleEditJobDutyChange,
  handleDeleteJobDutyChange,
  handleCancelAddJobDutyChange,
  workExperienceEdit,
  setWorkExperienceEdit
}) {
  const [expand, setExpand] = useState(false);
  const [jobDutyEdit, setJobDutyEdit] = useState(false);

  return (
    <div className="input-card">
      <button type="button" className="card-button" onClick={() => setExpand(!expand)}>
        <FontAwesomeIcon className="fa-icon icon" icon={faBriefcase} />
        <h2>Work Experience</h2>
        <FontAwesomeIcon className="chevron" icon={faChevronDown} />
      </button>
      {expand && (
        <div className="form-container">
          <div className="banners-container">
            {workExperience.map((item) => (
              <WorkBanner
                key={item.id}
                item={item}
                handleJobTitleChange={handleJobTitleChange}
                handleCompanyChange={handleCompanyChange}
                handleCompanyLocationChange={handleCompanyLocationChange}
                handleJobStartingYearChange={handleJobStartingYearChange}
                handleJobEndingYearChange={handleJobEndingYearChange}
                handleJobCurrentStatusChange={handleJobCurrentStatusChange}
                handleAddJobDutyChange={handleAddJobDutyChange}
                handleJobDutyChange={handleJobDutyChange}
                handleEditWorkChange={handleEditWorkChange}
                handleDeleteWorkChange={handleDeleteWorkChange}
                handleCancelAddWorkChange={handleCancelAddWorkChange}
                handleSubmitJobDutyChange={handleSubmitJobDutyChange}
                handleEditJobDutyChange={handleEditJobDutyChange}
                handleDeleteJobDutyChange={handleDeleteJobDutyChange}
                handleCancelAddJobDutyChange={handleCancelAddJobDutyChange}
                setWorkExperienceEdit={setWorkExperienceEdit}
                workExperienceEdit={workExperienceEdit}
                jobDutyEdit={jobDutyEdit}
                setJobDutyEdit={setJobDutyEdit}
              />
            ))}
          </div>
          <div className="add-skills-button-container">
            {workExperienceEdit && workExperience[0] ? (
              <>
                <button
                  type="button"
                  className="form-button cancel-button add-skill-form-button "
                  onClick={() => {
                    setWorkExperienceEdit(!workExperienceEdit);
                    setJobDutyEdit(false);
                    handleCancelAddWorkChange();
                  }}>
                  <h3>Cancel</h3>
                </button>
                <button
                  type="button"
                  className="form-button submit-skill-button add-skill-form-button "
                  onClick={() => {
                    setWorkExperienceEdit(!workExperienceEdit);
                    handleSubmitWorkChange();
                  }}>
                  <h3>Submit</h3>
                </button>
              </>
            ) : (
              <button
                type="button"
                className="form-button add-skill-button add-skill-form-button"
                onClick={() => {
                  setWorkExperienceEdit(!workExperienceEdit);
                  handleAddWorkChange();
                }}>
                <h3>+ New</h3>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkInputCard;
