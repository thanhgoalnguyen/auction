import React, { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { UserEntity } from '@types';
import { createJsonHeaderWithCSRFToken, getCsrfToken } from '../utils/csrfToken';

interface AuthContextValue {
  user:             UserEntity | null;
  isAuthenticated:  boolean;
  login:            (id: string, password: string) => Promise<boolean>;
  logout:           () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);


export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserEntity | null>(() => {
    // ローカルストレージから復元
    const saved = localStorage.getItem('auth_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = useCallback(async (mail: string, password: string): Promise<boolean> => {
    try {
      // JSONヘッダーとCSRFトークンを含むヘッダーを作成
      const headers = await createJsonHeaderWithCSRFToken();

      const loginResponse = await fetch('/api/login/', {
        method: 'POST',
        headers,
        credentials: 'include', // セッション認証のために必要
        body: JSON.stringify({
          email: mail, // バックエンドはemailフィールドを期待
          password: password,
        }),
      });

      if (!loginResponse.ok) {
        const errorData = await loginResponse.json().catch(() => ({}));
        console.error('ログイン失敗:', errorData);
        return false;
      }

      const loginData = await loginResponse.json();
      const userId = loginData.user_id;

      // ユーザー詳細情報を取得
      const userDetailResponse = await fetch(`/api/user_detail/${userId}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!userDetailResponse.ok) {
        console.error('ユーザー情報の取得に失敗しました');
        return false;
      }

      const userData = await userDetailResponse.json();
      
      // バックエンドのレスポンスをUserEntityにマッピング
      const user: UserEntity = {
        id: userData.id,
        username: userData.name || '', // バックエンドはnameフィールド
        mail: userData.email || mail, // バックエンドはemailフィールド
        image: userData.image || '', // 画像がない場合は空文字列
        password: '', // パスワードは保存しない
      };

      setUser(user);
      localStorage.setItem('auth_user', JSON.stringify(user));
      return true;
    } catch (error) {
      console.error('ログインエラー:', error);
      return false;
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      // JSONヘッダーとCSRFトークンを含むヘッダーを作成
      const csrfToken = getCsrfToken();
      const headers = await createJsonHeaderWithCSRFToken(csrfToken);

      // バックエンドのREST APIを使用してログアウト
      await fetch('/api/logout/', {
        method: 'POST',
        headers,
        credentials: 'include',
      });
    } catch (error) {
      console.error('ログアウトエラー:', error);
    } finally {
      setUser(null);
      localStorage.removeItem('auth_user');
    }
  }, []);

  const value: AuthContextValue = {
    user,
    isAuthenticated: user !== null,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

