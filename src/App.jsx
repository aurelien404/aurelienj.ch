import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Maintenance from './pages/Maintenance';
import Home from './pages/Home';
import Service from './pages/Services';
import Contact from './pages/Contact';
import UiUxLab from './pages/UiUxLab';
import NotFound from './pages/NotFound';

import Header from './components/header';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Maintenance />} />
        <Route path="/contact" element={<Contact />} />
        {/*<Route path="/service" element={<Service />} />
        
        <Route path="/UiUxLab" element={<UiUxLab />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
