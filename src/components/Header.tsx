import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../store/UserContext';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controla o estado do menu lateral
  const { userName } = useUserContext(); // Recupera o nome do usuário do contexto

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Ícone de menu hamburger */}
        </button>
        <span className="logo">teddy</span>
        <span className="open-finance">OPEN FINANCE</span>
      </div>

      {/* Menu lateral (hamburger) que aparece quando isMenuOpen é true */}
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="side-menu-nav">
          <Link to="/" className="side-menu-link">Home</Link>
          <Link to="/clients" className="side-menu-link">Clientes</Link>
          <Link to="/selected-clients" className="side-menu-link">Clientes selecionados</Link>
          <Link to="/logout" className="side-menu-link">Sair</Link>
        </nav>
      </div>

      {/* Menu de navegação para desktop (normal) */}
      <nav className="header-nav">
        <Link to="/clients" className="nav-link">Clientes</Link>
        <Link to="/selected-clients" className="nav-link">Clientes selecionados</Link>
        <Link to="/logout" className="nav-link">Sair</Link>
      </nav>

      <div className="header-right">
        <span>Olá, {userName ? userName : 'Usuário'}!</span>
      </div>
    </header>
  );
};

export default Header;