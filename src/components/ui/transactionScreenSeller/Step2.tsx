import ButtonContainer from "../ButtonContainer";

import truck from "@/assets/icon/transactionScreenBuyer/truck.svg";

const Step2 = () => {
    return (
		<div className="flex flex-col gap-5 w-full">
			<div className="flex flex-col py-[10px] px-5 bg-neutral-1400 border border-black rounded-[8px]">
				<div className="flex items-center gap-[6px] mb-[6px]">
					<img src={truck} alt="truck" className="w-[19px] h-[11px]"/>
					<p className="text-[11px] leading-[13px] text-neutral-500">商品を発送してください</p>
				</div>
				<p className="mb-1 text-[9px] leading-[11px] text-neutral-700">落札者による決済処理が完了しました。商品を発送してから下のボタンを</p>
				<p className="text-[9px] leading-[11px] text-neutral-700">クリックして発送連絡してください。</p>
			</div>
			<ButtonContainer>
				発送連絡をする
			</ButtonContainer>
		</div>
    
    );
};

export default Step2;