import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function EducationExtraInfoBanner({
  subItem,
  item,
  handleEducationExtraInfoChange,
  handleDeleteEducationExtraInfoChange,
  handleEditEducationExtraInfoChange,
  setExtraInfoEdit,
  extraInfoEdit
}) {
  const bannerAction = () => {
    if (extraInfoEdit && subItem.edit) {
      return (
        <textarea
          name="education-extra-info"
          placeholder="e.g. First Class Honour"
          className="add-extra-info-input"
          cols="30"
          rows="4"
          onChange={(event) => handleEducationExtraInfoChange(item.id, event)}>
          {subItem.extraInfo}
        </textarea>
      );
    }
    if (!extraInfoEdit) {
      return (
        <div className="education-banner">
          <p>{subItem.extraInfo}</p>
          <FontAwesomeIcon
            className="fa-icon"
            icon={faPenToSquare}
            onClick={() => {
              setExtraInfoEdit(!extraInfoEdit);
              handleEditEducationExtraInfoChange(subItem.id);
            }}
          />
          <FontAwesomeIcon
            className="fa-icon"
            icon={faTrashCan}
            onClick={() => handleDeleteEducationExtraInfoChange(subItem.id)}
          />
        </div>
      );
    }
    return '';
  };

  return <>{bannerAction()}</>;
}

export default EducationExtraInfoBanner;
