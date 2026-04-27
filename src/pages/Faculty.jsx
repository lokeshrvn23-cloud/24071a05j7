const Faculty = () => {
  const faculty = [
    { id: 1, name: 'Dr. Sarah Jenkins', role: 'Professor of Computer Science', specialization: 'Artificial Intelligence' },
    { id: 2, name: 'Dr. Michael Chen', role: 'Associate Professor of Business', specialization: 'International Finance' },
    { id: 3, name: 'Dr. Emily Rodriguez', role: 'Head of Psychology', specialization: 'Cognitive Neuroscience' },
    { id: 4, name: 'Prof. David Smith', role: 'Professor of Engineering', specialization: 'Robotics' },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Our Faculty</h1>
      <p className="page-subtitle">Learn from distinguished scholars and industry experts who are dedicated to your success.</p>
      
      <div className="grid">
        {faculty.map(member => (
          <div key={member.id} className="card">
            <h3>{member.name}</h3>
            <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '0.5rem' }}>{member.role}</p>
            <p>Specialization: {member.specialization}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
