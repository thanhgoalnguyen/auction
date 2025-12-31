import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import App from "./App.tsx";
import AgoraRTC from "agora-rtc-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Agoraログレベル定数 (SDK内には定義されていないようなので，ここで定義する)
export const AgoraLogLevel = {
	DEBUG: 0,
	INFO: 1,
	WARNING: 2,
	ERROR: 3,
	NONE: 4,
} as const;

// サイト全体のAgoraログレベルを設定
// 開発環境: DEBUG or INFO、本番環境: WARNING or ERROR を推奨
AgoraRTC.setLogLevel(AgoraLogLevel.WARNING);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
