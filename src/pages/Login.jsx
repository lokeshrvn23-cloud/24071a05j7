const Login = () => {
  return (
    <div className="page-container" style={{ display: 'flex', justifyContent: 'center' }}>
      <form className="contact-form" style={{ width: '100%' }} onSubmit={(e) => e.preventDefault()}>
        <h2 style={{ marginBottom: '1rem', color: '#F8FAFC' }}>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" required />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
