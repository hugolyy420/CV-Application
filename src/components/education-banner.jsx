import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import EducationExtraInfoBanner from './education-extra-info-banner';
import '../styles/input-card-style.css';

function EducationBanner({
  item,
  handleSchoolChange,
  handleProgramChange,
  handleSchoolLocationChange,
  handleStartingYearChange,
  handleEndingYearChange,
  handleEducationCurrentStatusChange,
  handleAddEducationExtraInfoChange,
  handleEducationExtraInfoChange,
  handleEditEducationChange,
  handleDeleteEducationChange,
  handleSubmitEducationExtraInfoChange,
  handleEditEducationExtraInfoChange,
  handleDeleteEducationExtraInfoChange,
  handleCancelAddExtraInfoChange,
  educationEdit,
  setEducationEdit,
  extraInfoEdit,
  setExtraInfoEdit
}) {
  const bannerAction = () => {
    if (educationEdit && item.edit) {
      return (
        <div className="banner">
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
            {!item.onGoing && (
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
                  checked={item.onGoing}
                  onChange={(event) => {
                    handleEducationCurrentStatusChange(item.id, item.onGoing, event);
                  }}
                />
              </label>
            </div>
            <div className="input-group">
              <p>Extra Information</p>
              <div className="extra-info-container">
                {item.extraInfo.map((subItem) => (
                  <EducationExtraInfoBanner
                    subItem={subItem}
                    item={item}
                    key={subItem.id}
                    extraInfoEdit={extraInfoEdit}
                    setExtraInfoEdit={setExtraInfoEdit}
                    handleEducationExtraInfoChange={handleEducationExtraInfoChange}
                    handleEditEducationExtraInfoChange={handleEditEducationExtraInfoChange}
                    handleDeleteEducationExtraInfoChange={handleDeleteEducationExtraInfoChange}
                  />
                ))}
              </div>
              {extraInfoEdit ? (
                <div
                  className="education-extra-info-button-container"
                  style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button
                    type="button"
                    className="form-button cancel-button"
                    onClick={() => {
                      setExtraInfoEdit(!extraInfoEdit);
                      handleCancelAddExtraInfoChange();
                    }}>
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="form-button"
                    onClick={() => {
                      setExtraInfoEdit(!extraInfoEdit);
                      handleSubmitEducationExtraInfoChange();
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
                      setExtraInfoEdit(!extraInfoEdit);
                      handleAddEducationExtraInfoChange(item.id);
                    }}>
                    <h3>+ New Info</h3>
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      );
    }
    if (!educationEdit) {
      return (
        <div className="banner" style={{ padding: 'var(--small-padding)' }}>
          <FontAwesomeIcon className="fa-icon" icon={faSchool} />
          <p>{item.school}</p>
          <FontAwesomeIcon
            className="fa-icon"
            icon={faPenToSquare}
            onClick={() => {
              setEducationEdit(!educationEdit);
              handleEditEducationChange(item.id);
            }}
          />
          <FontAwesomeIcon
            className="fa-icon"
            icon={faTrashCan}
            onClick={() => handleDeleteEducationChange(item.id)}
          />
        </div>
      );
    }

    return '';
  };
  return <>{bannerAction()}</>;
}

export default EducationBanner;
