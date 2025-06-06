import "../styles/main.css";

const AlertCard = ({ alert }) => {
  return (
    <div className="alert-card">
      <div className="alert-card-header">
        <h3>{alert.title}</h3>
        <span className="alert-date">{alert.date}</span>
      </div>
      <div className="alert-location">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        {alert.location}
      </div>
      <p className="alert-description">{alert.description}</p>
    </div>
  );
};

export default AlertCard;
