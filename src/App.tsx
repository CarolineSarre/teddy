import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { UserProvider } from './store/UserContext'; // Certifique-se de que o contexto está sendo importado
import Home from './pages/Home';
import ClientListPage from './pages/ClientListPage';
import ClientDetailPage from './pages/ClientDetailPage';
import Header from './components/Header'; // Certifique-se de que o Header está sendo importado
import './styles/App.css';

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <AppWithHeader />
      </Router>
    </UserProvider>
  );
};

const AppWithHeader: React.FC = () => {
  const location = useLocation(); // Hook para pegar a localização atual

  // Renderiza o Header apenas se a página não for Home
  const shouldRenderHeader = location.pathname !== '/';

  return (
    <div className="App">
      {/* Renderiza o Header apenas nas páginas diferentes de Home */}
      {shouldRenderHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<ClientListPage />} />
        <Route path="/client/:id" element={<ClientDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;