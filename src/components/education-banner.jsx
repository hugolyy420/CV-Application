import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import '../styles/input-card-style.css';

function EducationBanner({
  item,
  handleSchoolChange,
  handleProgramChange,
  handleSchoolLocationChange,
  handleStartingYearChange,
  handleEndingYearChange,
  handleEducationCurrentStatusChange,
  setEdit,
  edit
}) {
  const [current, setCurrent] = useState(false);
  return (
    <div className="education-banner">
      {item.edit ? (
        <form
          action="
        ">
          <div className="input-group">
            <label htmlFor="school">
              <p>School</p>
              <input
                type="text"
                name="school"
                id="school"
                value={item.school}
                onChange={(event) => handleSchoolChange(item.id, event)}
              />
            </label>
          </div>
          <div className="input-group">
            <label htmlFor="program">
              <p>Degree/ Course/ Program</p>
              <input
                type="text"
                name="program"
                id="program"
                value={item.program}
                onChange={(event) => handleProgramChange(item.id, event)}
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
                onChange={(event) => handleSchoolLocationChange(item.id, event)}
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
                onChange={(event) => handleStartingYearChange(item.id, event)}
              />
            </label>
          </div>
          {!current && (
            <div className="input-group">
              <label htmlFor="ending-year">
                <p>Ending Year</p>
                <input
                  type="month"
                  name="ending-year"
                  id="ending-year"
                  value={item.endingYear}
                  onChange={(event) => handleEndingYearChange(item.id, event)}
                />
              </label>
            </div>
          )}

          <div className="input-group">
            <label htmlFor="onGoing" className="on-going-label">
              <p>On-going</p>
              <input
                type="checkbox"
                name="onGoing"
                id="onGoing"
                value={item.onGoing}
                onChange={(event) => {
                  setCurrent(!current);
                  handleEducationCurrentStatusChange(item.id, item.onGoing, event);
                }}
              />
            </label>
          </div>
        </form>
      ) : (
        <>
          <FontAwesomeIcon icon={faSchool} />
          <p>{item.school}</p>
          {!edit && (
            <>
              <FontAwesomeIcon
                className="fa-icon"
                icon={faPenToSquare}
                // onClick={() => {
                //   setEdit(!edit);
                //   handleEditSkillChange(item.id);
                // }}
              />
              <FontAwesomeIcon
                className="fa-icon"
                icon={faTrashCan}
                // onClick={() => handleDeleteSkillChange(item.id)}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default EducationBanner;
