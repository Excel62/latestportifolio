import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCard from "./sections/FeatureCard.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Testimonials from "./sections/Testimoniald.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import {BrowserRouter} from 'react-router-dom'
const App = () => {
  return (
  <BrowserRouter>
      <NavBar/>
      <Hero/>
      <ShowcaseSection/>
      <LogoSection/>
      <FeatureCard/>
      <ExperienceSection/>
      <TechStack/>
      <Testimonials/>
      <Contact/>
      <Footer/>
  </BrowserRouter>

  )
}

export default App
