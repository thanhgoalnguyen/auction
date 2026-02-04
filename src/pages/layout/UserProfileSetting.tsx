import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import PageHeader from "@/components/layout/PageHeader";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import ButtonContainer from '@/components/ui/ButtonContainer';

import avatar from "@/assets/icon/userProfileSetting/avatar.svg";

import { ROUTE_PATH } from '@/data/demo';
import getBase64 from "@/utils/getBase64";

export default function UserProfileSetting() {
  	const navigate = useNavigate();

	const [newAvatar, setNewAvatar] = useState(null);
	const [loading, setLoading] = useState(false);
	const [value, setValue] = useState("");

	const handleToTop = () => {
		navigate(ROUTE_PATH?.TOP_NO_LOGIN);
	}

	const handleChangeAvatar = async (event) => {
  		const file = event.target.files[0];
		setLoading(true);
		const avatar = await getBase64(file);
		setNewAvatar(avatar);
		setLoading(false);
	};
	
	const handleChangeValue = (newValue) => {
		setValue(newValue);
	}

	return (
		<div className="user-profile-setting-page page-container flex flex-col items-center w-full h-max">
			<PageHeader title="プロフィール設定"/>
			<div className="container">
				<div className={`flex flex-col gap-1 mb-5 ${loading && "opacity-50 pointer-events-none"}`}>
					<p className="text-[11px] leading-[13px]">画像</p>
					<label className="w-max cursor-pointer">
						<input 
							type="file" 
							hidden 
							accept=".jpg, .jpeg, .png, .webp"
							onChange={handleChangeAvatar}
						/>
						<img
							src={newAvatar ?? avatar}
							alt="avatar"
							className="w-[70px] aspect-square object-cover rounded-full"
						/>
					</label>
				</div>
				<Input
					label="ニックネーム"
					placeholder="Future Vintage内でのニックネーム"
					maxLength={20}
					className="mb-6 [&_.input-max-length]:text-neutral-700"
				/>
				<Textarea
					label="自己紹介"
					maxLength={1000}
					className="mb-9"
					value={value}
					onTextChange={handleChangeValue}
				/>
				<ButtonContainer onClick={handleToTop}>
					更新する
				</ButtonContainer>
			</div>
		</div>
	);
}
