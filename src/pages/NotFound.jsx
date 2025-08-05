const NotFound = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#f8f9fa'
    }}>
      <h1 style={{ fontSize: '4rem', color: '#dc3545' }}>404</h1>
      <h2 style={{ marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ marginBottom: '2rem', color: '#6c757d' }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <a
        href="/"
        style={{
          padding: '0.75rem 1.5rem',
          background: '#007bff',
          color: '#fff',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;