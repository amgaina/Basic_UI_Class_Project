import AlertCard from "../Components/AlertCard";
import { useState } from "react";
import { FaBell } from "react-icons/fa";
import "../styles/main.css";

const Alerts = () => {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      title: "Suspicious Activity",
      location: "University Ave",
      date: new Date("May 1, 2024").toLocaleDateString(),
      description:
        "Report of suspicious vehicle circling the block multiple times.",
    },
    {
      id: 2,
      title: "Power Outage",
      location: "Jackson St",
      date: new Date("April 28, 2024").toLocaleDateString(),
      description:
        "Street lights out between 5pm-7pm. Use caution when walking.",
    },
  ]);

  const [showNotifications, setShowNotifications] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAlert = {
      id: alerts.length + 1,
      title: formData.title,
      location: formData.location,
      date: new Date().toLocaleDateString(),
      description: formData.description,
    };

    setAlerts([newAlert, ...alerts]);
    setFormData({ title: "", location: "", description: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="alerts-page">
      <div
        className="notification-bell"
        onClick={() => setShowNotifications(!showNotifications)}
      >
        <FaBell className="bell-icon" />
        {alerts.length > 0 && (
          <span className="notification-count">{alerts.length}</span>
        )}

        {showNotifications && (
          <div className="notification-dropdown">
            <h4>Recent Alerts ({alerts.length})</h4>
            <div className="notification-list">
              {alerts.map((alert) => (
                <div key={alert.id} className="notification-item">
                  <strong>{alert.title}</strong>
                  <p>
                    {alert.location} • {alert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="alerts-container">
        <h2>Community Safety Alerts</h2>

        <div className="alert-form-container">
          <div className="alert-form-card">
            <h3>Report a Safety Concern</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Brief title of the alert"
                  required
                />
              </div>

              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Where it occurred"
                  required
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Detailed description of the concern"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Submit Alert
              </button>
            </form>
          </div>
        </div>

        <div className="alerts-list">
          {alerts.map((alert) => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alerts;
