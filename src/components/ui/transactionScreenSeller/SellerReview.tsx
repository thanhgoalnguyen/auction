import avatarSeller from "@/assets/img/32.png";
import good from "@/assets/icon/transactionScreenBuyer/good.svg";
import edit from "@/assets/icon/transactionScreenBuyer/edit.svg";

const SellerReview = ({className = ""}) => {
    return (
		<div className={`flex gap-[14px] py-2 px-3 bg-neutral-300 border border-black rounded-[8px] ${className}`}>
			<img src={avatarSeller} alt="buyer" className="w-9 h-9"/>
			<div className="grow pt-1 text-[9px] leading-[11px] text-black">
				<div className="flex justify-between items-center">
					<p className="mb-[6px]">meangirls</p>
					<button className="flex items-center gap-[14px]">
						<p className="text-[10px] leading-[12px]">評価を変更する</p>
						<img src={edit} alt="edit" className="w-[10px] h-[10px]"/>
					</button>
				</div>
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