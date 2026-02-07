import { useState } from "react";

import Textarea from "../Textarea";
import ButtonContainer from "../ButtonContainer";
import SellerReview from "./SellerReview";

import check from "@/assets/icon/transactionScreenBuyer/check.svg";
import good from "@/assets/icon/transactionScreenBuyer/good.svg";
import bad from "@/assets/icon/transactionScreenBuyer/bad.svg";

const Step4 = () => {
	const [selectedEmotion, setSelectedEmotion] = useState("1");

	const handleChange = (e) => {
		setSelectedEmotion(e.target.value);
	};

    return (
        <div className="w-full">
			<div className="flex flex-col py-[10px] px-5 mb-5 bg-neutral-1400 border border-black rounded-[8px]">
				<div className="flex items-center gap-[6px] mb-[6px]">
					<img src={check} alt="check" className="w-3 h-3"/>
					<p className="text-[11px] leading-[13px] text-neutral-500">商品受け取り済です</p>
				</div>
				<p className="mb-1 text-[9px] leading-[11px] text-neutral-700">落札者が商品を受け取り連絡をしました。出品者 / 落札者双方の評価が完了</p>
				<p className="text-[9px] leading-[11px] text-neutral-700">すると取引完了となります。</p>
			</div>
			<SellerReview className="mb-6"/>
			<div className="grid grid-cols-2 gap-3 w-full h-[64px] mb-5">
				<label className="group flex flex-col justify-center items-center gap-[10px] border border-neutral-1000 rounded-[4px] cursor-pointer has-[:checked]:bg-dark-600">
					<input type="radio" hidden name="emotion" value="1" checked={selectedEmotion === "1"} onChange={handleChange}/>
					<div className="flex items-center gap-[6px]">
						<img src={good} alt="emotion" className="w-4 h-4"/>
						<p className="text-[9px] leading-[11px]">良かった</p>
					</div>
					<div className="flex justify-center items-center w-[22px] h-[22px] rounded-full border-[2px] border-neutral-1500 group-has-[:checked]:border-red-300">
						<div className="hidden w-[14px] h-[14px] bg-red-300 rounded-full group-has-[:checked]:block"></div>
					</div>
				</label>
				<label className="group flex flex-col justify-center items-center gap-[10px] border border-neutral-1000 rounded-[4px] cursor-pointer has-[:checked]:bg-dark-600">
					<input type="radio" hidden name="emotion" value="2" checked={selectedEmotion === "2"} onChange={handleChange}/>
					<div className="flex items-center gap-[6px]">
						<img src={bad} alt="emotion" className="w-4 h-4"/>
						<p className="text-[9px] leading-[11px]">残念だった</p>
					</div>
					<div className="flex justify-center items-center w-[22px] h-[22px] rounded-full border-[2px] border-neutral-1500 group-has-[:checked]:border-red-300">
						<div className="hidden w-[14px] h-[14px] bg-red-300 rounded-full group-has-[:checked]:block"></div>
					</div>
				</label>
			</div>
			<span className="block w-full h-[1px] mb-6 bg-neutral-300"></span>
			<Textarea
				label="評価コメント"
				maxLength={140}
				placeholder="例）この度はお取引ありがとうございました。"
				className="mb-7 [&_textarea]:h-[86px] [&_textarea]:text-neutral-700 [&_textarea]:bg-transparent [&_textarea]:border [&_textarea]:border-neutral-1000"
			/>
			<ButtonContainer className="mb-3">評価を投稿する</ButtonContainer>
			<div className="flex flex-col gap-1 px-2 text-[8px] leading-[10px] text-neutral-700">
				<p>※このコメントは、取引完了後に評価一覧で公開されます。商品に問題がある場合などは、</p>
				<p>評価をせずに取引メッセージで伝えましょう。</p>
			</div>
		</div>
    );
};

export default Step4;