import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function JobDutyBanner({
  subItem,
  item,
  handleJobDutyChange,
  handleEditJobDutyChange,
  handleDeleteJobDutyChange,
  setJobDutyEdit,
  jobDutyEdit
}) {
  const bannerAction = () => {
    if (jobDutyEdit && subItem.edit) {
      return (
        <textarea
          name="education-extra-info"
          placeholder="e.g. Achieve 99% customer satisfaction"
          className="add-extra-info-input"
          cols="30"
          rows="4"
          onChange={(event) => handleJobDutyChange(item.id, event)}>
          {subItem.jobDuty}
        </textarea>
      );
    }
    if (!jobDutyEdit) {
      return (
        <div className="education-banner">
          <p>{subItem.jobDuty}</p>
          <FontAwesomeIcon
            className="fa-icon"
            icon={faPenToSquare}
            onClick={() => {
              setJobDutyEdit(!jobDutyEdit);
              handleEditJobDutyChange(subItem.id);
            }}
          />
          <FontAwesomeIcon
            className="fa-icon"
            icon={faTrashCan}
            onClick={() => handleDeleteJobDutyChange(subItem.id)}
          />
        </div>
      );
    }
    return '';
  };

  return <>{bannerAction()}</>;
}

export default JobDutyBanner;
