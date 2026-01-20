import { useNavigate , Link} from 'react-router-dom';

import PageHeader from "@/components/layout/PageHeader";
import Input from '@/components/ui/Input';
import ButtonContainer from '@/components/ui/ButtonContainer';

export default function Login() {
  	const navigate = useNavigate();

	const handleToTop = () => {
		navigate('/');
	}

  	return (
		<div className="login flex flex-col items-center w-full h-max min-h-full">
			<PageHeader title="ログイン"/>
			<div className="container flex flex-col">
				<p className="text-[10px] leading-[12px] mb-7 ml-auto mr-4">会員登録はこちら</p>
				<Input
					className="mb-4"
					label="メールアドレス"
					placeholder="future.vintage@example.com"
				>
				</Input>
				<Input
					className="mb-11"
					label="パスワード"
					type="password"
				>
				</Input>
				<ButtonContainer 
					onClick={handleToTop}
					className="mb-1"
				>
					ログイン
				</ButtonContainer>
				<p className="mb-[6px] ml-1 text-[11px] leading-[13px]">
					<Link 
						to="/layout/"
						className="text-red-200"
					>
						利用規約
					</Link>
					および
					<Link 
						to="/layout/"
						className="text-red-200"
					>
						プライバシーポリシー
					</Link>
					に同意の上、ログインへお進み
				</p>
				<p className="mb-[123px] ml-1 text-[11px] leading-[13px]">ください。</p>
				<p className="mb-6 mx-auto text-[10px] leading-[12px] text-red-200">アカウントをお持ちでない方</p>
				<ButtonContainer 
					onClick={handleToTop}
					kind="outline"
				>
					会員登録
				</ButtonContainer>
			</div>
		</div>
	);
}
