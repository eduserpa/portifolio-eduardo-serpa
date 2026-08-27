import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Stack } from "./components/Stack";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Automations } from "./components/Automations";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="grain" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Automations />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
