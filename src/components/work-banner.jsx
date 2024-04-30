import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import JobDutyBanner from './job-duty-banner';
import '../styles/input-card-style.css';

function WorkBanner({
  item,
  handleJobTitleChange,
  handleCompanyChange,
  handleCompanyLocationChange,
  handleJobStartingYearChange,
  handleJobEndingYearChange,
  handleJobCurrentStatusChange,
  handleAddJobDutyChange,
  handleJobDutyChange,
  handleEditWorkChange,
  handleDeleteWorkChange,
  handleCancelAddWorkChange,
  handleSubmitJobDutyChange,
  handleEditJobDutyChange,
  handleDeleteJobDutyChange,
  workExperienceEdit,
  setWorkExperienceEdit
}) {
  const [jobDutyEdit, setJobDutyEdit] = useState(false);

  const bannerAction = () => {
    if (workExperienceEdit && item.edit) {
      return (
        <div className="education-banner">
          <form
            action="
">
            <div className="input-group">
              <label htmlFor="jobTitle">
                <p>Job Title</p>
                <input
                  type="text"
                  name="jobTitle"
                  id="jobTitle"
                  value={item.jobTitle}
                  onChange={(event) => handleJobTitleChange(item.id, event)}
                />
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="company">
                <p>Company/ Organization</p>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={item.company}
                  onChange={(event) => handleCompanyChange(item.id, event)}
                />
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="location">
                <p>Location</p>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={item.location}
                  onChange={(event) => handleCompanyLocationChange(item.id, event)}
                />
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="starting-year">
                <p>Starting Year</p>
                <input
                  type="month"
                  name="starting-year"
                  id="starting-year"
                  value={item.startingYear}
                  onChange={(event) => handleJobStartingYearChange(item.id, event)}
                />
              </label>
            </div>
            {!item.onGoing && (
              <div className="input-group">
                <label htmlFor="ending-year">
                  <p>Ending Year</p>
                  <input
                    type="month"
                    name="ending-year"
                    id="ending-year"
                    value={item.endingYear}
                    onChange={(event) => handleJobEndingYearChange(item.id, event)}
                  />
                </label>
              </div>
            )}

            <div className="input-group">
              <label htmlFor="workOnGoing" className="on-going-label">
                <p>On-going</p>
                <input
                  type="checkbox"
                  name="onGoing"
                  id="workOnGoing"
                  value={item.onGoing}
                  checked={item.onGoing}
                  onChange={(event) => {
                    handleJobCurrentStatusChange(item.id, item.onGoing, event);
                  }}
                />
              </label>
            </div>
            <div className="input-group">
              <p>Job Duty</p>
              <div className="extra-info-container">
                {item.jobDuty.map((subItem) => (
                  <JobDutyBanner
                    subItem={subItem}
                    item={item}
                    key={subItem.id}
                    jobDutyEdit={jobDutyEdit}
                    setJobDutyEdit={setJobDutyEdit}
                    handleJobDutyChange={handleJobDutyChange}
                    handleEditJobDutyChange={handleEditJobDutyChange}
                    handleDeleteJobDutyChange={handleDeleteJobDutyChange}
                  />
                ))}
              </div>
              {jobDutyEdit ? (
                <div
                  className="education-extra-info-button-container"
                  style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button
                    type="button"
                    className="form-button cancel-button"
                    onClick={() => {
                      setJobDutyEdit(!jobDutyEdit);
                      handleCancelAddWorkChange();
                    }}>
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="form-button"
                    onClick={() => {
                      setJobDutyEdit(!jobDutyEdit);
                      handleSubmitJobDutyChange();
                    }}>
                    Confirm
                  </button>
                </div>
              ) : (
                <div
                  className="education-extra-info-button-container"
                  style={{ display: 'flex', justifyContent: 'center' }}>
                  <button
                    type="button"
                    className="form-button add-extra-info-button"
                    onClick={() => {
                      setJobDutyEdit(!jobDutyEdit);
                      handleAddJobDutyChange(item.id);
                    }}>
                    <h3>+ New Job Duty</h3>
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      );
    }
    if (!workExperienceEdit) {
      return (
        <div className="education-banner" style={{ padding: 'var(--small-padding)' }}>
          <FontAwesomeIcon className="fa-icon" icon={faBriefcase} />
          <p>{item.company}</p>
          <FontAwesomeIcon
            className="fa-icon"
            icon={faPenToSquare}
            onClick={() => {
              setWorkExperienceEdit(!workExperienceEdit);
              handleEditWorkChange(item.id);
            }}
          />
          <FontAwesomeIcon
            className="fa-icon"
            icon={faTrashCan}
            onClick={() => handleDeleteWorkChange(item.id)}
          />
        </div>
      );
    }

    return '';
  };
  return <>{bannerAction()}</>;
}

export default WorkBanner;
