import { useState, FormEvent } from 'react';
import '../styles/LoginForm.css';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await onSubmit(email, password);
    } catch (err) {
      setError('Неверный email или пароль');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form 
        className="login-form" 
        onSubmit={handleSubmit}
        aria-labelledby="login-title"
      >
        <h1 id="login-title" className="login-title">Вход в систему</h1>
        
        {error && (
          <div className="error-message" role="alert">
            {error}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
            aria-required="true"
            aria-invalid={error ? 'true' : 'false'}
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Пароль
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
            aria-required="true"
            aria-invalid={error ? 'true' : 'false'}
            disabled={isLoading}
            minLength={6}
          />
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={isLoading}
          aria-busy={isLoading}
        >
          {isLoading ? 'Вход...' : 'Войти'}
        </button>
      </form>
    </div>
  );
}; 