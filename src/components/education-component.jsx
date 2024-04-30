import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSchool } from '@fortawesome/free-solid-svg-icons';
import EducationBanner from './education-banner';
import '../styles/input-card-style.css';

function EducationInputCard({
  education,
  handleAddSchoolChange,
  handleSchoolChange,
  handleProgramChange,
  handleSchoolLocationChange,
  handleStartingYearChange,
  handleEndingYearChange,
  handleEducationCurrentStatusChange,
  handleAddEducationExtraInfoChange,
  handleEducationExtraInfoChange,
  handleSubmitEducationChange,
  handleEditEducationChange,
  handleCancelAddEducationChange,
  handleDeleteEducationChange,
  handleSubmitEducationExtraInfoChange,
  handleEditEducationExtraInfoChange,
  handleDeleteEducationExtraInfoChange,
  handleCancelAddExtraInfoChange,
  educationEdit,
  setEducationEdit
}) {
  const [expand, setExpand] = useState(false);
  const [extraInfoEdit, setExtraInfoEdit] = useState(false);

  return (
    <div className="input-card">
      <button type="button" className="card-button" onClick={() => setExpand(!expand)}>
        <FontAwesomeIcon className="fa-icon icon" icon={faSchool} />
        <h2>Education</h2>
        <FontAwesomeIcon className="chevron" icon={faChevronDown} />
      </button>
      {expand && (
        <div className="form-container">
          <div className="banners-container">
            {education.map((item) => (
              <EducationBanner
                key={item.id}
                item={item}
                handleSchoolChange={handleSchoolChange}
                handleProgramChange={handleProgramChange}
                handleSchoolLocationChange={handleSchoolLocationChange}
                handleStartingYearChange={handleStartingYearChange}
                handleEndingYearChange={handleEndingYearChange}
                handleEducationCurrentStatusChange={handleEducationCurrentStatusChange}
                handleAddEducationExtraInfoChange={handleAddEducationExtraInfoChange}
                handleEducationExtraInfoChange={handleEducationExtraInfoChange}
                handleEditEducationChange={handleEditEducationChange}
                handleDeleteEducationChange={handleDeleteEducationChange}
                handleCancelAddEducationChange={handleCancelAddEducationChange}
                handleSubmitEducationExtraInfoChange={handleSubmitEducationExtraInfoChange}
                handleEditEducationExtraInfoChange={handleEditEducationExtraInfoChange}
                handleDeleteEducationExtraInfoChange={handleDeleteEducationExtraInfoChange}
                handleCancelAddExtraInfoChange={handleCancelAddExtraInfoChange}
                setEducationEdit={setEducationEdit}
                educationEdit={educationEdit}
                extraInfoEdit={extraInfoEdit}
                setExtraInfoEdit={setExtraInfoEdit}
              />
            ))}
          </div>
          <div className="add-skills-button-container">
            {educationEdit && education[0] ? (
              <>
                <button
                  type="button"
                  className="form-button cancel-button add-skill-form-button "
                  onClick={() => {
                    setEducationEdit(!educationEdit);
                    setExtraInfoEdit(false);
                    handleCancelAddEducationChange(educationEdit);
                  }}>
                  <h3>Cancel</h3>
                </button>
                <button
                  type="button"
                  className="form-button submit-skill-button add-skill-form-button "
                  onClick={() => {
                    setEducationEdit(!educationEdit);
                    handleSubmitEducationChange();
                  }}>
                  <h3>Submit</h3>
                </button>
              </>
            ) : (
              <button
                type="button"
                className="form-button add-skill-button add-skill-form-button"
                onClick={() => {
                  setEducationEdit(!educationEdit);
                  handleAddSchoolChange();
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

export default EducationInputCard;
