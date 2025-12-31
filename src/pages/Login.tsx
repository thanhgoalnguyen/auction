import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import styles from './Login.module.scss';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(id, password);
      if (success) {
        navigate('/rooms', { replace: true });
      } else {
        setError('メールアドレスまたはパスワードが正しくありません');
      }
    } catch (err) {
      setError('ログインに失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginCard}>
        <h1>ログイン</h1>
        <a href="/user-registration">会員登録はこちら</a>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="mail">メールアドレス</label>
            <br />
            <input
              id="mail"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="メールアドレス"
              required
              disabled={isLoading}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password">パスワード</label>
            <br />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="パスワード"
              required
              disabled={isLoading}
            />
          </div>

          {error && <div className={styles.error}>{error}</div>}

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'ログイン中...' : 'ログイン'}
          </button>
        </form>
        <br />
        <br />
        アカウントをお持ちでない方
        <br />
        <button onClick={() => navigate('/user-registration')}>会員登録</button>

        {/* <div className={styles.hint}>
          <p>デモ用認証情報:</p>
          <p>ID: <code>demo</code></p>
          <p>パスワード: <code>demo123</code></p>
        </div> */}
      </div>
    </div>
  );
}

