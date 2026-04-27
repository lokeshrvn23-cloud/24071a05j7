const About = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">About VNR</h1>
      <p className="page-subtitle">A legacy of excellence and a commitment to the future.</p>
      
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3>Our History</h3>
        <p>Founded in 1945, VNR College has a rich history of academic excellence and community engagement. Over the decades, we have grown from a small liberal arts college to a comprehensive institution offering a wide range of undergraduate and graduate programs.</p>
      </div>

      <div className="grid">
        <div className="card">
          <h3>Our Mission</h3>
          <p>To empower students through transformative education, rigorous research, and a commitment to social responsibility, preparing them to lead and serve in a global society.</p>
        </div>
        <div className="card">
          <h3>Our Vision</h3>
          <p>To be a leading institution recognized globally for academic innovation, student success, and impactful research that addresses the world's most pressing challenges.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
