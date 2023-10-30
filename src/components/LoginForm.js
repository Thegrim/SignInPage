import React, { useState, useEffect } from 'react';
import { validateInput, validateEmail, validatePassword } from '../utils/validateInput';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '', form: '' });

  useEffect(() => {
    if (email === '') {
      setErrors({ ...errors, email: '' });
    } else {
      setErrors({ ...errors, email: validateEmail(email) ? '' : 'Invalid email address' });
    }
  }, [email]);

  useEffect(() => {
    if (password === '') {
      setErrors({ ...errors, password: '' });
    } else {
      setErrors({
        ...errors,
        password: validatePassword(password)
          ? ''
          : 'Password must contain at least one uppercase letter and a special character',
      });
    }
  }, [password]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.form) {
      setErrors({ ...errors, form: '' });
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.form) {
      setErrors({ ...errors, form: '' });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateInput(email, password)) {
      // Submit the form to the server
      // ...
    } else {
      setErrors({ ...errors, form: 'Invalid input' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      {errors.email && <div className="error">{errors.email}</div>}
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      {errors.password && <div className="error">{errors.password}</div>}
      {errors.form && <div className="error">{errors.form}</div>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
