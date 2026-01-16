import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PageHeader from "@/components/layout/PageHeader";
import Input from '@/components/ui/Input';
import ButtonContainer from '@/components/ui/ButtonContainer';

import { ROUTE_PATH } from '@/data/demo';

export default function UserRegistration() {
  	const navigate = useNavigate();
	const [length, setLength] = useState(0);

	const handleToTop = () => {
		navigate(ROUTE_PATH?.REGISTRATION_EMAIL_SENT);
	}

	const handleChangePass = (event) => {
		const value = event?.target?.value;
		setLength(value?.length);
	}
  	return (
		<div className="user-registration flex flex-col items-center w-full h-max min-h-full">
			<PageHeader title="会員登録"/>
			<div className="container">
				<p className="text-[10px] leading-[12px] mb-6">メールアドレスとパスワードを入力してください</p>
				<Input
					className="mb-4"
					label="ニックネーム"
					placeholder="例：future.vintage@example.com"
				>
					<p>※メールアドレスは後から変更できます</p>
				</Input>
				<Input
					className="mb-6"
					label="パスワード"
				>
				</Input>
				<Input
					className="mb-[59px]"
					label="ニックネーム"
					placeholder="Future Vintage内でのニックネーム"
					type="password"
					maxLength={20}
					onChange={handleChangePass}
				>
					<>
						<p>※ニックネームは後から変更できます</p>
						<p className='text-black'>{length}/20</p>
					</>
				</Input>
				<ButtonContainer onClick={handleToTop}>
					次へ
				</ButtonContainer>
			</div>
		</div>
	);
}
