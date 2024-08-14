import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assurez-vous d'utiliser 'useHistory' si vous êtes en React Router v5
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Remplacez par 'useHistory()' si vous utilisez React Router v5

  const handleSubmit = (event) => {
    event.preventDefault();

    // Vérifiez les informations d'identification
    if (email === 'awa@gmail.com' && password === '123456') {
      // Redirigez vers la page d'accueil
      navigate('/home'); // Remplacez '/home' par la route de votre page d'accueil
    } else {
      // Affichez un message d'erreur ou prenez une autre action
      alert('Email ou mot de passe incorrect.');
    }
  };

  return (
    <div className="contenue">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
