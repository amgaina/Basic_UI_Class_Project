import "../styles/main.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Neighborhood Safety Watch
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/alerts" className="nav-link">
              Alerts
            </a>
          </li>
          <li className="nav-item">
            <a href="/safety-tips" className="nav-link">
              Safety Tips
            </a>
          </li>
          <li className="nav-item">
            <a href="/resources" className="nav-link">
              Resources
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
