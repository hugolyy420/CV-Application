import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function SkillBanner({ item, handleEditSkillChange, handleDeleteSkillChange, setEdit, edit }) {
  return (
    <div className="skill-banner">
      <FontAwesomeIcon icon={faScrewdriverWrench} />
      {item.edit ? (
        <input
          type="text"
          name="skill"
          placeholder="e.g. ReactJS"
          className="add-skill-input"
          value={item.skill}
          onChange={(event) => handleEditSkillChange(item.id, event)}
        />
      ) : (
        <>
          <p>{item.skill}</p>
          {!edit && (
            <>
              <FontAwesomeIcon
                className="fa-icon"
                icon={faPenToSquare}
                onClick={() => {
                  setEdit(!edit);
                  handleEditSkillChange(item.id);
                }}
              />
              <FontAwesomeIcon
                className="fa-icon"
                icon={faTrashCan}
                onClick={() => handleDeleteSkillChange(item.id)}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default SkillBanner;
