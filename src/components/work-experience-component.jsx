import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
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
  workExperienceEdit,
  setWorkExperienceEdit
}) {
  const [expand, setExpand] = useState(false);

  return (
    <div className="input-card">
      <button type="button" className="card-button" onClick={() => setExpand(!expand)}>
        <h2>Work Experience</h2>
        <FontAwesomeIcon className="chevron" icon={faChevronDown} />
      </button>
      {expand && (
        <div className="form-container">
          <div className="education-banners-container">
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
                setWorkExperienceEdit={setWorkExperienceEdit}
                workExperienceEdit={workExperienceEdit}
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
                    handleCancelAddWorkChange(workExperienceEdit);
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
