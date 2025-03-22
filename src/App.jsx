import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import About from './pages/About';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import Contact from './pages/Contact';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/userDetails/:id" element={<UserDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
