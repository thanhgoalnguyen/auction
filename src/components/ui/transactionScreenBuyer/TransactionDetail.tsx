import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Textarea from '@/components/ui/Textarea';
import ButtonContainer from '@/components/ui/ButtonContainer';

import avatarSeller from "@/assets/img/32.png";
import arrowRight from "@/assets/icon/searchTop/arrow-right.svg";
import avatarBuyer from "@/assets/icon/myPage/avatar.svg";

export default function TransactionDetail({type = "buyer"}) {
	const nameBuyer = "Y.Sara1985";
	const nameSeller = "meangirls";

	const listMessage = [
		{
			type: "seller",
			name: nameSeller,
			img: avatarSeller,
			mess: "ご購入いただき有難うございます。これから発送の準備をさせて頂きます。設定した期日内に発送予定ですので今しばらくお待ち下さい。取引終了まで宜しくお願いします。",
			time: "2026年04月21日20:31"
		},
		{
			type: "seller",
			name: nameSeller,
			img: avatarSeller,
			mess: "商品を発送しました。到着まで今しばらくお待ち下さい。 商品が届きましたらご確認後に受け取り評価をお願いします。",
			time: "2026年04月22日09:42"
		},
		{
			type: "buyer",
			name: nameBuyer,
			img: avatarBuyer,
			mess: "ご連絡ありがとうございます。ただいま商品発送待ちです。 届きましたら、ご連絡、評価をさせていただきます。 よろしくお願いします。",
			time: "2026年04月22日16:15"
		},
	];

	const [listMess, setListMess] = useState(listMessage);
	const [mess, setMess] = useState("");
	const listMessRef = useRef(null);

	const handleChangeMess = (value) => {
		setMess(value);
	}

	const handleSubmitMess = () => {
		if (mess) {
			const newMess = {
				type: type,
				name: type === "buyer" ? nameBuyer : nameSeller,
				img: type === "buyer" ? avatarBuyer : avatarSeller,
				mess: mess,
				time: "2026年04月22日16:15"
			};

			setListMess([...listMess, newMess]);
			setMess("");
		}
	}

	useEffect(() => {
		if (listMessRef.current) {
			listMessRef.current.scrollTop = listMessRef.current.scrollHeight;
		}
	}, [listMess]);

	return (
		<div className="transaction-detail flex flex-col">
			{
				type === "buyer" ? (
					<div className="flex flex-col gap-[14px] mb-6">
						<p className="text-[11px] leading-[13px] text-neutral-700">出品者情報</p>
						<Link 
							to="/layout"
							className="flex items-center py-4 px-2 border-t border-b border-neutral-300"
						>
							<img 
								src={avatarSeller}
								alt="seller"
								className="w-14 h-14 mr-6 rounded-full"
							/>
							<p className="mr-[52px] text-[13px] leading-[16px]">meangirls</p>
							<p className="text-[13px] leading-[16px]">プラチナ</p>
							<img
								src={arrowRight}
								alt="arrow"
								className="w-[5px] h-2 ml-auto rounded-full"
							/>
						</Link>
					</div>
				) : (
					<div className="flex flex-col gap-[14px] mb-6">
						<p className="text-[11px] leading-[13px] text-neutral-700">落札者情報</p>
						<Link 
							to="/layout"
							className="flex gap-6 pt-[14px] pb-[26px] px-2 border-t border-b border-neutral-300"
						>
							<img 
								src={avatarBuyer}
								alt="buyer"
								className="w-[57px] h-[57px] rounded-full"
							/>
							<div className="grow pt-4">
								<div className="flex justify-between items-center w-full mb-4">
									<p className="mr-[52px] text-[13px] leading-[16px]">Y.sara1985</p>
									<img
										src={arrowRight}
										alt="arrow"
										className="w-[5px] h-2 ml-auto rounded-full"
									/>
								</div>
								<div className="flex gap-9 w-full text-[11px] leading-[13px]">
									<p className="text-neutral-500">お届け先</p>
									<div className="flex flex-col gap-1">
										<p>〒150-0034</p>
										<p>東京都渋谷区代官山町1-1</p>
										<p>Grava代官山４F</p>
										<p>古物 太郎 様</p>
									</div>
								</div>
							</div>
						</Link>
					</div>
				)
			}
			<div className="flex flex-col gap-[10px] mb-8">
				<p className="text-[11px] leading-[13px] text-neutral-700">メッセージ</p>
				<div ref={listMessRef} className="w-full h-max max-h-[367px] overflow-auto">
					<div className="flex flex-col w-full h-max gap-5">
						{
							listMess?.map((item, index) => {
								const contentClass = item?.type === type ? "text-black bg-neutral-300" : "bg-neutral-1400";

								return (
									<div 
										key={index}
										className="flex gap-3 pl-2"
									>
										<img 
											src={item?.img}
											alt={item?.type}
											className="w-[38px] h-[38px]"
										/>
										<div className="flex flex-col gap-[6px] grow mt-1">
											<p className="text-[9px] leading-[11px]">{item?.name}</p>
											<div className={`flex flex-col gap-3 p-3 border border-black rounded-[8px] ${contentClass}`}>
												<p className="text-[11px] leading-[13px]">{item?.mess}</p>
												<p className="text-[9px] leading-[11px]">{item?.time}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
			<Textarea
				value={mess}
				onTextChange={handleChangeMess}
				placeholder="なにか分からないことがあれば質問してみましょう。"
				className="mb-6 [&_textarea]:h-[86px] [&_textarea]:text-neutral-700 [&_textarea]:bg-transparent [&_textarea]:border [&_textarea]:border-neutral-1000"
			/>
			<ButtonContainer
				kind="outline-red"
				className="mb-[14px]"
				onClick={handleSubmitMess}
			>
				取引メッセージを送る
			</ButtonContainer>
			<div className="flex flex-col gap-1 px-4 mb-12 text-[8px] leading-[10px] text-neutral-700">
				<p>※取引メッセージの内容は、不正やトラブル防止のため自動検知システムのもと分析、</p>
				<p>確認をしています。疑いのある取引メッセージを検知した場合、内容を事務局で確認</p>
				<p>することがあります。上記ボタンを押すとこれに同意したものとみなします。</p>
			</div>
			<div className="flex flex-col gap-[14px] mb-5">
				<p className="text-[11px] leading-[13px] text-neutral-700">取引情報</p>
				<Link 
					to="/layout"
					className="flex items-center py-4 px-1 border-t border-b border-neutral-300"
				>
					<img 
						src={avatarSeller}
						alt="seller"
						className="w-[62px] h-[62px] mr-6 rounded-full"
					/>
					<p className="text-[14px] leading-[17px]">DRIES VAN NOTEN スタッズ</p>
					<img
						src={arrowRight}
						alt="arrow"
						className="w-[5px] h-2 ml-auto rounded-full"
					/>
				</Link>
			</div>
			<div className="flex flex-col gap-8">
				<div className="flex flex-col gap-[18px] w-full text-[11px] leading-[13px] text-neutral-500">
					<div className="flex items-center gap-[62px]">
						<p className="min-w-11">商品代金</p>
						<p>¥36,000</p>
					</div>
					<div className="flex items-center gap-[62px]">
						<p className="min-w-11">送料</p>
						<p>送料込み(出品者負担)</p>
					</div>
					<div className="flex items-center gap-[62px]">
						<p className="min-w-11">購入日時</p>
						<p>2026年4月10日21:34</p>
					</div>
					<div className="flex items-center gap-[62px]">
						<p className="min-w-11">商品ID</p>
						<div className="relative flex justify-between items-center grow">
							<p>fv0026000201</p>
							<div className="absolute top-1/2 right-0 translate-y-[-50%] w-[62px] h-5">
								<ButtonContainer
									kind="outline-red"
									className="text-[8px] leading-[10px]"
								>
									コピーする
								</ButtonContainer>
							</div>
						</div>
					</div>
				</div>
				{
					type === "buyer" && (
						<Link 
							to="/layout"
							className="flex items-center gap-[62px] text-[11px] leading-[13px] text-neutral-500"
						>
							<p className="min-w-11">お届け先</p>
							<div className="flex justify-between items-center grow">
								<div className="flex flex-col gap-[6px]">
									<p>〒150-0034</p>
									<p>東京都渋谷区代官山町1-1</p>
									<p>Grava代官山４F</p>
									<p>古物 太郎 様</p>
								</div>
								<img
									src={arrowRight}
									alt="arrow"
									className="w-[5px] h-2 ml-auto rounded-full"
								/>
							</div>
						</Link>
					)
				}
			</div>
		</div>
	);
}
