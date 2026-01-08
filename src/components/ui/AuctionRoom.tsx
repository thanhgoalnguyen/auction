export default function AuctionRoom({data}) {
	return (
		<div className="auction-room flex flex-col gap-2 mb-6">
			<div className="pb-[5px] px-3 border-b border-neutral-300">
				<p className="text-[9px] leading-[11px] text-neutral-700">オークションルーム</p>
			</div>
			<div className="flex items-center gap-6 px-2">
				<img 
					src={data?.img} 
					alt="avatar"
					className='w-full max-w-[50px] aspect-[50/48] rounded-[4px]'
				/>
				<div className="flex flex-col gap-[10px] text-[9px] leading-[11px] text-neutral-600">
					<p>{data?.name}</p>
					<p>{data?.time}</p>
				</div>
			</div>
		</div>
	);
}
