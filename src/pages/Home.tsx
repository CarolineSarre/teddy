import React, { useState } from 'react';
import { useUserContext } from '../store/UserContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home: React.FC = () => {
  const [name, setName] = useState('');
  const { setUserName } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setUserName(name);
      navigate('/clients');
    }
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Olá, seja bem-vindo!</h1>
        <form onSubmit={handleSubmit} className="home-form">
          <label htmlFor="name">Digite o seu nome:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite o seu nome"
            required
          />
          <button type="submit" className="enter-button">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Home;