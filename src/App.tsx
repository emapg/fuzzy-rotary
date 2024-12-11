import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { CustomCursor } from './components/common/CustomCursor';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Canvas3D } from './components/3d/Canvas3D';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <CustomCursor />
        <Header />
        
        <main>
          <div className="relative h-screen">
            <div className="absolute inset-0">
              <Canvas3D />
            </div>
            <Hero />
          </div>
          
          <Projects />
          <Skills />
        </main>
      </div>
    </Router>
  );
}

export default App;