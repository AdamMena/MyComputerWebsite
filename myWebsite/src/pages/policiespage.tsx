import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import "../App.css";

const PoliciesPage: React.FC = () => {
  return (
    <div className="policies-page">
      <div className="content">
        <h1>Policies</h1>
        <div className="section">
          <h2>Introduction</h2>
          <p>
            At Computer Hardware and Software Services, we are committed to providing the best technical and customer services related to computer issues. Our policies aim to ensure transparency and fairness in all aspects of our business operations.
          </p>
        </div>
        <div className="section">
          <h2>Refund Policy</h2>
          <ul>
            <li><strong>Strict 1 Week Refund Policy:</strong> We offer refunds within one week of service delivery. Refunds are subject to approval and may be granted at our discretion.</li>
            <li><strong>No Refunds on Hardware Upgrades:</strong> Please note that we do not offer refunds on hardware upgrades.</li>
            <li><strong>Charges per Job:</strong> Our charges are per job and depend on the type and difficulty of the issue. We strive to provide transparent pricing to our customers.</li>
          </ul>
        </div>
        <div className="section">
          <h2>Service Commitment</h2>
          <ul>
            <li><strong>Timeliness and Efficiency:</strong> We are committed to being on time and working efficiently to provide technical support to our customers.</li>
            <li><strong>Technician's Right to Refuse Service:</strong> Customers should be aware that our technicians reserve the right to refuse service for any reason.</li>
          </ul>
        </div>
        <div className="section">
          <h2>Mission Statement</h2>
          <p>
            At Computer Hardware and Software Services, our goal is to teach and help people with their computer-related needs. We strive to empower our customers with knowledge and provide effective solutions to their technical issues.
          </p>
        </div>
        <div className="section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about our policies, please feel free to contact us. We are here to assist you.
          </p>
        </div>
      </div>
      <div className="footer">
        <Link to="/" className="home-button"> <FontAwesomeIcon icon={faHome} /> Home</Link>
      </div>
    </div>
  );
};

export default PoliciesPage;