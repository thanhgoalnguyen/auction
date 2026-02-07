import good from "@/assets/icon/transactionScreenBuyer/good.svg";
import edit from "@/assets/icon/transactionScreenBuyer/edit.svg";
import avatarBuyer from "@/assets/icon/myPage/avatar.svg";

const BuyerReview = ({className = ""}) => {
    return (
		<div className={`flex gap-4 min-h-[82px] py-2 px-3 bg-neutral-300 border border-black rounded-[8px] ${className}`}>
			<img src={avatarBuyer} alt="buyer" className="w-9 h-9"/>
			<div className="grow pt-1">
				<div className="flex justify-between items-center mb-[6px]">
					<p className="text-[9px] leading-[11px] text-black">Y.Sara1985</p>
					<button className="flex items-center gap-[14px]">
						<p className="text-[10px] leading-[12px] text-black">評価を変更する</p>
						<img src={edit} alt="edit" className="w-[10px] h-[10px]"/>
					</button>
				</div>
				<div className="flex items-center gap-1 mb-2">
					<img src={good} alt="emotion" className="w-3 h-3"/>
					<p className="text-[9px] leading-[11px] text-black">良かった</p>
				</div>	
				<p className="text-[9px] leading-[11px] text-black">商品届きました。ありがとうございました。</p>
			</div>
		</div>
    );
};

export default BuyerReview;