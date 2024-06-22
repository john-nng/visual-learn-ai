import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import LandingPage from './components/landing.tsx'; // Adjust the path if necessary

function App() {
  const [inputText, setInputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) { // Check if Enter key was pressed
      setIsProcessing(true);

      // Simulate processing action (setTimeout is used here for demo purposes)
      setTimeout(() => {
        // Dummy action to add a text component
        console.log('Processing complete');
        setIsProcessing(false);
      }, 2000); // Simulate 2 seconds processing time (adjust as needed)
    }
  };

  const textContainerStyleV = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const textContainerStyleH = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '60px', // Space between horizontal items
  };

  const styles = {
    visualLearn: {
      color: '#151515',
      fontSize: '80px',
      fontWeight: '800',
      fontFamily: 'Poppins, sans-serif',
      marginRight: '10px', // Space between VisualLearn and AI
    },
    ai: {
      color: '#1DD9C3',
      fontSize: '80px', // Adjust font size as needed
      fontWeight: '800',
      fontFamily: 'Poppins, sans-serif',
    },
    inputText: {
      color: '#333', // Adjust color as needed
      fontSize: '18px', // Adjust font size as needed
      fontWeight: '600',
      fontFamily: 'Arial, sans-serif',
      marginTop: '20px', // Space above input text
    },
  };

  const textBoxStyle = {
    width: '100%', // Take full width of the container
    maxWidth: '600px', // Maximum width for readability
    padding: '10px',
    fontSize: '16px',
    fontFamily: 'Poppins, sans-serif',
    border: '5px #7A7A7A solid',
    boxShadow: '8px 8px 0px rgba(0, 0, 0, 0.25)',
    borderRadius: '0px',
    boxSizing: 'border-box',
    marginBottom: '20px',
    outline: 'none',
  };

  return (
    <main>
      <div style={textContainerStyleV}>
        <div style={textContainerStyleH}>
          <div style={styles.visualLearn}>VisualLearn</div>
          <div style={styles.ai}>AI</div>
        </div>
        <textarea
          style={textBoxStyle}
          placeholder="Enter your text here..."
          rows={10}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)} // Update inputText state
          onKeyDown={handleKeyDown} // Handle Enter key press
        />
        {isProcessing && <div style={styles.inputText}>Processing...</div>}
        <div style={styles.inputText}>Input text</div>
      </div>
    </main>
  );
}

export default App;
