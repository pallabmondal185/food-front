import './App.css';
import './css/style.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layouts';
import Home from './components/pages/home';
import About from './components/pages/about';
import Feature from './components/pages/feature'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/feature' element={<Feature />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
