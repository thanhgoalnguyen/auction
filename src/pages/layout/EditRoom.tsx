import { useState } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from "@/components/layout/PageHeader";
import ButtonContainer from '@/components/ui/ButtonContainer';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import UploadImage from '@/components/ui/UploadImage';
import TimeTable from '@/components/ui/TimeTable';

import { ROUTE_PATH } from '@/data/demo';

import product6 from "@/assets/img/6.png";
import product7 from "@/assets/img/7.png";
import product9 from "@/assets/img/9.png";
import product10 from "@/assets/img/10.png";
import product14 from "@/assets/img/14.png";
import product30 from "@/assets/img/30.png";

export default function EditRoom() {
		const desText = `このオークションルームでは、さまざまなアイテムが出品されています。
たとえば、20年前に母が着ていたブランドのビンテージ服など、
日常の中で使われてきたものも並びます。
気になった商品があれば、内容を確認のうえ入札してください。`;

	const timeTable = [
		{
			img: product9,
			name: "Noir kei ninomiya クロスエンブレム",
			bid: "1,400",
			time: "20:00頃〜"
		},
		{
			img: product7,
			name: "アーティザナル トロンプルイユ",
			bid: "16,000",
			time: "20:20頃〜"
		},
		{
			img: product6,
			name: "DRIES VAN NOTEN スタッズ",
			bid: "22,000",
			time: "20:40頃〜"
		},
		{
			img: product30,
			name: "W&LT / Psychedelic Knit Vest",
			bid: "30,000",
			time: "21:10頃〜"
		},
	];

	const [des, setDes] = useState(desText);
	const [name, setName] = useState("オークションルーム No.1");
	const [listImage, setListImage] = useState([product14, product10]);

	const handleChangeDes = (value) => {
		setDes(value);
	}

	const handleChangeName = (value) => {
		setName(value);
	}

	const handleChangeImage = (newList) => {
		setListImage(newList);
	}
	
	return (
		<div className="edit-room-page page-container flex flex-col items-center w-full h-max">
			<PageHeader title="オークションルームの情報を編集"/>
			<div className="container flex flex-col w-full">
				<UploadImage 
					onChangeImage={handleChangeImage} 
					listImage={listImage} 
					className="mb-3"
				/>
				<Input
					label="オークションルーム名"
					maxLength={40}
					className="mb-10 [&_.input-max-length]:text-neutral-700"
					value={name}
					onTextChange={handleChangeName}
				/>
				<Textarea
					label="オークションルームの説明"
					maxLength={1000}
					className="mb-8 [&_textarea]:h-[104px]"
					value={des}
					onTextChange={handleChangeDes}
				/>
				<div className="pb-3 mb-4 border-b border-neutral-300">
					<p className="text-[11px] leading-[13px] text-neutral-500">オークションルームの詳細</p>
				</div>
				<div className="flex flex-col gap-3 pb-6 mb-9 border-b border-neutral-300">
					<p className="text-[11px] leading-[13px] text-neutral-500">配信時刻</p>
					<p className="text-[11px] leading-[13px] text-neutral-500">2026年04月10日 20 : 00から</p>
					<div className="flex items-center gap-6">
						<p className="text-[11px] leading-[13px] text-neutral-500">120分間</p>
						<p className="text-[9px] leading-[11px] text-neutral-700">※最大120分間（２時間）</p>
					</div>
				</div>
				<TimeTable className="mb-[52px]" list={timeTable}/>
				<ButtonContainer 
					className="mb-10"
				>
					<p>変更する</p>
				</ButtonContainer>
				<Link
					to={ROUTE_PATH?.ROOM_DETAIL}
					className="mx-auto text-[11px] leading-[13px] text-red-200"
				>
					このオークションルームを削除する
				</Link>
			</div>
		</div>
	);
}
