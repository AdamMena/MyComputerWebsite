import { Link } from "react-router-dom";
import "../App.css";
import iphoneImage from "../photos/iphoneClipArt.png";
import hardwareImage from "../photos/hardware.jpeg";
import malwareImage from "../photos/malware2.png";

function FrontPage() {
  return (
    <div className="frontpage-container">
      <div className="hero-section">
        <h1>Welcome to Computer Software and Hardware Solutions</h1>
        <p>
          Your one-stop solution for mobile and in-home computer software and
          hardware maintenance and repair services.
        </p>
        <Link to="/contact">
          <button className="home-button">Contact Us</button>
        </Link>
      </div>
      <section className="image-gallery">
        <div className="image-wrapper">
          <div className="image-item">
            <img src={iphoneImage} alt="iphone repair" />
            <h2>iPhone/iPad/iMac Repair</h2>
            <Link to="/iphone-repair">Learn More</Link>
          </div>
          <div className="image-item">
            <img src={hardwareImage} alt="Computer Hardware Repair" />
            <h2>Computer Hardware Repair</h2>
            <Link to="/hardware-repair">Learn More</Link>
          </div>
          <div className="image-item">
            <img src={malwareImage} alt="Computer Software Repair" />
            <h2>Computer Software Repair</h2>
            <Link to="/software-repair">Learn More</Link>
          </div>
        </div>
      </section>
      <footer>
        <div className="bottom-border">
          <p>Hours: Monday - Friday 9:00 AM - 5:00 PM</p>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/estimates">Estimates</Link>
              </li>
              <li>
                <Link to="/policies">Policies</Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default FrontPage;