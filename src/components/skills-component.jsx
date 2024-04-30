import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import SkillBanner from './skill-banner';
import '../styles/input-card-style.css';

function SkillsInputCard({
  skills,
  handleAddSkillChange,
  handleEditSkillChange,
  handleCancelAddSkillChange,
  handleSubmitSkillChange,
  handleDeleteSkillChange,
  setSkillsEdit,
  skillsEdit
}) {
  const [expand, setExpand] = useState(false);

  return (
    <div className="input-card">
      <button type="button" className="card-button" onClick={() => setExpand(!expand)}>
        <h2>Skills</h2>
        <FontAwesomeIcon className="chevron" icon={faChevronDown} />
      </button>
      {expand && (
        <div className="form-container">
          <div className="skills-banner-container">
            {skills.map((item) => (
              <SkillBanner
                key={item.id}
                item={item}
                handleEditSkillChange={handleEditSkillChange}
                handleDeleteSkillChange={handleDeleteSkillChange}
                setSkillsEdit={setSkillsEdit}
                skillsEdit={skillsEdit}
              />
            ))}
          </div>
          <div className="add-skills-button-container">
            {skillsEdit ? (
              <>
                <button
                  type="button"
                  className="form-button cancel-button add-skill-form-button "
                  onClick={() => {
                    setSkillsEdit(!skillsEdit);
                    handleCancelAddSkillChange(skillsEdit);
                  }}>
                  <h3>Cancel</h3>
                </button>
                <button
                  type="button"
                  className="form-button submit-skill-button add-skill-form-button "
                  onClick={() => {
                    setSkillsEdit(!skillsEdit);
                    handleSubmitSkillChange();
                  }}>
                  <h3>Submit</h3>
                </button>
              </>
            ) : (
              <button
                type="button"
                className="form-button add-skill-button add-skill-form-button"
                onClick={() => {
                  setSkillsEdit(!skillsEdit);
                  handleAddSkillChange();
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

export default SkillsInputCard;
