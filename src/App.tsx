import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [mode, setMode] = useState<'default' | 'dark' | 'green'>('default');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Functions to change modes
  const setDefaultMode = () => setMode('default');
  const setDarkMode = () => setMode('dark');
  const setGreenMode = () => setMode('green');

  // Colors for container
  let backgroundColor = '#ffffff';
  let textColor = '#000000';

  if (mode === 'dark') {
    backgroundColor = '#000000';
    textColor = '#ffffff';
  } else if (mode === 'green') {
    backgroundColor = '#98fb98';
    textColor = '#000000';
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        padding: '0 20px',
        boxSizing: 'border-box',
        backgroundColor: backgroundColor,
        color: textColor,
        transition: 'background-color 0.3s, color 0.3s',
      }}
    >
      <div
        style={{
          fontWeight: '100',
          fontSize: '64px',
          marginBottom: '20px',
          textAlign: 'center',
          wordBreak: 'break-word',
          width: '100%',
          maxWidth: '600px', 
        }}
      >
        {inputValue}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
        style={{
          marginTop:'1.5em',
          padding: '12px 16px',
          fontSize: '20px',
          width: '100%',
          maxWidth: '400px',
          boxSizing: 'border-box',
          fontFamily: 'Georgia, "Times New Roman", Times, serif',
          backgroundColor: '#ffffff',
          color: 'inherit',
          border: '2px solid #ccc',
          borderRadius: '8px',
          outline: 'none',
          transition: 'border-color 0.3s, box-shadow 0.3s',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#888';
          e.target.style.boxShadow = '0 0 5px rgba(0,0,0,0.2)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = '#ccc';
          e.target.style.boxShadow = 'none';
        }}
      />
      {/* Mode buttons */}
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        {/* Default */}
        <button
          onClick={setDefaultMode}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '2px solid #000',
            backgroundColor: '#fff',
            cursor: 'pointer',
          }}
          title="Default Mode"
        />

        {/* Dark mode */}
        <button
          onClick={setDarkMode}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '2px solid #fff',
            backgroundColor: '#000',
            cursor: 'pointer',
          }}
          title="Dark Mode"
        />

        {/* Green mode */}
        <button
          onClick={setGreenMode}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '2px solid #000',
            backgroundColor: '#98fb98',
            cursor: 'pointer',
          }}
          title="Green Mode"
        />
      </div>

      <footer
        style={{
          position: 'fixed',
          bottom: 10,
          width: '100%',
          textAlign: 'center',
          fontSize: '14px',
          color: '#888',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        © {new Date().getFullYear()} Vox. All rights reserved.
      </footer>
    </div>
  );
}

export default App;