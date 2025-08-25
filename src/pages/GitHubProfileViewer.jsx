import React, { useState } from 'react';

const GitHubProfileViewer = () => {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fetch logic will go here later
  };

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: 24, border: '1px solid #ddd', borderRadius: 8 }}>
      <h1 style={{ textAlign: 'center' }}>GitHub Profile Viewer</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ flex: 1, padding: 8, fontSize: 16 }}
        />
        <button type="submit" style={{ padding: '8px 16px', fontSize: 16 }}>Search</button>
      </form>
      <div>
        {/* Profile details will be rendered here */}
        {profile ? (
          <div>
            {/* Profile info */}
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: '#888' }}>No profile loaded.</p>
        )}
      </div>
    </div>
  );
};

export default GitHubProfileViewer;