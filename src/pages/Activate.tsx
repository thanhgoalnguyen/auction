import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Activate.module.scss';
import { createJsonHeaderWithCSRFToken } from '../utils/csrfToken';

export default function Activate() {
  const { uid, token } = useParams<{ uid: string; token: string }>();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');
  const hasActivated = useRef(false);

  useEffect(() => {
    // 既にアクティベーションリクエストを送信済みの場合はスキップ
    if (hasActivated.current) {
      return;
    }

    const activateAccount = async () => {
      if (!uid || !token) {
        setStatus('error');
        setMessage('アクティベーションURLが無効です');
        return;
      }

      // リクエスト送信フラグを設定
      hasActivated.current = true;

      try {
        const url = '/api/auth/users/activation/';
        const data = {
          uid: uid,
          token: token,
        };

        // JSONヘッダーとCSRFトークンを含むヘッダーを作成
        const headers = await createJsonHeaderWithCSRFToken();

        const response = await fetch(url, {
          method: 'POST',
          headers,
          credentials: 'include',
          body: JSON.stringify(data),
        });

        if (response.status === 204) {
          // アクティベーション成功
          setStatus('success');
          setMessage('アカウントの有効化が完了しました。ログインページに移動します...');
          // 3秒後にログインページにリダイレクト
          setTimeout(() => {
            navigate('/login', { replace: true });
          }, 3000);
        } else {
          // アクティベーション失敗
          const errorData = await response.json().catch(() => ({}));
          setStatus('error');
          setMessage(errorData.detail || 'アカウントの有効化に失敗しました。URLが無効または期限切れの可能性があります。');
        }
      } catch (err) {
        setStatus('error');
        setMessage('アカウントの有効化中にエラーが発生しました。');
        console.error('アクティベーションエラー:', err);
      }
    };

    activateAccount();
  }, [uid, token, navigate]);

  return (
    <div className={styles.activate}>
      <div className={styles.activateCard}>
        {status === 'loading' && (
          <>
            <h1>アカウントを有効化しています...</h1>
            <p>しばらくお待ちください</p>
          </>
        )}
        {status === 'success' && (
          <>
            <h1>✓ 有効化完了</h1>
            <p className={styles.successMessage}>{message}</p>
          </>
        )}
        {status === 'error' && (
          <>
            <h1>✗ 有効化失敗</h1>
            <p className={styles.errorMessage}>{message}</p>
            <button onClick={() => navigate('/login')} className={styles.loginButton}>
              ログインページに戻る
            </button>
          </>
        )}
      </div>
    </div>
  );
}
