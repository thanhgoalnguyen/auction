import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PageHeader from "@/components/layout/PageHeader";
import ButtonContainer from '@/components/ui/ButtonContainer';
import UploadButton from '@/components/ui/UploadButton';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

import { ROUTE_PATH } from '@/data/demo';

import edit from "@/assets/icon/buttonContainer/edit.svg";

export default function CreateRoom() {
	const desText = `色、素材、重さ、定価、注意点など

例）20 年前にフランスで購入したブランド正規品です。
数回使用しましたが、痛みも少なく非常に良品です。

＃ジャケット　＃ジャケットコーデ`;

  	const navigate = useNavigate();

	const [des, setDes] = useState(desText);

	const handleToTop = () => {
		navigate(ROUTE_PATH?.TOP_NO_LOGIN);
	}

	const handleChangeDes = (value) => {
		setDes(value);
	}

	return (
		<div className="create-room-page page-container flex flex-col items-center w-full h-max">
			<PageHeader title="オークションルームの作成"/>
			<div className="container flex flex-col">
				<button className="ml-auto mb-1 text-[10px] leading-[12px] text-neutral-600">戻る</button>
				<p className="mb-12 text-[11px] leading-[13px] text-neutral-500">出品画像（最大20枚）</p>
				<UploadButton className="mb-8"/>
				<Input 
					label="オークションルーム名" 
					maxLength={40}
					className="mb-11"
				/>
				<Textarea
					label={<div className='flex items-center gap-3'>
						<p>オークションルームの説明</p>
						<div className="flex items-center h-3 px-2 bg-neutral-1400 border border-black rounded-[2px]">
							<p className="text-[9px] leading-[11px] text-neutral-700">任意</p>
						</div>
					</div>}
					maxLength={1000}
					className="mb-8 [&_textarea]:h-[104px]"
					value={des}
					onTextChange={handleChangeDes}
				/>
				<div className="pb-3 mb-4 border-b border-neutral-300">
					<p className="text-[11px] leading-[13px] text-neutral-500">オークションルームの詳細</p>
				</div>
				<div className="flex flex-col gap-3 pb-6 mb-11 border-b border-neutral-300">
					<p className="text-[11px] leading-[13px] text-neutral-500">配信時刻</p>
					<p className="text-[11px] leading-[13px] text-neutral-500">2026年04月10日 20 : 00から</p>
					<div className="flex items-center gap-6">
						<p className="text-[11px] leading-[13px] text-neutral-500">120分間</p>
						<p className="text-[9px] leading-[11px] text-neutral-700">※最大120分間（２時間）</p>
					</div>
				</div>
				<ButtonContainer onClick={handleToTop}>
					<>
						<img src={edit} alt="edit" className="w-[13px] h-[13px]"/>
						作成する
					</>
				</ButtonContainer>
			</div>
		</div>
	);
}
