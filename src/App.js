import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AboutMe from "./features/AboutMe";
import Contact from "./features/Contact";
import Footer from "./features/Footer";
import HeroSection from "./features/HeroSection";
import Navbar from "./features/Navbar";
import Portfolio from "./features/Portfolio";

function App() {
  return (
    

    <div>

      <Router>

        <Routes>
          <Route path="/" element={
            <div>
              <Navbar /> 
              <HeroSection />
              <AboutMe />
              <Portfolio />
              <Contact />
              <Footer />
            </div> 
          }/>
        </Routes>

      </Router>

  </div>

    
  );
}

export default App;
