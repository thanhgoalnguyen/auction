import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import PageHeader from "@/components/layout/PageHeader";
import PolicyTerm from "@/components/ui/PolicyTerm";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import ButtonContainer from '@/components/ui/ButtonContainer';

import { ROUTE_PATH } from '@/data/demo';

import avatar from "@/assets/icon/userProfileSetting/avatar.svg";

export default function UserProfileSetting() {
  	const navigate = useNavigate();

	const [newAvatar, setNewAvatar] = useState(null);

	const handleToTop = () => {
		navigate(ROUTE_PATH?.TOP_NO_LOGIN);
	}

	const handleChangeAvatar = (event) => {
  		const file = event.target.files[0];

		if (file) {
			if (!file.type.startsWith('image/')) {
				return;
			}

			const reader = new FileReader();

			reader.onload = (e) => {
				const base64String = e.target.result;
				setNewAvatar(base64String);
			};

			reader.readAsDataURL(file);
		}
	};

	return (
		<div className="user-profile-setting-page flex flex-col items-center w-full h-max min-h-full">
			<PageHeader title="プロフィール設定"/>
			<div className="container">
				<div className="flex flex-col gap-1 mb-5">
					<p className="text-[11px] leading-[13px]">画像</p>
					<label className="w-max cursor-pointer">
						<input 
							type="file" 
							hidden 
							accept="image/*"
							onChange={handleChangeAvatar}
						/>
						<img
							src={newAvatar ?? avatar}
							alt="avatar"
							className="w-[70px] aspect-square rounded-full"
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
				/>
				<ButtonContainer onClick={handleToTop}>
					更新する
				</ButtonContainer>
			</div>
			<PolicyTerm showMore/>
		</div>
	);
}
