
import {BrowserRouter, Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from './pages/Users';
import FAQs from './pages/FAQs';
import Dashboard from './pages/Dashboard';
import AuthPage from './pages/Settings';
import EventDetailsSettings from './pages/Events';


const RoutingApp = () => {
    return ( <>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
             <Route path="/faqs" element={<FAQs />} />
   
       <Route path="/settings" element={<AuthPage />} />
 <Route path="/events" element={<EventDetailsSettings />} />

      </Routes>
    </Router>
    
    </> );
}
 
export default RoutingApp;