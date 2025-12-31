/**
 * CSRFトークンを取得するユーティリティ関数
 * 
 * CSRFトークンが変わるタイミング：
 * - セッションが変わる時（ログイン/ログアウト）
 * - セッションが期限切れになる時
 * - セッションが再生成される時（セキュリティ上の理由）
 * 
 * 通常、同じセッション内ではCSRFトークンは変わらないため、
 * クッキーから取得できる場合はそれを使用し、取得できない場合のみ
 * GETリクエストを送信してトークンを取得します。
 */

/**
 * クッキーからCSRFトークンを取得する
 * @returns CSRFトークン、取得できない場合はnull
 */
export const getCsrfToken = (): string | null => {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'csrftoken') {
      return decodeURIComponent(value);
    }
  }
  return null;
};

/**
 * CSRFトークンを取得するためにGETリクエストを送信し、その後クッキーからトークンを取得する
 * これによりDjangoがcsrftokenクッキーを設定します
 * @param endpoint リクエストを送信するエンドポイント（デフォルト: '/api/status/'）
 * @returns CSRFトークン、取得できない場合はnull
 */
export const fetchAndGetCsrfToken = async (endpoint: string = '/api/status/'): Promise<string | null> => {
  try {
    // CSRFトークンを取得するためにまずGETリクエストを送信
    await fetch(endpoint, {
      method: 'GET',
      credentials: 'include',
    });

    // CSRFトークンを取得
    return getCsrfToken();
  } catch (error) {
    console.error('CSRFトークンの取得に失敗しました:', error);
    return null;
  }
};

/**
 * ヘッダーにCSRFトークンを追加する
 * @param headers 既存のヘッダーオブジェクト
 * @param csrfToken CSRFトークン（省略時は自動取得）
 * @returns CSRFトークンが追加されたヘッダーオブジェクト
 */
export const addCsrfTokenToHeaders = async (
  headers: HeadersInit = {},
  csrfToken?: string | null
): Promise<HeadersInit> => {
  const token = csrfToken ?? await fetchAndGetCsrfToken();
  
  if (token) {
    return {
      ...headers,
      'X-CSRFToken': token,
    };
  }
  
  return headers;
};

/**
 * JSONコンテンツタイプとCSRFトークンを含むヘッダーを作成する
 * まずクッキーからトークンを取得し、存在しない場合のみGETリクエストを送信します
 * @param csrfToken CSRFトークン（省略時は自動取得）
 * @returns JSONヘッダーとCSRFトークンを含むヘッダーオブジェクト
 */
export const createJsonHeaderWithCSRFToken = async (
  csrfToken?: string | null
): Promise<HeadersInit> => {
  // 既にトークンが指定されている場合はそれを使用
  if (csrfToken !== undefined) {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    if (csrfToken) {
      headers['X-CSRFToken'] = csrfToken;
    }
    return headers;
  }
  
  // まずクッキーから取得を試みる（効率的）
  let token = getCsrfToken();
  
  // クッキーにトークンがない場合のみGETリクエストを送信
  if (!token) {
    token = await fetchAndGetCsrfToken();
  }
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  if (token) {
    headers['X-CSRFToken'] = token;
  }
  
  return headers;
};
