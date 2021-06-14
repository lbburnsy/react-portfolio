import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CardContainer from "./components/technology-cards/CardContainer";
import AboutMe from "./components/AboutMe.js";
import ProjectCardContainer from "./components/project-cards/ProjectCardContainer";

function App() {
  return (
    <body className="has-navbar-fixed-top">
      <Header />
      <Hero />
      <CardContainer />
      <AboutMe />
      <ProjectCardContainer />
      <Footer />
    </body>
  );
}

export default App;
