import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UserRegistration.module.scss';
import { createJsonHeaderWithCSRFToken } from '../utils/csrfToken';

export default function UserRegistration() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);
    
    try {
      const url = "/api/auth/users/"
      const data = {
        "email": email,
        "name": name,
        "password": password,
        "re_password": password,
      }
      
      // JSONヘッダーとCSRFトークンを含むヘッダーを作成
      const headers = await createJsonHeaderWithCSRFToken();
      
      const response = await fetch(url, {
        method: 'POST',
        headers,
        credentials: 'include',
        body: JSON.stringify(data),
      });
      
      // TODO: refactoring error handling.
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('登録失敗:', errorData);
        
        // エラーメッセージをフィールドごとに解析
        const fieldErrors: Record<string, string[]> = {};
        
        // errorDataがオブジェクトの場合、各フィールドのエラーを抽出
        if (errorData && typeof errorData === 'object') {
          // detailsがある場合（status: "FAILED", details: {...}の形式）
          const errors = errorData.details || errorData;
          
          for (const [field, messages] of Object.entries(errors)) {
            if (Array.isArray(messages)) {
              // 配列の場合はそのまま設定
              fieldErrors[field] = messages;
            } else if (typeof messages === 'string') {
              // 文字列の場合は配列に変換
              fieldErrors[field] = [messages];
            }
          }
        }
        
        setErrors(fieldErrors);
      } else {
        navigate('/registration-email-sent');
      }
    } catch (err) {
      setErrors({ general: ['登録に失敗しました'] });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.userRegistration}>
      <div>
        <h1>会員登録</h1>
        メールアドレスとパスワードを入力してください
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">メールアドレス</label>
            <br />
            {errors.email && errors.email.length > 0 && (
              <div className={styles.fieldError}>
                {errors.email.map((msg, idx) => (
                  <div key={idx}>{msg}</div>
                ))}
              </div>
            )}
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="例) aya.yamada@example.com"
              required
              disabled={isLoading}
            />
            <br />
            ※メールアドレスは後から変更できます
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password">パスワード</label>
            <br />
            {errors.password && errors.password.length > 0 && (
              <div className={styles.fieldError}>
                {errors.password.map((msg, idx) => (
                  <div key={idx}>{msg}</div>
                ))}
              </div>
            )}
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

          <div className={styles.formGroup}>
            <label htmlFor="name">ユーザー名</label>
            <br />
            {errors.name && errors.name.length > 0 && (
              <div className={styles.fieldError}>
                {errors.name.map((msg, idx) => (
                  <div key={idx}>{msg}</div>
                ))}
              </div>
            )}
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ユーザー名"
              required
              disabled={isLoading}
            />
            <br />
            ※ユーザー名は後から変更できます
          </div>

          {errors.re_password && errors.re_password.length > 0 && (
            <div className={styles.error}>
              {errors.re_password.map((msg, idx) => (
                <div key={idx}>{msg}</div>
              ))}
            </div>
          )}
          {errors.general && errors.general.length > 0 && (
            <div className={styles.error}>
              {errors.general.map((msg, idx) => (
                <div key={idx}>{msg}</div>
              ))}
            </div>
          )}
          <br />
          <br />
          <button type="submit" disabled={isLoading}>
            {isLoading ? '登録中...' : '次へ'}
          </button>
        </form>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
