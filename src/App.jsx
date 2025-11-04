import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BottomNavbar from './components/BottomNavbar';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Work from './components/Work';
import Prototyping from './components/Prototyping';
import SectionDivider from './components/SectionDivider';

function App() {
  // Use basename only in production for GitHub Pages
  const basename = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  
  return (
    <Router basename={basename}>
      <div className="App min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <SectionDivider />
                <About />
                <SectionDivider />
                <Skills />
                <SectionDivider />
                <Experience />
              </>
            } />
            <Route path="/work" element={<Work />} />
            <Route path="/prototyping" element={<Prototyping />} />
          </Routes>
        </main>
        <BottomNavbar />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App
