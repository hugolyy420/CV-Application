import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import AddSkillForm from './add-skill-form-component';
import '../styles/input-card-style.css';

function SkillsInputCard({
  skills,
  handleAddSkillChange,
  handleEditSkillChange,
  handleCancelAddSkillChange,
  handleSubmitSkillChange,
  handleDeleteSkillChange
}) {
  const [edit, setEdit] = useState(false);
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
              <AddSkillForm
                key={item.id}
                item={item}
                handleEditSkillChange={handleEditSkillChange}
                handleDeleteSkillChange={handleDeleteSkillChange}
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
                    handleCancelAddSkillChange(edit);
                  }}>
                  <h3>Cancel</h3>
                </button>
                <button
                  type="button"
                  className="form-button submit-skill-button add-skill-form-button "
                  onClick={() => {
                    setEdit(!edit);
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
                  setEdit(!edit);
                  handleAddSkillChange();
                }}>
                <h3>+ Skills</h3>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SkillsInputCard;
