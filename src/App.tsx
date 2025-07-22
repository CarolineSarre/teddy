import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClientProvider } from './store/ClientContext';
import Home from './pages/Home';
import ClientListPage from './pages/ClientListPage';
import ClientDetailPage from './pages/ClientDetailPage';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <ClientProvider>
      <Router>
        <div className="App">
          {/* Rotas da aplicação */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clients" element={<ClientListPage />} />
            <Route path="/client/:id" element={<ClientDetailPage />} />
          </Routes>
        </div>
      </Router>
    </ClientProvider>
  );
};

export default App;