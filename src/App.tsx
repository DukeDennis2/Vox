import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';

function App() {
  const [inputValue, setInputValue] = useState('Vox');
  const [mode, setMode] = useState<'default' | 'dark' | 'green'>('default');

  const textRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const setDefaultMode = () => setMode('default');
  const setDarkMode = () => setMode('dark');
  const setGreenMode = () => setMode('green');

  let backgroundColor = '#ffffff';
  let textColor = '#000000';

  if (mode === 'dark') {
    backgroundColor = '#000000';
    textColor = '#ffffff';
  } else if (mode === 'green') {
    backgroundColor = '#98fb98';
    textColor = '#000000';
  }

  // 📸 Export only projected text
  const exportAsPNG = async () => {
    if (textRef.current) {
      const canvas = await html2canvas(textRef.current, {
        backgroundColor: backgroundColor, // Use current mode background
      });
      const link = document.createElement('a');
      link.download = 'vox_text.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

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
        ref={textRef}
        style={{
          fontWeight: '100',
          fontSize: '64px',
          marginBottom: '20px',
          textAlign: 'center',
          wordBreak: 'break-word',
          width: '100%',
          maxWidth: '600px',
          backgroundColor: backgroundColor, // background color in export
          color: textColor,
          padding: '20px',
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
          marginTop: '1.5em',
          padding: '12px 16px',
          fontSize: '20px',
          width: '100%',
          maxWidth: '400px',
          boxSizing: 'border-box',
          fontFamily: 'Georgia, "Times New Roman", Times, serif',
          backgroundColor: 'transparent',
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
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
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

      {/* Export button */}
      <button
        onClick={exportAsPNG}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#333',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        Download as PNG
      </button>

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