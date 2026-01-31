import { useNavigate } from "react-router-dom";

import PageHeader from "@/components/layout/PageHeader";
import ButtonContainer from "@/components/ui/ButtonContainer";

export default function RegistrationEmailSent() {
  	const navigate = useNavigate();

	const handleToTop = () => {
		navigate('/layout/');
	}

  	return (
		<div className="registration-email-sent-page page-container flex flex-col items-center w-full h-max">
			<PageHeader title="メールを送信しました"/>
			<div className="container flex flex-col gap-[187px]">
				<div className="flex flex-col gap-[6px] text-[13px] leading-[16px]">
					<p>会員登録メールを送信しました。メールに記載されている</p>
					<p>リンクをクリックして、会員登録を完了してください。</p>
					<p>メールが届かない場合は、迷惑メールフォルダもご確認く</p>
					<p>ださい。</p>
				</div>
				<ButtonContainer onClick={handleToTop}>
					トップ画面へ
				</ButtonContainer>
			</div>
		</div>
	);
}
