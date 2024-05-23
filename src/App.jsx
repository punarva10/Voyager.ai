import { BrowserRouter } from "react-router-dom";

import { About, Waitlist, Hero, Navbar, Working, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Working />
        <div className="relative z-0">
          <Waitlist />
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
