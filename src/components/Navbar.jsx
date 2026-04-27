import { NavLink } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className="logo" style={{ textDecoration: 'none' }}>
        <BookOpen size={28} />
        <span>VNR College</span>
      </NavLink>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/faculty">Faculty</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="nav-links" style={{ gap: '1rem', alignItems: 'center' }}>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup" className="btn" style={{ padding: '0.5rem 1rem' }}>Sign Up</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
