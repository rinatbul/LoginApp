import { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    // Имитация API запроса
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password123') {
          setIsAuthenticated(true);
          resolve(true);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  return (
    <div className="app">
      {!isAuthenticated ? (
        <LoginForm onSubmit={handleLogin} />
      ) : (
        <div className="welcome-message">
          <h1>Добро пожаловать!</h1>
          <p>Вы успешно вошли в систему.</p>
        </div>
      )}
    </div>
  );
}

export default App; 