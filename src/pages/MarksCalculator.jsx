import { useState } from 'react';

const MarksCalculator = () => {
  const [marks, setMarks] = useState({
    sub1: '', sub2: '', sub3: '', sub4: '', sub5: ''
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setMarks({ ...marks, [e.target.name]: e.target.value });
  };

  const calculateMarks = (e) => {
    e.preventDefault();
    const s1 = parseFloat(marks.sub1);
    const s2 = parseFloat(marks.sub2);
    const s3 = parseFloat(marks.sub3);
    const s4 = parseFloat(marks.sub4);
    const s5 = parseFloat(marks.sub5);

    if (isNaN(s1) || isNaN(s2) || isNaN(s3) || isNaN(s4) || isNaN(s5)) {
      alert("Please enter valid numbers for all subjects.");
      return;
    }

    const total = s1 + s2 + s3 + s4 + s5;
    const average = total / 5;
    setResult({ total, average, passed: average >= 40 });
  };

  return (
    <div className="page-container" style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '300px' }}>
        <h1 className="page-title">Marks Calculator</h1>
        <p className="page-subtitle">Enter your marks for 5 subjects to calculate total and average.</p>
        
        <form className="contact-form" onSubmit={calculateMarks}>
          <div className="form-group">
            <label>Subject 1</label>
            <input type="number" name="sub1" value={marks.sub1} onChange={handleChange} required min="0" max="100" />
          </div>
          <div className="form-group">
            <label>Subject 2</label>
            <input type="number" name="sub2" value={marks.sub2} onChange={handleChange} required min="0" max="100" />
          </div>
          <div className="form-group">
            <label>Subject 3</label>
            <input type="number" name="sub3" value={marks.sub3} onChange={handleChange} required min="0" max="100" />
          </div>
          <div className="form-group">
            <label>Subject 4</label>
            <input type="number" name="sub4" value={marks.sub4} onChange={handleChange} required min="0" max="100" />
          </div>
          <div className="form-group">
            <label>Subject 5</label>
            <input type="number" name="sub5" value={marks.sub5} onChange={handleChange} required min="0" max="100" />
          </div>
          <button type="submit" className="btn">Calculate</button>
        </form>
      </div>

      {result && (
        <div style={{ flex: '1', minWidth: '300px', display: 'flex', alignItems: 'center' }}>
          <div className="card" style={{ width: '100%', borderTop: `5px solid ${result.passed ? '#10B981' : '#EF4444'}` }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Result</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Total Marks</span>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{result.total} / 500</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Average</span>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{result.average.toFixed(2)}%</span>
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <span style={{ 
                display: 'inline-block',
                padding: '0.5rem 2rem', 
                borderRadius: '50px',
                fontWeight: 'bold',
                backgroundColor: result.passed ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                color: result.passed ? '#10B981' : '#EF4444'
              }}>
                {result.passed ? 'PASS' : 'FAIL'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarksCalculator;
