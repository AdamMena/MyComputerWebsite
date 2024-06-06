import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import "../App.css";

interface Service {
  name: string;
  price: string;
}

const services: { [category: string]: Service[] } = {
  'iPhone/iPad/iMac Services': [
    { name: 'Screen Replacement', price: '$100' },
    { name: 'Jailbreak', price: '$100' },
    { name: 'Battery Replacement', price: '$100' },
    { name: 'Screen Protector Installation', price: '$100' }
  ],
  'Computer Hardware Services': [
    { name: 'Maintenance (Dust Removal, PC Hardware Check-up/Diagnostic)', price: '$100' },
    { name: 'Hardware Upgrade', price: '$---' },
    { name: 'Free Hardware Recommendations', price: 'Free' }
  ],
  'Computer Software Services': [
    { name: 'Malware Removal', price: '$---' },
    { name: 'OS System Installation', price: '$100' },
    { name: 'Virtual Machine Set-up', price: '$100' }
  ]
};

const EstimatesPage: React.FC = () => {
  return (
    <div className="estimates-page">
      <div className="content">
        <h1>Our Services</h1>
        {Object.entries(services).map(([category, serviceList]) => (
          <div className="service-category" key={category}>
            <h2>{category}</h2>
            <ul>
              {serviceList.map((service, index) => (
                <li key={index}>
                  <span className="service-name">{service.name}</span> - <span className="service-price">{service.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer">
        <Link to="/" className="home-button"> <FontAwesomeIcon icon={faHome} /> Home</Link>
      </div>
    </div>
  );
};

export default EstimatesPage;