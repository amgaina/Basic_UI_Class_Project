import "../styles/main.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const handleReportAlert = () => {
    navigate("/alerts");
  };
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Keeping Neighborhoods Safe</h1>
        <p>
          Report concerns, stay informed, and build a safer community together
        </p>
        <button className="cta-button" onClick={handleReportAlert}>
          Report Alert
        </button>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Real-Time Alerts</h3>
          <p>Stay updated about safety concerns in your area</p>
        </div>
        <div className="feature-card">
          <h3>Safety Resources</h3>
          <p>Access tips and guides for various situations</p>
        </div>
        <div className="feature-card">
          <h3>Community Network</h3>
          <p>Connect with neighbors and local authorities</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
