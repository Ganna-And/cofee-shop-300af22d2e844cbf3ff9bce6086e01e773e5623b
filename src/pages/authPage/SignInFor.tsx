import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SignInForm = () => {
  // State variables to store user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const navigate = useNavigate()


  // Function to handle form submission
  const handleSubmit = (e:any) => {
    e.preventDefault();
    // You can add your authentication logic here
    console.log('Submitted:', { email, password });
    navigate('/')

  };

  return (
    <div className="signin-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input
            type="password"
            placeholder='password'
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className='submit'>Start Journey</button>
        </div>
      </form>
      <p>
    By signing up, you agree to our <a href="#" className="terms-link">Terms and Conditions</a> and <a href="#" className="tralala-link">Tralala</a>.
</p>
    </div>
  );
};

export default SignInForm;
