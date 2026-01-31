import { useNavigate } from 'react-router-dom';

import PageHeader from "@/components/layout/PageHeader";
import ButtonContainer from '@/components/ui/ButtonContainer';
import Input from "@/components/ui/Input";

import { ROUTE_PATH } from '@/data/demo';

export default function EmailPasswordSetting() {
  	const navigate = useNavigate();

	const handleToTop = () => {
		navigate(ROUTE_PATH?.TOP_NO_LOGIN);
	}
	
	return (
		<div className="email-password-setting-page page-container flex flex-col items-center w-full h-max">
			<PageHeader title="メール・パスワード"/>
			<div className="container">
				<Input
					label="メールアドレス"
					placeholder="future.vintage@gmail.com"
					className="mb-4"
				/>
				<div className="flex flex-col gap-2 px-1 mb-7 text-[7px] leading-[8px] text-neutral-700">
					<p>メールアドレスを変更すると確認メールが送信されます。</p>
					<p>メール内のURLをクリックすると変更完了です。</p>
				</div>
				<Input
					label="現在のパスワード"
					placeholder="future.vintage@gmail.com"
					className="mb-7"
					type="password"
					showPasswordIcon
				/>
					<Input
					label="新しいパスワード"
					placeholder="future.vintage@gmail.com"
					className="mb-7"
					type="password"
					showPasswordIcon
				/>
				<Input
					label="新しいパスワードの確認"
					placeholder="future.vintage@gmail.com"
					className="mb-4"
					type="password"
					showPasswordIcon
				/>
				<p className="mb-[88px] ml-1 text-[9px] leading-[11px] text-neutral-700">パスワードを設定したい場合は上記を全て入力してください。</p>
				<ButtonContainer onClick={handleToTop}>
					更新する
				</ButtonContainer>
			</div>
		</div>
	);
}
