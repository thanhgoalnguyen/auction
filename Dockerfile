FROM node:22-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonをコピー
COPY package.json ./

# 依存関係をインストール（package-lock.jsonがない場合はnpm installを使用）
RUN npm install

# ソースコードをコピー
COPY . .

# ポート5173を公開（Viteのデフォルトポート）
EXPOSE 5173

# 開発サーバーを起動（ホストを0.0.0.0に設定してDockerコンテナからアクセス可能にする）
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
