import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PageHeader from "@/components/layout/PageHeader";
import ButtonContainer from '@/components/ui/ButtonContainer';
import AddButton from '@/components/ui/AddButton';

import { ROUTE_PATH } from '@/data/demo';

import edit from "@/assets/icon/likeList/edit.svg";
import editActive from "@/assets/icon/likeList/edit-active.svg";

export default function PurchaseConfirmation() {
  	const navigate = useNavigate();

	const [isEditMethod, setIsEditMethod] = useState(false);
	const [isEditAddress, setIsEditAddress] = useState(false);

	const handleToTop = () => {
		navigate(ROUTE_PATH?.TOP_NO_LOGIN);
	}

	return (
		<div className="purchase-confirmation-page page-container flex flex-col items-center w-full h-max">
			<PageHeader title="購入の確認"/>
			<div className="container flex flex-col">
				<button className="ml-auto mb-[14px] text-[10px] leading-[12px] cursor-pointer">
					戻る
				</button>
				<div className="flex items-center gap-[18px] pb-5 px-[6px] mb-[18px] border-b border-neutral-300">
					<img src={edit} alt="product" className="w-[84px] h-[84px]"/>
					<div className="flex flex-col gap-1 grow">
						<p className="text-[14px] leading-[17px]">DRIES VAN NOTEN スタッズ</p>
						<div className="flex justify-between items-center">
							<p className="text-[10px] leading-[12px]">落札価格：</p>
							<div className="flex items-center gap-3">
								<p className="text-[14px] leading-[17px] text-red-100">¥36,000</p>
								<p className="text-[7px] leading-[8px] text-red-100">（税込）送料込み</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-[14px] pb-5 mb-5 border-b border-neutral-300">
					<div className="flex justify-between items-center">
						<p className="text-[11px] leading-[13px] text-neutral-700">支払い方法</p>
						<button
							onClick={() => setIsEditMethod(!isEditMethod)}
							className="flex items-center gap-3"
						>
							<p className={`text-[10px] leading-[12px] ${isEditMethod && "text-neutral-1100"}`}>編集する</p>
							<img src={isEditMethod ? editActive : edit} alt="edit" className="w-[10px] h-[10px]"/>
						</button>
					</div>
					{
						isEditMethod ? (
							<AddButton label="支払い方法を追加する"/>
						) : (
							<div className="flex items-center gap-[10px]">
								<img src={edit} alt="method" className="w-9 h-[18px]"/>
								<div className="flex flex-col gap-1 grow">
									<p className="text-[9px] leading-[11px] text-neutral-500">クレジットカード決済</p>
									<div className="flex items-center">
										<p className="text-[12px] leading-[12px] text-neutral-500">**** **** ****</p>
										<p className="mr-[10px] text-[9px] leading-[11px] text-neutral-500">3181</p>
										<p className="text-[7px] leading-[8px] text-neutral-500">10/32</p>
									</div>
								</div>
							</div>
						)
					}
				</div>
				<div className="flex justify-between items-center gap-[14px] pb-5 pr-7 mb-6 border-b border-neutral-300">
					<p className="text-[11px] leading-[13px] text-neutral-500">支払い金額</p>
					<p className="text-[14px] leading-[17px] text-red-100">¥36,000</p>
				</div>
				<div className="flex flex-col gap-[6px] pb-6 mb-8 border-b border-neutral-300">
					<div className="flex justify-between items-center">
						<p className="text-[11px] leading-[13px] text-neutral-700">配送先</p>
						<button
							onClick={() => setIsEditAddress(!isEditAddress)}
							className="flex items-center gap-3"
						>
							<p className={`text-[10px] leading-[12px] ${isEditAddress && "text-neutral-1100"}`}>編集する</p>
							<img src={isEditAddress ? editActive : edit} alt="edit" className="w-[10px] h-[10px]"/>
						</button>
					</div>
					{
						isEditAddress ? (
							<AddButton label="配送先住所を追加する"/>
						) : (
							<div>
								<div className="w-max py-[2px] px-[6px] mb-3 bg-neutral-1400 rounded-[999px]">
									<p className="text-[6px] leading-[7px] text-neutral-700">匿名配送</p>
								</div>
								<div className="flex items-center gap-[10px] mb-1">
									<p className="text-[13px] leading-[16px] text-neutral-500">古物　太郎</p>
									<p className="text-[10px] leading-[12px] text-neutral-500">（コブツ タロウ）</p>
								</div>
								<p className="mb-[6px] text-[13px] leading-[16px] text-neutral-500">〒150-0034</p>
								<p className="mb-[10px] text-[13px] leading-[16px] text-neutral-500">東京都渋谷区代官山町1-1 Grava代官山4F</p>
								<p className="text-[10px] leading-[12px] text-neutral-700">※郵便局/ コンビニ受取可能</p>
							</div>
						)
					}
				</div>
				<div className="pb-[10px] mb-4 border-b border-neutral-300">
					<p className="text-[11px] leading-[13px] text-neutral-700">購入の確認</p>
				</div>
				<div className="flex flex-col gap-5 pb-5 pr-8 mb-7 text-[11px] leading-[13px] text-neutral-500 border-b border-neutral-300">
					<div className="flex justify-between items-center">
						<p>商品代金</p>
						<p>¥36,000</p>
					</div>
					<div className="flex justify-between items-center">
						<p>支払い金額</p>
						<p>¥36,000</p>
					</div>
					<div className="flex justify-between items-center">
						<p>支払い方法</p>
						<p>クレジットカード</p>
					</div>
				</div>
				<p className="mb-5 ml-[14px] text-[9px] leading-[11px] text-neutral-700 [&_span]:text-red-200"><span>利用規約</span>及び<span>プライバシーポリシー</span>に同意の上、ご購入ください。</p>
				<ButtonContainer onClick={handleToTop}>
					購入を確定する
				</ButtonContainer>
			</div>
		</div>
	);
}
