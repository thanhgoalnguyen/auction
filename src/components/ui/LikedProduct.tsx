import { Link } from "react-router-dom";
			
export default function LikedProduct() {
	return (
		<div className="liked-product flex flex-col gap-2">
			<div className="flex justify-between items-end pb-[6px] px-3 border-b border-neutral-300">
				<p className="text-[12px] leading-[15px]">いいね！した商品</p>
				<Link
					to="/layout/"
					className="text-[9px] leading-[11px]"
				>
					すべて見る ＞	
				</Link>
			</div>
			<div className="flex justify-center items-center py-[72px] bg-dark-300 rounded-[4px]">
				<p className="text-[12px] leading-[15px]">該当する商品はありません</p>
			</div>
		</div>
	);
}
			