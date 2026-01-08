import trash from "@/assets/icon/likeList/trash.svg";

export default function LikeListItem({data, isEdit}) {
	return (
		<div 
			className="grid grid-cols-[84fr_241fr] gap-4 items-center pb-[7px] px-2 border-b border-neutral-300"
		>
			<img
				src={data?.img}
				alt="product"
				className="aspect-square"
			/>
			<div className="flex flex-col gap-4">
				<p className="text-[13px] leading-[16px]">{data?.name}</p>
				<div className="flex justify-between items-center gap-1">
					<div className="flex items-center gap-1 text-[10px] leading-[12px]">
						<p>最低落札価格：</p>
						<p>¥{data?.money}</p>
					</div>
					<button className={!isEdit && "invisible"}>
						<img 
							src={trash} 
							alt="trash" 
							className="w-[10px] h-[14px]"
						/>
					</button>
				</div>
			</div>
		</div>
	);
}
