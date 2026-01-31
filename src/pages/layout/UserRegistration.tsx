import { useNavigate } from 'react-router-dom';

import PageHeader from "@/components/layout/PageHeader";
import Input from '@/components/ui/Input';
import ButtonContainer from '@/components/ui/ButtonContainer';

import { ROUTE_PATH } from '@/data/demo';

export default function UserRegistration() {
  	const navigate = useNavigate();
	
	const handleToTop = () => {
		navigate(ROUTE_PATH?.REGISTRATION_EMAIL_SENT);
	}
	
  	return (
		<div className="user-registration-page page-container flex flex-col items-center w-full h-max">
			<PageHeader title="会員登録"/>
			<div className="container">
				<p className="text-[10px] leading-[12px] mb-6">メールアドレスとパスワードを入力してください</p>
				<Input
					className="mb-4"
					label="ニックネーム"
					placeholder="例：future.vintage@example.com"
					title="※メールアドレスは後から変更できます"
				/>
				<Input
					className="mb-6"
					label="パスワード"
					type="password"
				>
				</Input>
				<Input
					className="mb-[59px] [&_.input-max-length]:text-black"
					label="ニックネーム"
					placeholder="Future Vintage内でのニックネーム"
					maxLength={20}
					title="※ニックネームは後から変更できます"
				/>
				<ButtonContainer onClick={handleToTop}>
					次へ
				</ButtonContainer>
			</div>
		</div>
	);
}
