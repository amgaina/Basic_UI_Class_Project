import "../styles/main.css";

const Resources = () => {
  return (
    <div className="resources-container">
      <h2>Community Resources</h2>
      <div className="resource-section">
        <h3>Emergency Contacts</h3>
        <ul>
          <li>Emergency: 911</li>
          <li>Non-Emergency: (318) 329-2600</li>
        </ul>
      </div>
      <div className="resource-section">
        <h3>Useful Links</h3>
        <ul>
          <li>
            <a href="https://monroelapolice.com/">Monroe City Police</a>
          </li>
          <li>
            <a href="https://www.monroewa.gov/289/Monroe-Block-Watch-Program">
              Neighborhood Watch Program
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
