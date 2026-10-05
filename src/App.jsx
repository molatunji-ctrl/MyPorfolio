import BackgroundCanvas from "./components/ui/BackgroundCanvas";
import Navbar           from "./components/layout/Navbar";
import Footer           from "./components/layout/Footer";

import Hero     from "./sections/Hero";
import About    from "./sections/About";
import Skills   from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact  from "./sections/Contact";

function Divider() {
  return <div className="divider" aria-hidden="true" />;
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <BackgroundCanvas />
      <Navbar />
      <main id="main">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
