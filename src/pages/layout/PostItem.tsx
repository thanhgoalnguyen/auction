import { useNavigate, Link } from 'react-router-dom';

import PageHeader from "@/components/layout/PageHeader";
import ButtonContainer from '@/components/ui/ButtonContainer';
import Input from '@/components/ui/Input';
import AddButton from '@/components/ui/AddButton';
import Textarea from '@/components/ui/Textarea';
import Dropdown from '@/components/ui/Dropdown';

import { ROUTE_PATH } from '@/data/demo';

import camera from "@/assets/icon/post/camera.svg";
import arrowRight from "@/assets/icon/searchTop/arrow-right.svg";
import product14 from "@/assets/img/14.png";

export default function PostItem() {
  	const navigate = useNavigate();

	const handleToTop = () => {
		navigate(ROUTE_PATH?.TOP_NO_LOGIN);
	}
	
	const valueText = `色、素材、重さ、定価、注意点など

例）20 年前にフランスで購入したブランド正規品です。
数回使用しましたが、痛みも少なく非常に良品です。

＃ジャケット　＃ジャケットコーデ`;
	return (
		<div className="post-item-page flex flex-col items-center w-full h-max min-h-full">
			<PageHeader title="商品の出品"/>
			<div className="container">
				<p className="mb-2 text-[11px] leading-[13px] text-neutral-500">出品画像（最大20枚）</p>
				<label
					className="flex justify-center items-center w-full h-[27px] mb-3 text-[11px] leading-[13px] text-red-200 border border-red-200 rounded-[4px]"
				>
					画像を選択する
					<input 
						type="file" 
						multiple 
						accept="image/*" 
						hidden 
					/>
				</label>
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
					<p className="mb-[10px] text-[11px] leading-[13px] text-neutral-500">カテゴリー</p>
					<AddButton
						onClick={handleToTop}
						label="カテゴリーを選択する"
					/>
				</div>
				<div className="pb-5 mb-5 border-b border-neutral-300">
					<p className="mb-[10px] text-[11px] leading-[13px] text-neutral-500">商品の状態</p>
					<AddButton
						onClick={handleToTop}
						label="商品の状態を選択する"
						className="mb-6"
					/>
					<Textarea
						label={<div className='flex items-center gap-3'>
							<p>商品の説明</p>
							<div className="flex items-center h-3 px-2 bg-neutral-1400 border border-black rounded-[2px]">
								<p className="text-[9px] leading-[11px] text-neutral-700">任意</p>
							</div>
						</div>}
						maxLength={1000}
						className="mb-4 [&_textarea]:h-[104px]"
						value={valueText}
					/>
					<p className="mb-4 text-[11px] leading-[13px] text-neutral-700">配送について</p>
					<p className="text-[11px] leading-[13px] text-neutral-500">送料込み（出品者負担）</p>
				</div>
				<div className="flex flex-col gap-8 pb-7 mb-4 border-b border-neutral-300">
					<Dropdown
						label="発送元の地域"
						placeholder="選択してください"
					/>
				<div className='flex flex-col gap-1'>
					<label className='ml-1 text-[11px] leading-[13px] text-neutral-500'>開始価格</label>
				<div className="flex justify-between items-center gap-1 w-full h-[29px] px-[13px] text-[7px] leading-[8px] text-black bg-neutral-300 border border-black rounded-[2px]">
					<p>¥</p>
					<p>0</p>
				</div>
			</div>
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
					<p className='mb-3 ml-7 text-[11px] leading-[13px] text-neutral-500'>2026年4月10日 20 : 00ごろ〜</p>
					<div className="flex items-center gap-5 ml-11">
							<p className="text-[11px] leading-[13px] text-neutral-500">30秒間</p>
							<p className="text-[9px] leading-[11px] text-neutral-700">※最大3600秒（1時間）</p>
					</div>
				</div>
				<div className="flex flex-col gap-2 mb-10 text-[7px] leading-[8px] text-neutral-700 [&_span]:text-red-200">
					<p>禁止されている<span>行為</span>及び<span>出品品</span>を必ずご確認ください。また、<span>加盟店規約</span>及び </p>
					<p><span>プライバシーポリシー</span>に同意の上、「出品する」ボタンを押してください。</p>
				</div>
				<ButtonContainer 
					onClick={handleToTop}
					className="flex items-center gap-2"
				>
					<img
						src={camera}
						alt="camera"
						className="w-[15px] h-[11px]"
					/>
					<p>出品する</p>
				</ButtonContainer>
			</div>
		</div>
	);
}
