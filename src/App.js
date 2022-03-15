import { Route, Routes } from 'react-router-dom'
import { Home }  from './pages/Home.js';
import { Category } from './pages/Category'
import { Author } from './pages/Author'
import Navbar from './components/Navbar';
import './App.css';
import Postinfo from './components/Postinfo.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<Postinfo />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/Author" element={<Author />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
