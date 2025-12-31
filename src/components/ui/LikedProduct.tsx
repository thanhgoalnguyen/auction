import { Link } from "react-router-dom";
			
export default function LikedProduct() {
	return (
		<div className="liked-product flex flex-col gap-[14px] px-[6px] mb-[17px]">
			<div className="w-full pl-[9px] pr-[9px]">
				<div className="flex justify-between items-end pb-[7px] pl-[18px] pr-[15px] border-b border-neutral-300">
					<p className="text-[12px] leading-[15px]">いいね！した商品</p>
					<Link
						to="/"
						className="text-[9px] leading-[11px]"
					>
						すべて見る ＞	
					</Link>
				</div>
			</div>
			<div className="flex justify-center items-center py-[72px] bg-dark-300">
				<p className="text-[12px] leading-[15px]">該当する商品はありません</p>
			</div>
		</div>
	);
}
			