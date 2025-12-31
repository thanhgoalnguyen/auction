import styles from './TopNoLogin.module.scss';

export default function TopNoLogin() {
  return (
    <div className={styles.topNoLogin}>
      <div>
        Future Vintage へようこそ！
        <br />
        <a href="/user-registration">会員登録</a>
        <br />
        <a href="/login" className="opacity-80 text-[50px] text-rrrr-100">
          ログインa222
        </a>
        <br />
      </div>
    </div>
  );
}
