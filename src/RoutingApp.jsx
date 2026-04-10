
import {BrowserRouter, Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from './pages/Users';
import FAQs from './pages/FAQs';


const RoutingApp = () => {
    return ( <>
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
             <Route path="/faqs" element={<FAQs />} />
   
     
    
      </Routes>
    </Router>
    
    </> );
}
 
export default RoutingApp;