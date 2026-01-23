import trash from "@/assets/icon/likeList/trash.svg";

export default function LikeListItem({data, isEdit}) {
	return (
		<div 
			className="like-list-item flex items-center gap-4 pb-2 px-2 border-b border-neutral-300"
		>
			<img
				src={data?.img}
				alt="product"
				className="w-[84px] aspect-square"
			/>
			<div className="flex flex-col gap-4 grow">
				<p className="text-[13px] leading-[16px]">{data?.name}</p>
				<div className="flex justify-between items-center gap-1">
					<div className="flex items-center gap-1 text-[10px] leading-[12px]">
						<p>最低落札価格：</p>
						<p className="text-red-100">¥{data?.money}</p>
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
