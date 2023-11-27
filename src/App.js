import './App.css';
import './css/style.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layouts';
import Home from './components/pages/home'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
      <Layout />
    </Router>
  );
}

export default App;
