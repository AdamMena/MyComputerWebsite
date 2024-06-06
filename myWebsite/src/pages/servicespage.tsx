import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faDesktop, faBug, faHome } from '@fortawesome/free-solid-svg-icons';
import "../App.css"; // Import your CSS file for additional styling

function ServicesPage() {
  return (
    <div className="services-page">
      <div className="services-content">
        <h1 className="page-title">Our Services</h1>
        <div className="service">
          <FontAwesomeIcon icon={faMobile} className="service-icon" />
          <div className="service-details">
            <h2> iPhone/iPad/iMac Services</h2>
            <ul>
              <li>Screen Replacement</li>
              <li>Jailbreak</li>
              <li>Battery Replacement</li>
              <li>Screen Protector Installation</li>
            </ul>
          </div>
        </div>
        <div className="service">
          <FontAwesomeIcon icon={faDesktop} className="service-icon" />
          <div className="service-details">
            <h2>Computer Hardware Services</h2>
            <ul>
              <li>Maintenance (Dust Removal, PC Hardware Check-up/Diagnostic)</li>
              <li>Hardware Upgrade</li>
              <li>Free Hardware Recommendations</li>
            </ul>
          </div>
        </div>
        <div className="service">
          <FontAwesomeIcon icon={faBug} className="service-icon" />
          <div className="service-details">
            <h2>Computer Software Services</h2>
            <ul>
              <li>Malware Removal</li>
              <li>OS System Installation</li>
              <li>Virtual Machine Set-up</li>
            </ul>
          </div>
        </div>
        
        {/* Apple-esque Home Button */}
        <Link to="/" className="home-button">
          <FontAwesomeIcon icon={faHome} />
          Home
        </Link>
      </div>
    </div>
  );
}

export default ServicesPage;