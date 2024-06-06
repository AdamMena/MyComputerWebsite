// App.tsx
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FrontPage from "./pages/frontpage";
import ServicesPage from './pages/servicespage';
import ContactPage from './pages/contactpage';
import PoliciesPage from './pages/policiespage';
import EstimatesPage from './pages/estimatespage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  Component={FrontPage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="/services" Component={ServicesPage} />
        <Route path="/estimates" Component={EstimatesPage} />
        <Route path="/policies" Component={PoliciesPage} />
      </Routes>
    </Router>
  );
}

export default App;
