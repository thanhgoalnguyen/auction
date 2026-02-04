import { useState } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from "@/components/layout/PageHeader";
import ButtonContainer from '@/components/ui/ButtonContainer';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Dropdown from '@/components/ui/Dropdown';
import UploadImage from '@/components/ui/UploadImage';
import MoneyInput from '@/components/ui/MoneyInput';
import DeleteModal from '@/components/ui/DeleteModal';

import edit from "@/assets/icon/likeList/edit.svg";
import arrowRight from "@/assets/icon/searchTop/arrow-right.svg";
import product14 from "@/assets/img/14.png";
import product22 from "@/assets/img/22.png";
import product23 from "@/assets/img/23.png";

export default function EditPostedItem() {
		const desText = `色、素材、重さ、定価、注意点など

例）20 年前にフランスで購入したブランド正規品です。
数回使用しましたが、痛みも少なく非常に良品です。

＃ジャケット　＃ジャケットコーデ`;

	const [des, setDes] = useState(desText);
	const [name, setName] = useState("アーティザナル　トロンプルイユ");
	const [money, setMoney] = useState();
	const [open, setOpen] = useState(false);
	const [listImage, setListImage] = useState([product22, product23]);

	const handleChangeDes = (value) => {
		setDes(value);
	}

	const handleChangeName = (value) => {
		setName(value);
	}

	const handleChangeMoney = (value) => {
		setMoney(value);
	}

	const handleChangeImage = (newList) => {
		setListImage(newList);
	}
	
	return (
		<div className="edit-posted-item-page page-container flex flex-col items-center w-full h-max">
			<PageHeader title="商品の情報を編集"/>
			<div className="container flex flex-col w-full">
				<UploadImage 
					onChangeImage={handleChangeImage} 
					listImage={listImage} 
					className="mb-3"
				/>
				<Input
					label="商品名"
					maxLength={40}
					className="mb-3 [&_.input-max-length]:text-neutral-700"
					value={name}
					onTextChange={handleChangeName}
				/>
				<div className="pb-[14px] mb-5 border-b border-neutral-300">
					<p className="text-[11px] leading-[13px] text-neutral-700">商品の詳細</p>
				</div>
				<div className="pb-5 mb-5 border-b border-neutral-300">
					<div className="flex justify-between items-center mb-[10px]">
						<p className="text-[11px] leading-[13px] text-neutral-500">カテゴリー</p>
						<button className="flex items-center gap-3">
							<p className="text-[10px] leading-[12px]">編集する</p>
							<img src={edit} alt="edit" className="w-[9px] h-[9px]"/>
						</button>
					</div>
					<p className="text-[10px] leading-[12px] text-neutral-700">ファッション 〉 レディース 〉 ジャケット</p>
				</div>
				<div className="pb-5 mb-5 border-b border-neutral-300">
					<div className="flex justify-between items-center mb-[10px]">
						<p className="text-[11px] leading-[13px] text-neutral-500">商品の状態</p>
						<button className="flex items-center gap-3">
							<p className="text-[10px] leading-[12px]">編集する</p>
							<img src={edit} alt="edit" className="w-[9px] h-[9px]"/>
						</button>
					</div>
					<p className="mb-6 text-[10px] leading-[12px] text-neutral-700">未使用に近い 〉 数回使用し、あまり使用感がない</p>
					<Textarea
						label="商品の説明"
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
						placeholder="東京都"
					/>
					<MoneyInput
						value={money}
						onMoneyChange={handleChangeMoney}
					/>
				</div>
				<div className="flex flex-col gap-3 pb-4 mb-5 border-b border-neutral-300">
					<p className="text-[11px] leading-[13px] text-neutral-500">オークションルーム</p>
					<Link
						to="/layout"
						className="flex items-center gap-4 px-2"
					>
						<img
							src={product14}
							alt="product"
							className="w-[72px] aspect-square"
						/>
						<div className="flex justify-between items-center gap-1 grow">
							<div className="flex flex-col gap-3 text-neutral-500">
								<p className="text-[11px] leading-[13px]">オークションルームの名前</p>
								<div className="flex items-center gap-2 text-[10px] leading-[12px]">
									<p>配信開始</p>
									<p>2026年4月10日20:00〜</p>
								</div>
							</div>
							<img 
								src={arrowRight} 
								alt="arrow" 
								className="w-[5px] h-2"
							/>
						</div>
					</Link>
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
				<ButtonContainer 
					isUpload
					className="mb-11"
				>
					<p>変更する</p>
				</ButtonContainer>
				<button
					onClick={() => setOpen(true)}
					className="mx-auto text-[11px] leading-[13px] text-red-200"
				>
					この商品を削除する
				</button>
			</div>
			<DeleteModal title="この商品を削除しますか？" open={open} onClose={() => setOpen(false)}/>
		</div>
	);
}
