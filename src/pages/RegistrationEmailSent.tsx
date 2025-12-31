import styles from './RegistrationEmailSent.module.scss';
import { useNavigate } from 'react-router-dom';

export default function RegistrationEmailSent() {
  const navigate = useNavigate();
  return (
    <div className={styles.registrationEmailSent}>
      <div>
        <h1>メールを送信しました</h1>
        会員登録メールを送信しました。メールに記載されているリンクをクリックして，会員登録を完了してください。
        メールが届かない場合は，迷惑メールフォルダもご確認ください。
        <br />
        <br />
        <button onClick={() => navigate('/')}>トップページへ</button>
      </div>
    </div>
  );
}
