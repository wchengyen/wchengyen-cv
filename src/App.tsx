import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Skills } from "./sections/Skills";
import { Certificates } from "./sections/Certificates";
import { Education } from "./sections/Education";
import { PublicSharing } from "./sections/PublicSharing";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certificates />
        <Education />
        <PublicSharing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
