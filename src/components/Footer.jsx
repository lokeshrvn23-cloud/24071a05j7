const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem 5%',
      borderTop: '1px solid var(--border-color)',
      marginTop: 'auto',
      color: 'var(--text-muted)'
    }}>
      <p>&copy; {new Date().getFullYear()} 24071a05j7. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
