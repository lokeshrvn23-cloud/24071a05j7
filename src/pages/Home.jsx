import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="hero">
        <h1>Shape Your Future at VNR College</h1>
        <p>A world-class education designed for the innovators, thinkers, and leaders of tomorrow. Discover your potential with us.</p>
        <Link to="/courses" className="btn">Explore Programs</Link>
      </section>
      
      <section className="page-container">
        <h2 className="page-title" style={{ fontSize: '2.5rem' }}>Why Choose Us?</h2>
        <div className="grid">
          <div className="card">
            <h3>Excellence in Education</h3>
            <p>Our curriculum is designed to challenge and inspire, preparing students for success in a rapidly changing world.</p>
          </div>
          <div className="card">
            <h3>Global Community</h3>
            <p>Join a diverse community of learners from around the globe, fostering cross-cultural understanding and collaboration.</p>
          </div>
          <div className="card">
            <h3>Cutting-Edge Facilities</h3>
            <p>Learn in modern, tech-enabled classrooms and laboratories that provide hands-on experience in your field of study.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
