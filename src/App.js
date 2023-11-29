import './App.css';
import './css/style.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layouts';
import Home from './components/pages/home';
import About from './components/pages/about';
import Feature from './components/pages/feature';
import Chef from './components/pages/chef';
import Menu from './components/pages/menu';
import Contact from './components/pages/contact';
import Booking from './components/pages/booking'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/feature' element={<Feature />} />
          <Route path='/feature' element={<Feature />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/chef' element={<Chef />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/booking' element={<Booking />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
