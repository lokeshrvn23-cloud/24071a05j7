const Courses = () => {
  const courses = [
    { id: 1, title: 'Computer Science', desc: 'Learn software engineering, algorithms, and artificial intelligence.' },
    { id: 2, title: 'Business Administration', desc: 'Develop leadership skills and understand global markets.' },
    { id: 3, title: 'Data Science', desc: 'Master data analysis, machine learning, and statistical modeling.' },
    { id: 4, title: 'Mechanical Engineering', desc: 'Design and build innovative mechanical systems and machines.' },
    { id: 5, title: 'Psychology', desc: 'Explore human behavior, cognition, and mental health processes.' },
    { id: 6, title: 'Environmental Science', desc: 'Study ecosystems and develop sustainable solutions for our planet.' },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Academic Programs</h1>
      <p className="page-subtitle">Discover a wide range of undergraduate and graduate programs designed to ignite your passion.</p>
      
      <div className="grid">
        {courses.map(course => (
          <div key={course.id} className="card">
            <h3>{course.title}</h3>
            <p>{course.desc}</p>
            <button className="btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
