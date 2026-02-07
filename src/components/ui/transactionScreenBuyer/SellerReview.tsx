import avatarSeller from "@/assets/img/32.png";
import good from "@/assets/icon/transactionScreenBuyer/good.svg";

const SellerReview = ({className = ""}) => {
    return (
		<div className={`flex gap-[14px] py-2 px-3 bg-neutral-1400 border border-black rounded-[8px] ${className}`}>
			<img src={avatarSeller} alt="buyer" className="w-9 h-9 mb-[6px]"/>
			<div className="grow pt-1 text-[9px] leading-[11px]">
				<p className="mb-[6px]">meangirls</p>
				<div className="flex items-center gap-1 mb-[6px]">
					<img src={good} alt="emotion" className="w-3 h-3"/>
					<p>良かった</p>
				</div>
				<p className="mb-1">この度はご購入いただき有難うございました。また機会がありま</p>
				<p>したら宜しくお願いします。</p>
			</div>
		</div>
    );
};

export default SellerReview;