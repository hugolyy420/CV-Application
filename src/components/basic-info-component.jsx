import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/input-card-style.css';

function BasicInfoInputCard({
  firstName,
  lastName,
  email,
  phone,
  location,
  summary,
  handleFirstNameChange,
  handleLastNameChange,
  handleEmailChange,
  handlePhoneChange,
  handleLocationChange,
  handleSummaryChange,
  toggleFormDisplay
}) {
  return (
    <div className="input-card">
      <button type="button" className="card-button" onClick={toggleFormDisplay}>
        <h2>Basic Information</h2>
        <FontAwesomeIcon className="chevron" icon={faChevronDown} />
      </button>
      <div className="form-container">
        <form action="">
          <div className="input-group">
            <label htmlFor="first-name">
              First Name
              <input
                type="text"
                name="first-name"
                id="first-name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </label>
          </div>
          <div className="input-group">
            <label htmlFor="last-name">
              Last Name
              <input
                type="text"
                name="last-name"
                id="last-name"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </label>
          </div>
          <div className="input-group">
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </label>
          </div>
          <div className="input-group">
            <label htmlFor="phone">
              Phone
              <input
                type="tel"
                name="phone"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
              />
            </label>
          </div>
          <div className="input-group">
            <label htmlFor="location">
              Location
              <input
                type="text"
                name="location"
                id="location"
                value={location}
                onChange={handleLocationChange}
              />
            </label>
          </div>
          <div className="input-group">
            <label htmlFor="summary">
              Summary
              <textarea
                name="summary"
                id="summary"
                value={summary}
                onChange={handleSummaryChange}
                rows="7"
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BasicInfoInputCard;
