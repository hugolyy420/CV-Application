import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import '../styles/input-card-style.css';

function BasicInfoInputCard({
  basicInfo,
  handleFirstNameChange,
  handleLastNameChange,
  handleEmailChange,
  handlePhoneChange,
  handleLocationChange,
  handleSummaryChange
}) {
  const [expand, setExpand] = useState(false);

  return (
    <div className="input-card">
      <button type="button" className="card-button" onClick={() => setExpand(!expand)}>
        <FontAwesomeIcon icon={faCircleInfo} className="icon" />
        <h2>Basic Information</h2>
        <FontAwesomeIcon className="chevron" icon={faChevronDown} />
      </button>
      {expand && (
        <div className="form-container">
          <form action="">
            <div className="input-group">
              <label htmlFor="first-name">
                <p>First Name</p>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={basicInfo.firstName}
                  onChange={handleFirstNameChange}
                />
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="last-name">
                <p>Last Name</p>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  value={basicInfo.lastName}
                  onChange={handleLastNameChange}
                />
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="email">
                <p>Email</p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={basicInfo.email}
                  onChange={handleEmailChange}
                />
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="phone">
                <p>Phone</p>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={basicInfo.phone}
                  onChange={handlePhoneChange}
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
                  value={basicInfo.location}
                  onChange={handleLocationChange}
                />
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="summary">
                <p>Summary</p>
                <textarea
                  name="summary"
                  id="summary"
                  value={basicInfo.summary}
                  onChange={handleSummaryChange}
                  rows="7"
                />
              </label>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default BasicInfoInputCard;
