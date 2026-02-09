import { useState } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from "@/components/layout/PageHeader";
import ButtonContainer from '@/components/ui/ButtonContainer';
import Input from '@/components/ui/Input';
import AddButton from '@/components/ui/AddButton';
import Textarea from '@/components/ui/Textarea';
import Dropdown from '@/components/ui/Dropdown';
import UploadImage from '@/components/ui/UploadImage';
import MoneyInput from '@/components/ui/MoneyInput';
import SelectCategoryModal from '@/components/ui/SelectCategoryModal';
import SelectStatusModal from '@/components/ui/SelectStatusModal';
import SelectRoomModal from '@/components/ui/SelectRoomModal';

import camera from "@/assets/icon/post/camera.svg";
import arrowRight from "@/assets/icon/searchTop/arrow-right.svg";
import edit from "@/assets/icon/likeList/edit.svg";
import product14 from "@/assets/img/14.png";
import product6 from "@/assets/img/6.png";
import product9 from "@/assets/img/9.png";
import product30 from "@/assets/img/30.png";

export default function PostItem() {
		const placeHolderText = `色、素材、重さ、定価、注意点など

例）20 年前にフランスで購入したブランド正規品です。
数回使用しましたが、痛みも少なく非常に良品です。

＃ジャケット　＃ジャケットコーデ`;

	const listCategory = [
		{	
			title: "本・雑誌・漫画 > 本 > 洋書",
			id: 1
		},
		{	
			title: "ファッション",
			id: 2
		},
		{	
			title: "ベビー・キッズ",
			id: 3
		},
		{	
			title: "ゲーム・おもちゃ・グッズ",
			id: 4
		},
		{	
			title: "ホビー・楽器・アート",
			id: 5
		},	
		{	
			title: "チケット",
			id: 6
		},
	];

	const listStatus = [
		{	
			title: "未使用に近い > 数回使用し、あまり使用感がない",
			des: "未使用に近い > 数回使用し、あまり使用感がない",
			id: 1
		},
		{	
			title: "新品、未使用",
			des: "新品で購入し、一度も使用していない",
			id: 2
		},
		{	
			title: "未使用に近い",
			des: "数回使用し、あまり使用感がない",
			id: 3
		},
		{	
			title: "目立った傷や汚れなし",
			des: "細かな使用感・傷・汚れはあるが、目立たない",
			id: 4
		},
		{	
			title: "やや傷や汚れあり",
			des: "目につく傷や汚れがある",
			id: 5
		},	
		{	
			title: "傷や汚れあり",
			des: "多くの人が見てわかるような傷や汚れがある",
			id: 6
		},
		{	
			title: "全体的に状態が悪い",
			des: "商品の全体に目立つ傷や汚れ、ダメージがある",
			id: 7
		},
	];

	const listRoom = [
		{	
			name: "オークションルームNo.1",
			day: "2026年3月20日",
			time: "19:00〜",
			img: product14,
			id: 1,
			link: ""
		},
		{	
			name: "オークションルームNo.1",
			day: "2026年3月20日",
			time: "19:00〜",
			img: product9,
			id: 2,
			link: ""
		},
		{	
			name: "オークションルームNo.2",
			day: "2026年4月10日",
			time: "16:00〜",
			img: product6,
			id: 3,
			link: ""
		},
		{	
			name: "オークションルームNo.3",
			day: "2026年5月8日",
			time: "18:00〜",
			img: product30,
			id: 4,
			link: ""
		},
	]

	const [money, setMoney] = useState();
	const [listImage, setListImage] = useState([]);
	const [openCategory, setOpenCategory] = useState(false);
	const [category, setCategory] = useState(null);
	const [openStatus, setOpenStatus] = useState(false);
	const [status, setStatus] = useState(null);
	const [openRoom, setOpenRoom] = useState(false);
	const [room, setRoom] = useState(listRoom?.[0]);

	const handleChangeMoney = (value) => {
		setMoney(value);
	}

	const handleChangeImage = (newList) => {
		setListImage(newList);
	}

	const handleSelectCategory = (value) => {
		setCategory(value);
	}

	const handleSelectStatus = (value) => {
		setStatus(value);
	}

	const handleSelectRoom = (value) => {
		setRoom(value);
	}
	
	return (
		<div className="post-item-page page-container flex flex-col items-center w-full h-max">
			<PageHeader title="商品の出品"/>
			<div className="container">
				<UploadImage 
					onChangeImage={handleChangeImage} 
					listImage={listImage} 
					className="mb-3"
				/>
				<p className="mb-5 text-[9px] leading-[11px] text-neutral-700">商品の全体、詳細、文字入りの写真をアップロードしてください。</p>
				<Input
					label="商品名"
					maxLength={40}
					className="mb-3 [&_.input-max-length]:text-neutral-700"
				/>
				<div className="pb-[14px] mb-5 border-b border-neutral-300">
					<p className="text-[11px] leading-[13px] text-neutral-700">商品の詳細</p>
				</div>
				<div className="pb-5 mb-5 border-b border-neutral-300">
					<div className="flex justify-between items-center mb-[10px]">
						<p className="text-[11px] leading-[13px] text-neutral-500">カテゴリー</p>
						{
							category && (
								<button 
									onClick={() => setOpenCategory(true)}
									className="flex items-center gap-3 w-max"
								>
									<p className="text-[10px] leading-[12px]">編集する</p>
									<img
										src={edit}
										alt="edit"
										className="w-[10px] h-[10px]"
									/>
								</button>
							)
						}
					</div>
					{category ? (
						<p className="text-[9px] leading-[11px] text-neutral-700">{category?.title}</p>
					) : (
						<AddButton
							onClick={() => setOpenCategory(true)}
							label="カテゴリーを選択する"
						/>
					)}
				</div>
				<div className="pb-5 mb-5 border-b border-neutral-300">
					<div className="flex justify-between items-center mb-[10px]">
						<p className="text-[11px] leading-[13px] text-neutral-500">商品の状態</p>
						{
							status && (
								<button 
									onClick={() => setOpenStatus(true)}
									className="flex items-center gap-3 w-max"
								>
									<p className="text-[10px] leading-[12px]">編集する</p>
									<img
										src={edit}
										alt="edit"
										className="w-[10px] h-[10px]"
									/>
								</button>
							)
						}
					</div>
					{status ? (
						<p className="mb-6 text-[9px] leading-[11px] text-neutral-700">{status?.title}</p>
					) : (
						<AddButton
							onClick={() => setOpenStatus(true)}
							label="商品の状態を選択する"
							className="mb-6"

						/>
					)}
					<Textarea
						label={<div className='flex items-center gap-3'>
							<p>商品の説明</p>
							<div className="flex items-center h-3 px-2 bg-neutral-1400 border border-black rounded-[2px]">
								<p className="text-[9px] leading-[11px] text-neutral-700">任意</p>
							</div>
						</div>}
						maxLength={1000}
						className="mb-4 [&_textarea]:h-[104px]"
						placeholder={placeHolderText}
					/>
					<p className="mb-4 text-[11px] leading-[13px] text-neutral-700">配送について</p>
					<p className="text-[11px] leading-[13px] text-neutral-500">送料込み（出品者負担）</p>
				</div>
				<div className="flex flex-col gap-8 pb-7 mb-4 border-b border-neutral-300">
					<Dropdown
						label="発送元の地域"
						placeholder="選択してください"
					/>
					<MoneyInput
						value={money}
						onMoneyChange={handleChangeMoney}
					/>
				</div>
				<div className="flex flex-col gap-3 pb-4 mb-5 border-b border-neutral-300">
					<button 
						onClick={() => setOpenRoom(true)}
						className="flex items-center gap-3 w-max text-[11px] leading-[13px] text-neutral-500"
					>
						オークションルーム
							<img
								src={edit}
								alt="edit"
								className="w-[10px] h-[10px]"
							/>
					</button>
					{
						room && (
							<Link
								to={room?.link}
								className="flex items-center gap-4 px-2"
							>
								<img
									src={room?.img}
									alt="product"
									className="w-[72px] aspect-square"
								/>
								<div className="flex justify-between items-center gap-1 grow">
									<div className="flex flex-col gap-3 text-neutral-500">
										<p className="text-[11px] leading-[13px]">{room?.name}</p>
										<div className="flex items-center text-[10px] leading-[12px]">
											<p className="mr-8">配信開始</p>
											<p className="mr-9">{room?.day}</p>
											<p>{room?.time}</p>
										</div>
									</div>
									<img 
										src={arrowRight} 
										alt="arrow" 
										className="w-[5px] h-2"
									/>
								</div>
							</Link>
						)
					}
				</div>
				<div className="pb-7 mb-5 border-b border-neutral-300">
					<p className="mb-4 text-[11px] leading-[13px] text-neutral-500">この商品の入札開始予定時間</p>
					<p className='pl-7 mb-3 text-[11px] leading-[13px] text-neutral-500'>2026年4月10日 <span className="p-[1px] border border-neutral-700">20</span> : <span className="p-[1px] border border-neutral-700">00</span>ごろ〜</p>
					<div className="flex items-center gap-5 pl-7">
						<p className="p-[1px] text-[11px] leading-[13px] text-neutral-500 border border-neutral-700">30秒間</p>
						<p className="text-[9px] leading-[11px] text-neutral-700">※最大3600秒（1時間）</p>
					</div>
				</div>
				<div className="flex flex-col gap-2 mb-10 text-[7px] leading-[8px] text-neutral-700 [&_span]:text-red-200">
					<p>禁止されている<span>行為</span>及び<span>出品品</span>を必ずご確認ください。また、<span>加盟店規約</span>及び </p>
					<p><span>プライバシーポリシー</span>に同意の上、「出品する」ボタンを押してください。</p>
				</div>
				<ButtonContainer isUpload>
					<img
						src={camera}
						alt="camera"
						className="w-[15px] h-[11px]"
					/>
					<p>出品する</p>
				</ButtonContainer>
			</div>
			<SelectCategoryModal list={listCategory} defaultValue={category} handleSelect={handleSelectCategory} open={openCategory} onClose={() => setOpenCategory(false)}/>
			<SelectStatusModal list={listStatus} defaultValue={status} handleSelect={handleSelectStatus} open={openStatus} onClose={() => setOpenStatus(false)}/>
			<SelectRoomModal list={listRoom} defaultValue={room} handleSelect={handleSelectRoom} open={openRoom} onClose={() => setOpenRoom(false)}/>
		</div>
	);
}
