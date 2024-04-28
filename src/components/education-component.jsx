import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
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
  handleEducationCurrentStatusChange
}) {
  const [edit, setEdit] = useState(false);
  const [expand, setExpand] = useState(false);

  return (
    <div className="input-card">
      <button type="button" className="card-button" onClick={() => setExpand(!expand)}>
        <h2>Education</h2>
        <FontAwesomeIcon className="chevron" icon={faChevronDown} />
      </button>
      {expand && (
        <div className="form-container">
          <div className="education-banners-container">
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
                // handleEditSkillChange={handleEditSkillChange}
                // handleDeleteSkillChange={handleDeleteSkillChange}
                setEdit={setEdit}
                edit={edit}
              />
            ))}
          </div>
          <div className="add-skills-button-container">
            {edit ? (
              <>
                <button
                  type="button"
                  className="form-button cancel-button add-skill-form-button "
                  onClick={() => {
                    setEdit(!edit);
                    // handleCancelAddSkillChange(edit);
                  }}>
                  <h3>Cancel</h3>
                </button>
                <button
                  type="button"
                  className="form-button submit-skill-button add-skill-form-button "
                  onClick={() => {
                    setEdit(!edit);
                    // handleSubmitSkillChange();
                  }}>
                  <h3>Submit</h3>
                </button>
              </>
            ) : (
              <button
                type="button"
                className="form-button add-skill-button add-skill-form-button"
                onClick={() => {
                  setEdit(!edit);
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
