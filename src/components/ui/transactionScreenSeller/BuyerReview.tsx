import good from "@/assets/icon/transactionScreenBuyer/good.svg";
import avatarBuyer from "@/assets/icon/myPage/avatar.svg";

const BuyerReview = ({className = ""}) => {
    return (
		<div className={`flex gap-4 min-h-[82px] gap-[14px] py-4 px-3 bg-neutral-1600 border border-black rounded-[8px] ${className}`}>
			<img src={avatarBuyer} alt="buyer" className="w-9 h-9"/>
			<div className="grow pt-1">
				<p className="mb-[6px] text-[9px] leading-[11px]">Y.Sara1985</p>
				<div className="flex items-center gap-1 mb-2">
					<img src={good} alt="emotion" className="w-3 h-3"/>
					<p className="text-[9px] leading-[11px]">良かった</p>
				</div>	
				<p className="text-[9px] leading-[11px]">商品届きました。ありがとうございました。</p>
			</div>
		</div>
    );
};

export default BuyerReview;