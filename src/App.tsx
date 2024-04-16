import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import { Active, Loader, Navigation, Timer } from "./components/OverlayUIs";

export default function App() {
  return (
    <div>
      <Loader />
      <Router>
        <div className="sticky top-0 flex justify-between z-20">
          <Active />
          <Timer />
        </div>
        <Navigation />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/about/:section" Component={About} />
          <Route path="/contacts" Component={Contacts} />
          <Route path="/projects" Component={Projects} />
          <Route path="/resume" Component={Resume} />
          <Route path="/services" Component={Services} />
          <Route path="/testimonials" Component={Testimonials} />
        </Routes>
      </Router>
    </div>
  );
}
