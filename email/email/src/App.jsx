// App.js
import React, { useState } from 'react';
import EmailValidationForm from './Component/EmailValidationForm ';

function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // Email regex for validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '') {
      setError('Email is required.');
    } else if (!emailRegex.test(email)) {
      setError('Please enter a valid email.');
    } else {
      setError('');
      alert('Email is valid!');
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4">
      <EmailValidationForm 
        email={email} 
        onChange={handleEmailChange} 
        error={error} 
        onSubmit={handleSubmit} 
      />
    </div>
  );
}

export default App;
