import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import FAQs from "./pages/FAQs";
import Dashboard from "./pages/Dashboard";
import AuthPage from "./pages/Settings";
import EventDetailsSettings from "./pages/Events";
import AboutLayout from "./pages/AboutLayout";
import About from "./pages/About";
import AboutTwo from "./pages/AboutTwo";
import AboutThree from "./pages/AboutThree";
import AboutFour from "./pages/AboutFour";

const RoutingApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/settings" element={<AuthPage />} />
        <Route path="/events" element={<EventDetailsSettings />} />
        <Route path="/about" element={<AboutLayout />}>
          <Route index element={<About />} />
          <Route path="peace-of-mind" element={<AboutTwo />} />
          <Route path="company" element={<AboutThree />} />
          <Route path="team" element={<AboutFour />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutingApp;
