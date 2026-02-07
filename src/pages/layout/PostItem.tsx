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

export default function PostItem() {
		const desText = `色、素材、重さ、定価、注意点など

例）20 年前にフランスで購入したブランド正規品です。
数回使用しましたが、痛みも少なく非常に良品です。

＃ジャケット　＃ジャケットコーデ`;
	const [des, setDes] = useState(desText);
	const [money, setMoney] = useState();
	const [listImage, setListImage] = useState([]);
	const [openCategory, setOpenCategory] = useState(false);
	const [category, setCategory] = useState(null);
	const [openStatus, setOpenStatus] = useState(false);
	const [status, setStatus] = useState(null);
	const [openRoom, setOpenRoom] = useState(false);
	const [room, setRoom] = useState(null);

	const handleChangeDes = (value) => {
		setDes(value);
	}

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
						value={des}
						onTextChange={handleChangeDes}
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
						className="w-max text-[11px] leading-[13px] text-neutral-500"
					>
						オークションルーム
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
					<p className='mb-3 text-[11px] leading-[13px] text-neutral-500'>2026年4月10日 20 : 00ごろ〜</p>
					<div className="flex items-center gap-5">
							<p className="text-[11px] leading-[13px] text-neutral-500">30秒間</p>
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
			<SelectCategoryModal defaultValue={category} handleSelect={handleSelectCategory} open={openCategory} onClose={() => setOpenCategory(false)}/>
			<SelectStatusModal defaultValue={status} handleSelect={handleSelectStatus} open={openStatus} onClose={() => setOpenStatus(false)}/>
			<SelectRoomModal defaultValue={room} handleSelect={handleSelectRoom} open={openRoom} onClose={() => setOpenRoom(false)}/>
		</div>
	);
}
