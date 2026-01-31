import { useNavigate } from 'react-router-dom';

import PageHeader from "@/components/layout/PageHeader";
import Input from "@/components/ui/Input";
import Dropdown from '@/components/ui/Dropdown';
import ButtonContainer from '@/components/ui/ButtonContainer';

import { ROUTE_PATH } from '@/data/demo';

export default function ShippingAddressRegistration() {
  	const navigate = useNavigate();

	const handleToTop = () => {
		navigate(ROUTE_PATH?.TOP_NO_LOGIN);
	}

	return (
		<div className="user-profile-setting-page page-container flex flex-col items-center w-full h-max">
			<PageHeader title="住所の登録"/>
			<div className="container">
				<div className="flex flex-col gap-5 pb-7 mb-9 border-b border-neutral-300">
					<Input
						label="性（全角）"
						placeholder="例）古物"
						maxLength={15}
						className="[&_.input-max-length]:text-neutral-700"
					/>
					<Input
						label="名（全角）"
						placeholder="例）太郎"
						maxLength={15}
						className="[&_.input-max-length]:text-neutral-700"
					/>
					<Input
						label="性カナ（全角）"
						placeholder="例）コブツ"
						maxLength={15}
						className="[&_.input-max-length]:text-neutral-700"
					/>
					<Input
						label="名カナ（全角）"
						placeholder="例）タロウ"
						maxLength={15}
						className="[&_.input-max-length]:text-neutral-700"
					/>
				</div>
				<div className='flex flex-col gap-9 mb-[70px]'>
					<Input
						label="郵便番号（半角）"
						placeholder="〒 例）1234567"
					/>
					<Dropdown
						label="都道府県"
						placeholder="選択してください"
					/>
					<Input
						label="市区町村"
						placeholder="例）渋谷区代官山"
					/>	
					<Input
						label="番地"
						placeholder="例）代官山町1-1-1"
					/>	
					<Input
						label="建物名"
						placeholder="例）古物ビル101"
					/>	
					<Input
						label="電話番号"
						placeholder="例）09012345678"
					/>
				</div>
				<ButtonContainer onClick={handleToTop}>
					更新する
				</ButtonContainer>
			</div>
		</div>
	);
}
